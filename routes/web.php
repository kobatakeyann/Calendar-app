<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


Auth::routes();

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*')->middleware('auth');
