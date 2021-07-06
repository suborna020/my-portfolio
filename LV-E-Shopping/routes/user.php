<?php

use Illuminate\Support\Facades\Route;

// Route::group(['middleware' => 'auth'],function(){
//     Route::get('user-dashboard','HomeController@index' );
//     Route::get('/','HomeController@authUser');
// });


// Route::get('/{path}','HomeController@index' );


Route::get('/', function () {
    return view('public.public_master');
});
Route::get('/', function () {
    return response()->json([
        'user'=> \Auth::user(),

        // 'user' => = user.js theke action function er returned data.user object
    ],200);
})->name('data.user');
Route::get('/{path}', function () {
    return view('public.public_master');
});
