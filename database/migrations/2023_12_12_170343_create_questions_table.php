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
        Schema::create('questions', function (Blueprint $table) {
            $table->id()->unique();
            $table->string('content');
            $table->string('image_question')->nullable();
            $table->string('options',)->nullable();
            $table->json('answer',)->nullable();
            $table->double('time',)->nullable();
            $table->string('type_question',)->nullable();
            $table->string('status',)->nullable();
            $table->double('level',)->nullable();
            $table->double('category',)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
