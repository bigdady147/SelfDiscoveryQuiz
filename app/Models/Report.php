<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;
    protected $fillable = [
        'score', //điểm
        'question_package_id',
        'time_test',
        'list_questions',
        'evaluate', // đánh giá cá nhân
        'propose', // đề xuất cải thiện
        'user_id',

    ];

    public function questionPackage()
    {
        return $this->belongsTo(QuestionPackage::class, 'question_package_id');
    }

    // Quan hệ n-1 với User
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
