<?php

use App\Http\Controllers\ControlCardController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ServiceOrderController;
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

    // Dashboard
    Route::get('/dashboard', [PageController::class, 'dashboard'])->name('dashboard');

    // User Management
    Route::middleware(['role:superadmin'])->group(function() {
        Route::delete('/users/bulk', [UserController::class, 'destroyBulk'])->name('users.destroy-bulk');
        Route::resource('/users', UserController::class);
    });

    // Customer
    Route::middleware(['role:superadmin'])->group(function() {
        Route::delete('/customers/bulk', [CustomerController::class, 'destroyBulk'])->name('customers.destroy-bulk');
        Route::resource('/customers', CustomerController::class)->except(['index', 'show']);
    });
    Route::resource('/customers', CustomerController::class)->only(['index', 'show']);

    // Service Order
    Route::put('/service-orders/done', [ServiceOrderController::class, 'done'])->name('service-orders.done');
    Route::resource('/service-orders', ServiceOrderController::class);
    Route::put('/service-orders/control-cards/approve', [ControlCardController::class, 'approve'])->name('control-cards.approve');
    Route::resource('/service-orders/{service_order}/control-cards', ControlCardController::class);

});
