<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\QuestionPackage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use File;
use Validator;

class QuestionPackagesController extends Controller
{


    //
    // Lấy danh sách các câu hỏi với phân trang
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 1);
        $page = $request->input('page', 1);
        $question_packages = QuestionPackage::paginate($perPage, ['*'], 'page', $page);
        return response()->json($question_packages, 200);
    }

    // Lấy thông tin của một câu hỏi cụ thể
    public function show($id)
    {
        $question_packages = QuestionPackage::find($id);
        if (!$question_packages) {
            return response()->json(['message' => 'Question packages not found'], 404);
        }
        return response()->json($question_packages, 200);
    }

    // Tạo mới một câu hỏi
    public function store(Request $request)
    {
        $question_packages = new QuestionPackage($request->only('name', 'test_interface', 'answer','question_ids','tested', 'number_question','category', 'level','category', 'status', 'time','created_by', 'updated_by'));

        if ($request->has('image_packages')) {
            $image = $request->input('image_packages');
            list(, $image) = explode(',', $image);
            $image = base64_decode($image);
            $extension = explode('/', explode(':', substr($request->input('image_packages'), 0, strpos($request->input('image_packages'), ';')))[1])[1];
            $imageName = uniqid() . '.' . $extension;
            file_put_contents(public_path('questions/' . $imageName), $image);
            $question_packages->image_packages = '/questions/' . $imageName;
        }
        $question_packages->save();
        return response()->json(['message' => 'Question created successfully'], 201);
    }

    // Cập nhật thông tin của một câu hỏi
    public function update(Request $request, $id)
    {
        $question = QuestionPackage::find($id);
        if (!$question) {
            return response()->json(['message' => 'Question not found'], 404);
        }
        // Xóa hình cũ nếu có
        if ($request->has('image_packages')) {
            $imagePath = public_path($question->image_packages);
            if (File::exists($imagePath)) {
                File::delete($imagePath);
                // Kiểm tra xem tệp tin đã bị xóa thành công hay không
                if (!File::exists($imagePath)) {
                    $image = $request->input('image_packages');
                    list(, $image) = explode(',', $image);
                    $image = base64_decode($image);
                    $extension = explode('/', explode(':', substr($request->input('image_packages'), 0, strpos($request->input('image_packages'), ';')))[1])[1];
                    $imageName = uniqid() . '.' . $extension;
                    file_put_contents(public_path('questions/' . $imageName), $image);
                    $question->image_packages = '/questions/' . $imageName;
                } else {
                }
            } else {
                $image = $request->input('image_packages');
                list(, $image) = explode(',', $image);
                $image = base64_decode($image);
                $extension = explode('/', explode(':', substr($request->input('image_packages'), 0, strpos($request->input('image_packages'), ';')))[1])[1];
                $imageName = uniqid() . '.' . $extension;
                file_put_contents(public_path('questions/' . $imageName), $image);
                $question->image_packages = '/questions/' . $imageName;
            }
        }
        $question->content = $request->input('name');
        $question->options = $request->input('test_interface');
        $question->answer = $request->input('answer');
        $question->time = $request->input('question_ids');
        $question->type_question = $request->input('tested');
        $question->status = $request->input('number_question');
        $question->level = $request->input('level');
        $question->category = $request->input('category');
        $question->category = $request->input('status');
        $question->category = $request->input('time');
        $question->created_by = $request->input('created_by');
        $question->updated_by = $request->input('updated_by');
        $question->update();

        return response()->json(['message' => 'Question packages updated successfully'], 201);
        // Code cập nhật thông tin của câu hỏi đã được cung cấp ở ví dụ trước
    }

    // Xóa một câu hỏi
    public function destroy($id)
    {
        $question = QuestionPackage::find($id);
        if (!$question) {
            return response()->json(['message' => 'Question packages not found'], 404);
        }
        if ($question->image_packages) {
            $imagePath = public_path($question->image_packages);
            File::delete($imagePath);
        }
        $question->delete();
        return response()->json(['message' => 'Question packages deleted successfully'], 200);
    }
    public function active($id)
    {

        $question = QuestionPackage::find($id);
        if (!$question) {
            return response()->json(['message' => 'Question packages not found'], 404);
        }
        $question->status = 'active';
        $question->update();
        return response()->json(['message' => 'Question packages update successfully'], 200);
    }
}
