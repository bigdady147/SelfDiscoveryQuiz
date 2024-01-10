<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\QuestionController;
use App\Http\Controllers\Api\ReportController;
use App\Http\Controllers\Api\QuestionPackagesController;

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
    Route::get('profile', 'userProfile');
    Route::put('profile/{id}', 'updateProfile');
    Route::get('list-user', 'index');

});


//API Question
Route::middleware('auth:api')->group(function () {
    Route::get('questions', [QuestionController::class, 'index']);
    Route::get('questions-ids', [QuestionController::class, 'getListQuestion']);
    Route::get('questions/{id}', [QuestionController::class, 'show']);
    Route::post('questions', [QuestionController::class, 'store']);
    Route::put('questions/{id}', [QuestionController::class, 'update']);
    Route::delete('questions/{id}', [QuestionController::class, 'destroy']);
    Route::put('questions/{id}/active', [QuestionController::class, 'active']);
});

//Route::middleware('auth:api')->group(function () {
//    Route::get('question-packages', [QuestionPackagesController::class, 'index']);
//    Route::get('question-packages/{id}', [QuestionPackagesController::class, 'show']);
//    Route::post('question-packages', [QuestionPackagesController::class, 'store']);
//    Route::put('question-packages/{id}', [QuestionPackagesController::class, 'update']);
//    Route::delete('question-packages/{id}', [QuestionPackagesController::class, 'destroy']);
//    Route::put('question-packages/{id}/active', [QuestionPackagesController::class, 'active']);
//});
Route::controller(QuestionPackagesController::class)->group(function () {
    Route::get('question-packages', 'index');
    Route::get('question-packages/{id}', 'show');
    Route::post('question-packages', 'store');
    Route::put('question-packages/{id}', 'update');
    Route::delete('question-packages/{id}', 'destroy');
    Route::put('question-packages/{id}/active', 'active');
});
Route::controller(ReportController::class)->group(function () {
    Route::get('report', 'index');
    Route::get('report/{id}', 'show');
    Route::post('report', 'store');
    Route::put('report/{id}', 'update');
    Route::delete('report/{id}', 'destroy');
});
