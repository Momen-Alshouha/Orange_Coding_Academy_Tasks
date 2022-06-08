@extends('movies.layout')

@section('content')

<h1 style="background-color: #E7E8ED;padding:15px; text-align:center">Add Movie</h1>


<br>
   <div class="container">
        <form action="{{route('movies.store')}}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <label>movie name</label>
                <input name="movie_name" type="text" class="form-control" placeholder="movie name">
            </div>

            <div class="form-group">
                <label>movie year</label>
                <input name="movie_gener" type="text" class="form-control" placeholder="movie year">
            </div>

            <div class="form-group">
                <label>movie image</label>
                <input type="file" name="movie_img" class="form-control">
            </div>
        
            
            <div class="form-group">
                <label>Movie Description</label>
                <textarea name="movie_description" class="form-control" rows="3"></textarea>
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-primary">CREATE</button>
                <a href="{{route('movies.index')}}" class="btn btn-primary">Back to movies</a>
            </div>
        </form>
   </div>
@endsection