<?php

use Illuminate\Support\Facades\Route;

Route::get('/login','Admin\LoginController@showLoginForm')->name('admin.login');
Route::post('/login','Admin\LoginController@login')->name('admin.login.post');
Route::group(['middleware' => 'auth:admin'],function(){
    Route::get('/', function () {
        return view('admin.admin_master');
    })->name('admin.dashboard');
    Route::get('/logout','Admin\LoginController@logout')->name('admin.logout');
});



Route::get('/{path}', function () {
    return view('admin.admin_master');

});