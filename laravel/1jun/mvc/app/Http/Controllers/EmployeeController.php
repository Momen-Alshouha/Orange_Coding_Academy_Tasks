<?php

namespace App\Http\Controllers;
use App\Models\Employee;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;

class EmployeeController extends Controller
{
    public function get_all_emps(){
       $data = Employee::all();
       return view('employees',compact('data'));
    }

    public function get_single_emp(){
        $id = request('id');
        $data = Employee::where('id', $id)->first();
        return view('employeeId', compact('data'));
     }
}
