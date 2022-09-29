<?php

namespace App\Models;

use App\Enums\Role;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ControlCard extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $casts = [
        'is_accepted' => 'boolean',
        'is_approved' => 'boolean',
    ];

    public function scopeRender($query, $search, $page)
    {
        return $query
            ->with(['reporter', 'attachments'])
            ->search($search)
            ->when(in_array(auth()->user()->role, ['customer', 'sales_support']), fn($q) => $q->where('is_approved', true)->where('is_accepted', true))
            ->when(auth()->user()->role == Role::SUPERVISOR->value, fn($q) => $q->where('is_approved', true))
            ->oldest()
            ->paginate($page)
            ->appends([
                'search' => $search,
                'number' => $page,
            ]);
    }

    public function scopeSearch($query, $search)
    {
        return $query->when($search, function ($query, $find) {
            return $query
                ->where('special_note', 'LIKE', '%' . $find . '%')
                ->orWhereRaw('DATE(created_at) LIKE "%' . $find . '%"');
        });
    }

    public function so()
    {
        return $this->belongsTo(ServiceOrder::class);
    }

    public function attachments()
    {
        return $this->hasMany(Attachment::class);
    }

    public function reporter()
    {
        return $this->belongsTo(User::class, 'serviceman_id');
    }
}
