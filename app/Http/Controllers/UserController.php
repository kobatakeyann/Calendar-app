<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUserName(Request $request)
    {
        return response()->json(['username' => $request->user()->name]);
    }
}
