<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Validator;

class QuestionController extends Controller
{


    //
    // Lấy danh sách các câu hỏi với phân trang
    public function index()
    {
        $questions = Question::paginate(10);
        return response()->json($questions, 200);
    }

    // Lấy thông tin của một câu hỏi cụ thể
    public function show($id)
    {
        $question = Question::find($id);
        if (!$question) {
            return response()->json(['message' => 'Question not found'], 404);
        }
        return response()->json($question, 200);
    }

    // Tạo mới một câu hỏi
    public function store(Request $request)
    {
        $question = new Question($request->only('content', 'type_question', 'answer', 'category', 'level', 'status', 'time'));

        if ($request->has('image_question')) {
            $image = $request->input('image_question');
            list(, $image) = explode(',', $image);
            $image = base64_decode($image);
            $extension = explode('/', explode(':', substr($request->input('image_question'), 0, strpos($request->input('image_question'), ';')))[1])[1];
            $imageName = uniqid() . '.' . $extension;
            file_put_contents(public_path('questions/' . $imageName), $image);
            $question->image_question = '/questions/' . $imageName;
        }

        $question->save();

        return response()->json(['message' => 'Question created successfully'], 201);
    }

    // Cập nhật thông tin của một câu hỏi
    public function update(Request $request, $id)
    {
        $question = Question::find($id);
        if (!$question) {
            return response()->json(['message' => 'Question not found'], 404);
        }

        // Xóa hình cũ nếu có
        if ($request->hasFile('image')) {
            Storage::delete('public/images/' . $question->image_question);
            $image = $request->file('image');
            $imageName = time() . '.' . $image->extension();
            $image->storeAs('images', $imageName, 'public');
            $question->image_question = $imageName;
        }

        // Code cập nhật thông tin của câu hỏi đã được cung cấp ở ví dụ trước
    }

    // Xóa một câu hỏi
    public function destroy($id)
    {
        $question = Question::find($id);
        if (!$question) {
            return response()->json(['message' => 'Question not found'], 404);
        }

        if ($question->image_question) {
            Storage::delete('public/images/' . $question->image_question);
        }

        $question->delete();
        return response()->json(['message' => 'Question deleted successfully'], 200);
    }

}
