<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
  
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('home');

    }
    public function index2()
    {
        return view('public.public_master');
    }
    public function authUser(){
        return response()->json([
            'user'=> \Auth::user()
            // user.js theke action function er returned data.user 
        ],200);
       
    }
}

