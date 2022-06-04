<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController ;
use App\Http\Controllers\AboutusController ;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/employees', [EmployeeController::class, 'get_all_emps']);

Route::get('/employeeId/{id}', [EmployeeController::class ,'get_single_emp']);

Route::get('/aboutus',[AboutusController::class,'show']);

Route::get('/contactus',[ContactusController::class,'show']);


