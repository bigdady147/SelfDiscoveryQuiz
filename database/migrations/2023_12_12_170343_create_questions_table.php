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
            $table->id();
            $table->string('content');
            $table->string('image_question')->unique();
            $table->string('options',)->nullable();
            $table->string('answer',)->nullable();
            $table->string('time',)->nullable();
            $table->string('type_question',)->nullable();
            $table->string('status',)->nullable();
            $table->string('level',)->nullable();
            $table->string('category',)->nullable();
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
