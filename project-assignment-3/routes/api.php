<?php

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;
// use Mocking\Controllers\Controller;
// /*
// |--------------------------------------------------------------------------
// | API Routes
// |--------------------------------------------------------------------------
// |
// | Here is where you can register API routes for your application. These
// | routes are loaded by the RouteServiceProvider and all of them will
// | be assigned to the "api" middleware group. Make something great!
// |
// */

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('/getAllData', 'Mocking\Controllers\Controller@getData');
// // api.php
// // use Mocking\Controllers\Controller;

// Route::get('/getAllData', [Controller::class, 'getData']);

use Mocking\Controllers\Controller;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/getAllData', [Controller::class, 'getData']);
Route::post('/postData', [Controller::class, 'postData']);
Route::put('/putData', [Controller::class, 'putData']);
Route::patch('/patchData', [Controller::class, 'patchData']);
