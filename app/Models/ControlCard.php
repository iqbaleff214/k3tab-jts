<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ControlCard extends Model
{
    use HasFactory;

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
