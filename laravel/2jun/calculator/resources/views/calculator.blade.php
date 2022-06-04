@extends('layouts.master')

@section('content')
    <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <h1 class="display-4">Welcome calculator!</h1>
    </div>
<div style="background-color: #eee; padding:15px" class="container">
    <form method="POST" action="/calculate">
      @csrf
        <div class="form-group">
          <label for="exampleInputEmail1">first number</label>
          <input required name="firstnumber" type="number" class="form-control" aria-describedby="emailHelp">
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">second number</label>
          <input required name="secondnumber" type="number" class="form-control">
        </div>

        <div class="form-group form-check">
            <select required name="operator" class="custom-select">
                <option disabled selected>Choose operator...</option>
                <option value="add">+</option>
                <option value="subtract">-</option>
                <option value="multiply">*</option>
                <option value="divide">/</option>
              </select>
        </div>
        <button type="submit" class="btn btn-primary">CALCULATE</button>
      </form>
    </div><br>

   
      @if (session('info'))
     <div class="container">
      <div class="alert alert-dark" role="alert">
        {{(session('info'))}}
       </div>
     </div>
      @endif
  

@endsection
