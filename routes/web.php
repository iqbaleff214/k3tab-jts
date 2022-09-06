<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', '/login');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::middleware(['role:superadmin,supervisor,foreman'])->group(function() {
        Route::delete('/users/bulk', [UserController::class, 'destroyBulk'])->name('users.destroy-bulk');
        Route::resource('/users', UserController::class);
    });

    Route::middleware(['role:superadmin,supervisor'])->group(function() {
        Route::delete('/customers/bulk', [CustomerController::class, 'destroyBulk'])->name('customers.destroy-bulk');
        Route::resource('/customers', CustomerController::class);
    });

});
