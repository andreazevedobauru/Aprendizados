<?php

namespace Maps\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Imovel extends Model implements Transformable
{
    use TransformableTrait;

    protected $fillable = [];
    protected $table = 'imovel';


}
