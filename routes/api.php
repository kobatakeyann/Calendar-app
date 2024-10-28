<?php

use App\Http\Controllers\EventController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
  Route::get('/events', [EventController::class, 'getAllEvents']);
  Route::post('/events', [EventController::class, 'store']);
  Route::get('/events/{id}', [EventController::class, 'show']);
  Route::put('/events/{id}', [EventController::class, 'update']);
  Route::delete('/events/{id}', [EventController::class, 'destroy']);
  Route::get('/events/on-date', [EventController::class, 'geteventsOnDate']);
});
