<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'content', // Tên câu hỏi
        'image_question',
        'options',
        'answer', // Là 1 mảng chứa các câu trả lời & câu trả lời đúng images, answer,
        'time',
        'type_question', // Images || text
        'status',
        'level', // Cấp độ của câu hỏi từ 1 => 3
        'category',
        'update_by',
        'created_by',
    ];
}
