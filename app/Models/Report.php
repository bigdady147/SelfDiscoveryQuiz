<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;
    protected $fillable = [
        'score', // Tên câu hỏi
        'question_package_id',
        'list_questions',
        'evaluate', // đánh giá cá nhân
        'propose', // đề xuất cải thiện
        'user_id',

    ];
}
