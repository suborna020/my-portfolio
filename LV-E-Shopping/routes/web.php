<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;



// Route::get('/', function () {
//     return view('welcome');
// });
// start ///////////////
Route::prefix('admin')->group(base_path('routes/admin.php'));
Route::prefix('user')->group(base_path('routes/user.php'));

Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('user-login', [App\Http\Controllers\HomeController::class, 'index2'])->name('login');

Route::resource('category', CategoryController::class);
Route::get('categoryAllList', [App\Http\Controllers\CategoryController::class, 'getAllCategory']);



Route::get('/', function () {
    return view('public.public_master');
});
Route::get('/{path}', function () {
    return view('public.public_master');
});

// Logout  
// home page thke elogout kore nao 