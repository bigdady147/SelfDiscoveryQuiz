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
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->double('score',)->nullable();
            $table->double('time_test',)->nullable();
            $table->json('list_questions',)->nullable();
            $table->string('question_package_id',)->nullable();
            $table->longText('evaluate',)->nullable();
            $table->longText('propose',)->nullable();
            $table->string('user_id',)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};
