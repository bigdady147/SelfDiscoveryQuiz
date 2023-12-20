<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionPackage extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', // Tên câu hỏi
        'image_packages',
        'time',
        'status',
        'level', // Cấp độ của câu hỏi từ 1 => 3
        'category',
        'number_question',
        'question_ids',
        'update_by',
        'created_by',
        'tested',
        'test_interface', // Giao diện test
    ];
}
