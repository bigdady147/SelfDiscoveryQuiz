<?php

namespace App\Http\Middleware;


use Closure;
use Illuminate\Support\Facades\Auth;

class TokenCheckMiddleware
{
    public function handle($request, Closure $next)
    {
        if (Auth::check() && Auth::user()->tokenExpired()) {
            Auth::logout();
            return redirect('/login')->with('message', 'Your session has expired. Please log in again.');
        }

        return $next($request);
    }
}
