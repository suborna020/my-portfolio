<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use App\User;

class Order extends Model
{
    use HasFactory;
    protected $guarded=[];
    public function orderItems(){
        return $this->hasMany(orderItems::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    protected $with = ['user','orderItems'];
}
