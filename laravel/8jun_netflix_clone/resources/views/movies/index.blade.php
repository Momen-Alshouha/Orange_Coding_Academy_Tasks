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

    @if ($message = Session::get('success'))
        <div class="container">
            <div class="alert alert-success" role="alert">
                    {{$message}}
            </div>
        </div>
    @endif


 
   <div class="container">
    <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Movie Name</th>
            <th scope="col">Movie Description</th>
            <th scope="col">Movie Gener</th>
            <th scope="col">Movie Image</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            <?php $i=1?>
          <tr>
           @foreach ($movies as $movie)
            <th scope="row">{{$i++}}</th>
            <td>{{$movie->movie_name}}</td>
            <td>{{$movie->movie_description}}</td>
            <td>{{$movie->movie_gener}}</td>
            <td> <img width="180px" height="200px" src="{{asset('storage/docs/'.$movie->movie_img)}}" alt="alterante text"></td>
            <td> 
                <div class="row">
                    <div class="col-sm">
                     <a class="btn btn-primary" href="{{route('movies.edit',$movie->id)}}">EDIT</a>
                    </div>
                    <div class="col-sm">
                      <a class="btn btn-info" href="{{route('movies.show',$movie->id)}}">SHOW</a>
                    </div>
                    <div class="col-sm">
                     <form action="{{route('movies.destroy',$movie->id)}}" method="POST">
                         @csrf
                         @method('DELETE')
                        <button type="submit" class="btn btn-danger">DELETE</button>
                     </form>
                    </div>
                  </div>
            </td>
        </tr>
        @endforeach
        </tbody>
      </table>
   </div>
@endsection
