<?php

namespace App\Models;

use App\Enums\Role;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'salary_number',
        'address',
        'phone',
        'superior_id',
        'role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_photo_url',
    ];

    public function scopeRender($query, $search, $page)
    {
        return $query
            ->with(['superior', 'subordinate'])
            ->search($search)
            ->when(auth()->user()->role == Role::FOREMAN->value, function($query) {
                return $query->where('superior_id', auth()->user()->id);
            })
            ->when(auth()->user()->role == Role::SUPERVISOR->value, function($query) {
                return $query->whereNotIn('role', ['supervisor', 'superadmin']);
            })
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
                ->where('name', 'LIKE', '%' . $find . '%')
                ->orWhere('salary_number', 'LIKE', '%' . $find . '%');
        });
    }

    public function scopeRole($query, Role $role)
    {
        return $query->where('role', $role->value);
    }

    public function superior()
    {
        return $this->belongsTo(User::class, 'superior_id', 'id');
    }

    public function subordinate()
    {
        return $this->hasMany(User::class, 'superior_id', 'id');
    }
}
