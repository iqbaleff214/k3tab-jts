<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_orders', function (Blueprint $table) {
            $table->id();
            $table->string('segment')->nullable();
            $table->string('operation')->nullable();
            $table->string('job_code')->nullable();
            $table->string('component_code')->nullable();
            $table->string('smu')->nullable();
            $table->boolean('warranty')->default(false);
            $table->string('warranty_text')->nullable();
            $table->string('pip_psp')->nullable();
            $table->string('job_control')->nullable();
            $table->string('business_area')->nullable();
            $table->string('customer_name')->nullable()->comment('users.name');
            $table->string('service_team')->nullable();
            $table->string('group_number')->nullable();
            $table->string('customer_no')->nullable()->comment('users.salary_number');
            $table->string('make')->nullable();
            $table->string('model')->nullable();
            $table->string('serial_number')->nullable();
            $table->string('arrg_no')->nullable();
            $table->unsignedInteger('std_hours')->default(0);
            $table->text('job_description')->nullable();
            $table->unsignedInteger('labor_hours')->default(0);
            $table->date('date_sent')->nullable();
            $table->date('date_required')->nullable();
            $table->date('date_returned')->nullable();
            $table->date('date_received_back')->nullable();
            $table->date('date_segment_closed')->nullable();
            $table->string('receive_by')->nullable();
            $table->boolean('surplus_part_returned')->default(false);
            $table->boolean('sims_completed')->default(false);
            $table->longText('note')->nullable();
            $table->string('deliver_to')->nullable();
            $table->string('return_to')->nullable();
            $table->boolean('signed_1')->default(false);
            $table->boolean('signed_2')->default(false);
            $table->string('status')->default('todo');
            $table->foreignId('customer_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('supervisor_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('foreman_id')->nullable()->constrained('users')->cascadeOnDelete();
            $table->foreignId('serviceman_id')->nullable()->constrained('users')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_orders');
    }
};
