<?php

namespace App\Http\Requests;

use App\Enums\Role;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreServiceOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->role == Role::SUPERVISOR->value;
    }

    public function attributes()
    {
        return [
            'id' => 'service order number',
            'foreman_id' => 'foreman'
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
            'id' => ['nullable', 'numeric', 'gt:0', Rule::unique('service_orders')],
            'segment' => ['nullable'],
            'operation' => ['nullable'],
            'job_code' => ['nullable'],
            'component_code' => ['nullable'],
            'smu' => ['nullable'],
            'warranty' => ['boolean'],
            'warranty_text' => ['nullable'],
            'pip_psp' => ['nullable'],
            'job_control' => ['nullable'],
            'business_area' => ['nullable'],
            'customer_name' => ['nullable'],
            'service_team' => ['nullable'],
            'group_number' => ['nullable'],
            'customer_no' => ['nullable'],
            'make' => ['nullable'],
            'model' => ['nullable'],
            'serial_number' => ['nullable'],
            'arrg_no' => ['nullable'],
            'std_hours' => ['nullable'],
            'job_description' => ['nullable'],
            'labor_hours' => ['nullable'],
            'date_sent' => ['nullable'],
            'date_required' => ['nullable'],
            'date_returned' => ['nullable'],
            'date_received_back' => ['nullable'],
            'date_segment_closed' => ['nullable'],
            'receive_by' => ['nullable'],
            'surplus_part_returned' => ['nullable'],
            'sims_completed' => ['nullable'],
            'note' => ['nullable'],
            'deliver_to' => ['nullable'],
            'return_to' => ['nullable'],
            'signed_1' => ['nullable'],
            'signed_2' => ['nullable'],
            'status' => ['nullable'],
            'customer_id' => ['nullable'],
            'supervisor_id' => ['nullable'],
            'foreman_id' => ['nullable'],
            'serviceman_id' => ['nullable'],
            'progress_percentage' => ['numeric', 'gte:0'],
        ];
    }
}
