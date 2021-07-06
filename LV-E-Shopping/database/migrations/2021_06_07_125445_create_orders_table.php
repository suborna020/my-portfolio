<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::enableForeignKeyConstraints();

        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('user_id');
            $table->string('comment')->nullable();
            $table->string('shippping_address')->nullable();
            $table->float('discount',8,2)->nullable();
            $table->string('status')->nullable();
            $table->string('payment_type',8,2)->default('cash');
            $table->float('total',8,2);
            $table->float('charges',8,2)->nullable()->default(0);
            $table->float('sub_total',8,2);
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
        Schema::dropIfExists('orders');
    }
}
