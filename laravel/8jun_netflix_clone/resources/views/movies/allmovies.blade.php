@extends('movies.layout')

@section('content')
    <div class="container">
        <div class="jumbotron">
            <h1 class="display-4">Netflix Application</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="create" role="button">Create Movie</a>
            <a class="btn btn-primary btn-lg" href="allmovies" role="button">All Movies</a>
        </div>
    </div>
<div class="card-group">
    @foreach ($allmovies as $movie)
    <div class="d-inline-flex p-2 bd-highlight"  style="width: 25%;">
        <div class="card">
            <div class="card-body">
                <img width="400px" height="400px" src="{{asset('storage/docs/'.$movie->movie_img)}}" alt="alterante text"><br><br>
                     <h5 class="card-title">{{$movie->movie_name}} - {{$movie->movie_gener}}</h5>
                     <p class="card-text">{{$movie->movie_description}}</p>
             </div>
        </div>
    </div>
    @endforeach
    </div>
@endsection