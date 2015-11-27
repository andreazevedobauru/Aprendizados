<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Imovel extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('imovel', function (Blueprint $table) {
            $table->increments('id');
            $table->string('titulo');
            $table->float('lat',10,6);
            $table->float('lng',10,6);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('imovel', function (Blueprint $table) {
            //
        });
    }
}
