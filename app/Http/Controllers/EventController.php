<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Http\Requests\EventRequest;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function getAllEvents(Request $request): JsonResponse
    {
        $events = Event::where('user_id', $request->user()->id)->get();
        return response()->json($events);
    }

    public function store(EventRequest $request): JsonResponse
    {
        $event = new Event($request->validated());
        $event->user_id = $request->user()->id;
        $event->save();
        return response()->json($event, 201);
    }

    public function show($id): JsonResponse
    {
        $event = Event::where('id', $id)->where('user_id', request()->user()->id)->firstOrFail();
        return response()->json($event);
    }

    public function update(EventRequest $request, $id): JsonResponse
    {
        $event = Event::where('id', $id)->where('user_id', request()->user()->id)->firstOrFail();
        $event->update($request->validated());
        return response()->json($event, 200);
    }

    public function destroy($id): JsonResponse
    {
        $event = Event::where('id', $id)->where('user_id', request()->user()->id)->firstOrFail();
        $event->delete();
        return response()->json(['message' => "Event Successfully deleted"], 204);
    }

    public function getEventsOnDate(Request $request): JsonResponse
    {
        $date = $request->query('date');
        $startOfDay = Carbon::parse($date)->startOfDay();
        $endOfDay = Carbon::parse($date)->endOfDay();
        $events = Event::where('user_id', request()->user()->id)
            ->where(function ($query) use ($startOfDay, $endOfDay) {
                $query->whereBetween('start', [$startOfDay, $endOfDay])
                    ->orWhereBetween('end', [$startOfDay, $endOfDay])
                    ->orWhere(function ($query) use ($startOfDay, $endOfDay) {
                        $query->where('start', '<=', $startOfDay)
                            ->where('end', '>=', $endOfDay);
                    });
            })
            ->orderBy('start', 'asc')
            ->get();

        return response()->json($events);
    }
}
