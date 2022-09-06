<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $page = $request->number ?? 5;
        return Inertia::render('Customer/Index', [
            'search' => $request->search,
            'data' => User::render($request->search, $page, Role::CUSTOMER),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Customer/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRequest $request)
    {
        try {
            $data = $request->validated();
            $data['password'] = Hash::make($data['salary_number']);
            User::create($data);
            return redirect()
                ->route('customers.index')
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
     * @param  \App\Models\User  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(User $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(User $customer)
    {
        return Inertia::render('Customer/Edit', [
            'data' => $customer,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, User $customer)
    {
        try {
            $customer->update($request->validated());
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
     * @param  \App\Models\User  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $customer)
    {
        //
    }

    public function destroyBulk(Request $request)
    {
        try {
            User::whereIn('id', $request->keys())->delete();
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
