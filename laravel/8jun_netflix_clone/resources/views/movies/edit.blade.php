@extends('movies.layout')

@section('content')
<h1 style="background-color: #E7E8ED;padding:15px; text-align:center">Edit Movie</h1>


<br>
   <div class="container">
        <form action="{{route('movies.update',$movie->id)}}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div class="form-group">
                <label>movie name</label>
                <input value="{{$movie->movie_name}}" name="movie_name" type="text" class="form-control" placeholder="movie name">
            </div>

            <div class="form-group">
                <label>movie year</label>
                <input value="{{$movie->movie_gener}}" name="movie_gener" type="text" class="form-control" placeholder="movie year">
            </div>

            <div class="form-group">
                <label>movie image</label>
                <input  type="file" name="movie_img" class="form-control">
            </div>
        
            
            <div class="form-group">
                <label>Example textarea</label>
                <textarea name="movie_description" class="form-control" rows="3">
                    {{$movie->movie_description}}
                </textarea>
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-primary">UPDATE</button>
            </div>
        </form>
   </div>
@endsection