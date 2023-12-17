<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\QuestionController;
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

// API Authentication
Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::get('me/post', [AuthController::class, 'getAllPostByUser']);
    Route::get('me', 'me');
    Route::put('me', [AuthController::class, 'updateUser']);
});


//API Question
Route::controller(QuestionController::class)->group(function () {
    Route::get('questions', [QuestionController::class, 'index']);
    Route::get('questions/{id}', [QuestionController::class, 'show']);
    Route::post('questions', [QuestionController::class, 'store']);
    Route::put('questions/{id}', [QuestionController::class, 'update']);
    Route::delete('questions/{id}', [QuestionController::class, 'destroy']);
});
