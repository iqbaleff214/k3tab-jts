<?php

namespace App\Models;

use App\Enums\Role;
use App\Enums\ServiceOrderStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceOrder extends Model
{
    use HasFactory;

    protected $guarded = ['created_at'];

    protected $appends = [
        'service_order_no',
        'service_order_status'
    ];

    public function getServiceOrderNoAttribute()
    {
        return sprintf("%010d", $this->id);
    }

    public function getServiceOrderStatusAttribute()
    {
        $statuses = [
            ServiceOrderStatus::TO_DO->value => 'TO DO',
            ServiceOrderStatus::IN_PROGRESS->value => 'IN PROGRESS',
            ServiceOrderStatus::DONE->value => 'DONE',
        ];

        return $statuses[$this->status];
    }

    public function scopeRender($query, $search, $page, $status)
    {
        return $query
            ->with([
                'foreman', 'serviceman', 'servicemen', 'supervisor',
                'controlCard', 'controlCardApproved', 'controlCardAccepted',
                'controlCard.reporter', 'controlCardApproved.reporter', 'controlCardAccepted.reporter',
                'controlCard.attachments', 'controlCardApproved.attachments', 'controlCardAccepted.attachments',
            ])
            ->search($search)
            ->byRole()
            ->when($status, fn($q) => $q->where('status', $status))
            ->paginate($page)
            ->appends([
                'search' => $search,
                'number' => $page,
                'status' => $status,
            ]);
    }

    public function scopeByRole($query)
    {
        return $query
            ->when(auth()->user()->role == Role::SUPERVISOR->value, fn($q) => $q->where('supervisor_id', auth()->user()->id))
            ->when(auth()->user()->role == Role::FOREMAN->value, fn($q) => $q->where('foreman_id', auth()->user()->id))
            ->when(auth()->user()->role == Role::CUSTOMER->value, fn($q) => $q->where('customer_id', auth()->user()->id))
            ->when(auth()->user()->role == Role::SERVICEMAN->value, function($q) {
                return $q->whereHas('servicemen', fn($b) => $b->where('user_id', auth()->user()->id));
            });
    }

    public function scopeDashboardCount($query, ServiceOrderStatus $status)
    {
        return $query
            ->when(auth()->user()->role == Role::SUPERVISOR->value, fn($q) => $q->where('supervisor_id', auth()->user()->id))
            ->when(auth()->user()->role == Role::FOREMAN->value, fn($q) => $q->where('foreman_id', auth()->user()->id))
            ->when(auth()->user()->role == Role::CUSTOMER->value, fn($q) => $q->where('customer_id', auth()->user()->id))
            ->when(auth()->user()->role == Role::SERVICEMAN->value, function($q) {
                return $q->whereHas('servicemen', fn($b) => $b->where('user_id', auth()->user()->id));
            })
            ->status($status)
            ->count();
    }

    public function scopeSearch($query, $search)
    {
        return $query->when($search, function ($query, $find) {
            return $query
                ->where('id', 'LIKE', $find . '%')
                ->orWhere('job_code', 'LIKE', $find . '%')
                ->orWhere('customer_name', 'LIKE', '%' . $find . '%');
        });
    }

    public function scopeStatus($query, ServiceOrderStatus $status)
    {
        return $query->where('status', $status);
    }

    public function customer()
    {
        return $this->belongsTo(User::class, 'customer_id', 'id');
    }

    public function supervisor()
    {
        return $this->belongsTo(User::class, 'supervisor_id', 'id');
    }

    public function foreman()
    {
        return $this->belongsTo(User::class, 'foreman_id', 'id');
    }

    public function serviceman()
    {
        return $this->belongsTo(User::class, 'serviceman_id', 'id');
    }

    public function servicemen()
    {
        return $this
            ->belongsToMany(User::class, 'service_order_user', 'service_order_id', 'user_id')
            ->as('servicemen');
    }

    public function controlCard()
    {
        return $this->hasMany(ControlCard::class)->oldest(); //->orderBy('created_at');
    }

    public function controlCardApproved()
    {
        return $this->controlCard()->where('is_approved', true);
    }

    public function controlCardAccepted()
    {
        return $this->controlCardApproved()->where('is_accepted', true);
    }
}
