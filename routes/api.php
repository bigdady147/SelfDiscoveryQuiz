<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::get('me/post', [AuthController::class, 'getAllPostByUser']);
    Route::get('me', 'me');
    Route::put('me', [AuthController::class, 'updateUser']);
});

//Route::group([
//    'middleware' => 'api',
//    'prefix' => 'auth'
//
//], function ($router) {
//    Route::post('/login', [AuthController::class, 'login']);
//    Route::post('/logout', [AuthController::class, 'logout']);
//    Route::post('/refresh', [AuthController::class, 'refresh']);
//    Route::get('/user-profile', [AuthController::class, 'userProfile']);
//    Route::post('/change-pass', [AuthController::class, 'changePassWord']);
//});
