<?php

namespace App\Http\Requests;

use App\Enums\Role;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->superior_id == auth()->user()->id || in_array(auth()->user()->role, ['superadmin', 'supervisor']) ;
    }

    public function attributes()
    {
        return [
            'salary_number' => $this->role == 'customer' ? 'customer number' : 'salary number',
            'name' => $this->role == 'customer' ? 'customer name' : 'name',
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string'],
            'salary_number' => ['required', Rule::unique('users')->ignore($this->id)],
            'address' => 'nullable',
            'email' => 'nullable',
            'phone' => 'nullable',
            'superior_id' => 'nullable',
        ];
    }
}
