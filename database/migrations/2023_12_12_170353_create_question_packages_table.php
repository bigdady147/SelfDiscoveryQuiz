<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('question_packages', function (Blueprint $table) {
            $table->id()->unique();
            $table->string('name');
            $table->string('image_packages')->nullable();
            $table->string('test_interface')->nullable();
            $table->string('status',)->nullable();
            $table->double('time',)->nullable();
            $table->json('question_ids',)->nullable();
            $table->string('created_by',)->nullable();
            $table->string('updated_by',)->nullable();
            $table->double('level',)->nullable();
            $table->double('tested',)->nullable();
            $table->double('number_question',)->nullable();
            $table->double('category',)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('question_packages');
    }
};
