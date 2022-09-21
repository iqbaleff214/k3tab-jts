<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use App\Enums\ServiceOrderStatus;
use App\Http\Requests\StoreServiceOrderRequest;
use App\Http\Requests\UpdateServiceOrderRequest;
use App\Models\ServiceOrder;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class ServiceOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $page = $request->number ?? 5;
        return Inertia::render('ServiceOrder/Index', [
            'search' => $request->search,
            'status' => $request->status,
            'data' => ServiceOrder::render($request->search, $page, $request->status),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('ServiceOrder/Create', [
            'customers' => User::role(Role::CUSTOMER)->get(),
            'foremen' => User::role(Role::FOREMAN)->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreServiceOrderRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreServiceOrderRequest $request)
    {
        try {
            $data = $request->validated();
            $data['supervisor_id'] = auth()->user()->id;

            if ($request->new_customer) {
                $customer = User::updateOrCreate([
                    'salary_number' => $data['customer_no'],
                ], [
                    'name' => $data['customer_name'],
                    'password' => Hash::make($data['customer_no']),
                    'role' => Role::CUSTOMER,
                ]);

                $data['customer_id'] = $customer->id;
            }

            ServiceOrder::create($data);

            return redirect()
                ->route('service-orders.index')
                ->with('flash.banner', 'Success!')
                ->with('flash.bannerStyle', 'success');
        } catch (\Throwable $th) {
            return redirect()
                ->back()
                ->with('flash.banner', $th->getMessage())
                ->with('flash.bannerStyle', 'danger');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ServiceOrder  $service_order
     * @return \Illuminate\Http\Response
     */
    public function show(ServiceOrder $service_order)
    {
        dd($service_order);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ServiceOrder  $service_order
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceOrder $service_order)
    {
        $service_order->load(['foreman', 'serviceman', 'servicemen']);
        return Inertia::render('ServiceOrder/Edit', [
            'data' => $service_order,
            'servicemen' => auth()->user()->subordinate()->role(Role::SERVICEMAN)->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateServiceOrderRequest  $request
     * @param  \App\Models\ServiceOrder  $service_order
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateServiceOrderRequest $request, ServiceOrder $service_order)
    {
        try {
            $data = $request->validated();
            if ($data['progress_percentage'] == 100) {
                $data['status'] = ServiceOrderStatus::DONE;
            }

            $service_order->update($data);
            if ($request->assign_serviceman && auth()->user()->role == Role::FOREMAN->value && $request->serviceman_id) {
                $service_order->servicemen()->syncWithoutDetaching([$request->serviceman_id]);
            }

            return redirect()
                ->back()
                ->with('flash.banner', 'Success!')
                ->with('flash.bannerStyle', 'success');
        } catch (\Throwable $th) {
            return redirect()
                ->back()
                ->with('flash.banner', $th->getMessage())
                ->with('flash.bannerStyle', 'danger');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ServiceOrder  $service_order
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceOrder $service_order)
    {
        //
    }

    public function done(Request $request)
    {
        try {
            ServiceOrder::whereIn('id', $request->data)->update(['status' => ServiceOrderStatus::DONE, 'progress_percentage' => 100]);
            return redirect()
                ->back()
                ->with('flash.banner', 'Success!')
                ->with('flash.bannerStyle', 'success');
        } catch (\Throwable $th) {
            return redirect()
                ->back()
                ->with('flash.banner', $th->getMessage())
                ->with('flash.bannerStyle', 'danger');
        }
    }
}
