<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Question;
use App\Models\Report;
use App\Http\Requests\StoreReportRequest;
use App\Http\Requests\UpdateReportRequest;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 1);
        $page = $request->input('page', 1);
        $order = $request->input('order', 'desc');
        $report = Report::with('questionPackage', 'user')->orderBy('created_at', $order)->paginate($perPage, ['*'], 'page', $page);
        return response()->json($report, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $report = new Report($request->only('score', 'list_questions', 'question_package_id', 'evaluate', 'propose', 'user_id','time_test'));
        $report->save();

        $newlyCreatedReport = Report::find($report->id);
        return response()->json(['message' => 'Report created successfully', 'data' => $newlyCreatedReport], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $report = Report::with('questionPackage', 'user')->find($id);
        if (!$report) {
            return response()->json(['message' => 'Report not found'], 404);
        }
        return response()->json($report, 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Report $report)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $report = Report::find($id);
        if (!$report) {
            return response()->json(['message' => 'Question not found'], 404);
        }else{
            $report->score = $request->input('content');
            $report->question_package_id = $request->input('question_package_id');
            $report->list_questions = $request->input('list_questions');
            $report->evaluate = $request->input('evaluate');
            $report->propose = $request->input('propose');
            $report->time_test = $request->input('time_test');
            $report->user_id = $request->input('user_id');

            $report->update();
            return response()->json(['message' => 'Report updated successfully'], 201);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $report = Report::find($id);
        if (!$report) {
            return response()->json(['message' => 'Question not found'], 404);
        }else{
            $report->delete();
            return response()->json(['message' => 'Report deleted successfully'], 200);

        }
    }
}
