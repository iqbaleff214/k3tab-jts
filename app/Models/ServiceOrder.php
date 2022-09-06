<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceOrder extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

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

    public function notes()
    {
        return $this->hasMany(ControlCard::class);
    }
}
