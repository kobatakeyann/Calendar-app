<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


Auth::routes();

// Route::get('/home', [HomeController::class, 'index']);

// Route::get('/{any}', function () {
//     return view('app');
// })->where('any', '.*')->middleware('auth');


Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');
