<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController ;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/Employees', [EmployeeController::class, 'get_all_emps']);

Route::get('/EmployeeId', [EmployeeController::class ,'get_single_emp']);


