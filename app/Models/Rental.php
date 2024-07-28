<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Rental extends Model
{
    use HasFactory;

    protected $fillable = [
        'address',
        'type',
        'size',
        'bedrooms',
        'rent',
        'available',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
