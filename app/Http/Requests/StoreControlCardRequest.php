<?php

namespace App\Http\Requests;

use App\Enums\Role;
use Illuminate\Foundation\Http\FormRequest;

class StoreControlCardRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->role == Role::SERVICEMAN->value && $this->serviceman_id == auth()->user()->id;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'date' => 'required',
            'special_note' => 'required|string',
            'comment' => 'nullable',
            'is_approved' => 'boolean',
            'is_accepted' => 'boolean',
            'service_order_id' => 'required',
            'serviceman_id' => 'required',
        ];
    }
}
