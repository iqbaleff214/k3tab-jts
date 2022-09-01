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
            'phone' => 'nullable',
            'superior_id' => 'nullable',
        ];
    }
}
