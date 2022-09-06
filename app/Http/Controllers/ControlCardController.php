<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreControlCardRequest;
use App\Http\Requests\UpdateControlCardRequest;
use App\Models\ControlCard;

class ControlCardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreControlCardRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreControlCardRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ControlCard  $controlCard
     * @return \Illuminate\Http\Response
     */
    public function show(ControlCard $controlCard)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ControlCard  $controlCard
     * @return \Illuminate\Http\Response
     */
    public function edit(ControlCard $controlCard)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateControlCardRequest  $request
     * @param  \App\Models\ControlCard  $controlCard
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateControlCardRequest $request, ControlCard $controlCard)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ControlCard  $controlCard
     * @return \Illuminate\Http\Response
     */
    public function destroy(ControlCard $controlCard)
    {
        //
    }
}
