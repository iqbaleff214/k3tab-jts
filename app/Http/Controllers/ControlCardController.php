<?php

namespace App\Http\Controllers;

use App\Enums\ServiceOrderStatus;
use App\Http\Requests\StoreControlCardRequest;
use App\Http\Requests\UpdateControlCardRequest;
use App\Models\ControlCard;
use App\Models\ServiceOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ControlCardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, ServiceOrder $service_order)
    {
        $service_order->load(['foreman', 'serviceman', 'servicemen', 'supervisor']);
        $page = $request->number ?? 5;
        return Inertia::render('ServiceOrder/ControlCard/Index', [
            'search' => $request->search,
            'data' => $service_order->controlCard()->render($request->search, $page),
            'so' => $service_order,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(ServiceOrder $service_order)
    {
        return Inertia::render('ServiceOrder/ControlCard/Create', [
            'so' => $service_order,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreControlCardRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreControlCardRequest $request, ServiceOrder $service_order)
    {
        try {
            DB::beginTransaction();
            if ($service_order->status == ServiceOrderStatus::TO_DO->value) {
                $service_order->update(['status' => ServiceOrderStatus::IN_PROGRESS]);
            }
            $cc = ControlCard::create($request->validated());
            if ($request->hasFile('file')) {
                $fileName = time() . '_' . $request->file('file')->getClientOriginalName();
                $cc->attachments()->create([
                    'path' => asset('storage/' . $fileName),
                ]);
                Storage::putFileAs('public', $request->file('file'), $fileName);
            }
            DB::commit();
            return redirect()
                ->route('control-cards.index', $service_order->id)
                ->with('flash.banner', 'Success!')
                ->with('flash.bannerStyle', 'success');
        } catch (\Throwable $th) {
            DB::rollBack();
            return redirect()
                ->back()
                ->with('flash.banner', $th->getMessage())
                ->with('flash.bannerStyle', 'danger');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ControlCard  $control_card
     * @return \Illuminate\Http\Response
     */
    public function show(ServiceOrder $service_order, ControlCard $control_card)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ControlCard  $control_card
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceOrder $service_order, ControlCard $control_card)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateControlCardRequest  $request
     * @param  \App\Models\ControlCard  $control_card
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateControlCardRequest $request, ServiceOrder $service_order, ControlCard $control_card)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ControlCard  $control_card
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, ServiceOrder $service_order, $control_card)
    {
        try {
            ControlCard::whereIn('id', $request->data)->delete();
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

    public function approve(Request $request)
    {
        try {
            $column = auth()->user()->role == 'supervisor' ? 'is_accepted' : 'is_approved';
            ControlCard::whereIn('id', $request->data)->update([$column => true]);
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
