<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    
    /* 
        o	id 
        o	movie_name
        o	movie_description
        o	movie_gener
        o	movie_img
    */

    use HasFactory;
    protected $fillable = ['movie_name','movie_description','movie_gener','movie_img'];
}
