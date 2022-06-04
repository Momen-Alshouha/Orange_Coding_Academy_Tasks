<?php

namespace App\Http\Controllers;

use App\Models\aboutus;
use App\Http\Requests\StoreaboutusRequest;
use App\Http\Requests\UpdateaboutusRequest;

class AboutusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreaboutusRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreaboutusRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\aboutus  $aboutus
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        return view('aboutus');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\aboutus  $aboutus
     * @return \Illuminate\Http\Response
     */
    public function edit(aboutus $aboutus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateaboutusRequest  $request
     * @param  \App\Models\aboutus  $aboutus
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateaboutusRequest $request, aboutus $aboutus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\aboutus  $aboutus
     * @return \Illuminate\Http\Response
     */
    public function destroy(aboutus $aboutus)
    {
        //
    }
}
