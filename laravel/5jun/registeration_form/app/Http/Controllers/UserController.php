<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{

    public function show_data(){
        $users = User::all();
        return view('index', compact('users'));
    }

    public function insert_user(Request $request) {
        $user = User::create($request->all());
        return redirect('index')->with('success','user added successfully');
    } 

    public function delete_user($user_id) {
        
        $user = User::find($user_id)->delete();

        return redirect('index')->with('success','user deleted successfully');
    }

}
