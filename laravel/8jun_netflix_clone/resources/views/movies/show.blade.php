@extends('movies.layout')

@section('content')
<h1 style="background-color: #E7E8ED;padding:15px; text-align:center">Show {{$movie->movie_name}} Movie</h1>


       <br><br>

        <div class="mx-auto" class="container" style="max-width: 1000px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img width="500px" height="500px" src="{{asset('storage/docs/'.$movie->movie_img)}}" alt="alterante text">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{$movie->movie_name}} - {{$movie->movie_gener}}</h5>
                  <p class="card-text">{{$movie->movie_description}}</p>
                </div>
              </div>
            </div>
          </div>
    
@endsection