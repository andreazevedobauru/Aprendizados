<?php

use Illuminate\Database\Seeder;

class ImovelTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\Maps\Entities\Imovel::class, 10)->create();
    }
}
