<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mail;
use Collection;
use App\Mail\ContactMe;
 

class MailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $to_name = 'Rohan Jaiswal';
        $to_email = 'rohanjaiswal372@gmail.com';
        $data= [
            'name' => $request->input('name'),
            'company' => $request->input('company'),
            'email' => $request->input('email'),
            'message' => $request->input('message'),
        ];
      
        Mail::to($to_email)->send(new ContactMe($data));


        return response()->json([
            'name' => $request->input('name'),
            'company' => $request->input('company'),
            'email' => $request->input('email'),
            'message' => $request->input('message'),
        ]);
    }

}
