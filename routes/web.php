<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use PHPUnit\Framework\Attributes\Group;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/clear-cache', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('route:clear');
    Artisan::call('view:clear');
    return "Cache is cleared";
})->name('clear.cache');

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('app-calculator', [HomeController::class, 'appCalculator'])->name('app.calculator');

Route::get('mortgage-calculators/{page?}', [HomeController::class, 'mortgageCalculators'])->name('mortgage.calculators');


Route::group(['middleware' => 'auth'], function () {

    Route::group(['middleware' => 'role.admin'], function () {

        Route::group(['prefix' => 'admin'], function () {
            Route::get('/', function () {
                return view('admin.pages.dashboard');
            })->name('admin.dashboard');

            Route::resource('users', UserController::class)->except(['show']);

            Route::post('/users/{user}/logout', [UserController::class, 'logoutUser'])->name('users.logout');
        });
       
    });

    Route::get('/logout', [AuthController::class, 'logout'])->name('logout');

});

Route::group(['middleware' => 'guest'], function () {
    Route::get('/login', function () {
        return view('pages.auth.login');
    })->name('login');

    Route::post('/login', [AuthController::class, 'login'])->name('login');
});
