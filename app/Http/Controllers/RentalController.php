<?php

namespace App\Http\Controllers;

use App\Models\Rental;
use Illuminate\Auth\Access\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;

class RentalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Rentals/Index', [
            'rentals' => Rental::with('user:id,name')->first()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Rentals/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'address' => 'required|string|max:255',
            'type' => 'required|string|max:10',
            'size' => 'required|integer|numeric',
            'bedrooms' => 'required|integer|numeric',
            'rent' => 'required|integer|numeric',
            'available' => 'required|boolean'
        ]);

        $request->user()->rentals()->create($validated);

        return redirect(route('rentals.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Rental $rental)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rental $rental)
    {
        return Inertia::render('Rentals/Edit', [
            'rental' => $rental,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rental $rental)
    {
        $validated = $request->validate([
            'address' => 'required|string|max:255',
            'type' => 'required|string|max:10',
            'size' => 'required|integer|numeric',
            'bedrooms' => 'required|integer|numeric',
            'rent' => 'required|integer|numeric',
            'available' => 'required|boolean'
        ]);

        $rental->update($validated);

        // return Redirect::back()->with('success', 'Property updated.');
        return redirect(route('rentals.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rental $rental): RedirectResponse
    {
        // Gate::authorize('delete', $rental);
        $rental->delete();

        return redirect(route('rentals.index'));
        // return Redirect::back()->with('success', 'Property deleted.');
    }
}