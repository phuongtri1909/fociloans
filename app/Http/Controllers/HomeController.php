<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{


    public function mortgageCalculators($page = 'index')
    {
        switch ($page) {
            case 'mortgage':
                return view('pages.mortgage-calculators.mortgage');
            
            case 'refinance':
                return view('pages.mortgage-calculators.refinance');
                
            case 'affordability':
                return view('pages.mortgage-calculators.affordability');
                
            case 'extra-payment':
                return view('pages.mortgage-calculators.extra-payment');
                
            case 'principal':
                return view('pages.mortgage-calculators.principal-reduction');
                
            case 'income-qualification':
                return view('pages.mortgage-calculators.income-qualification');
                
            default:
                return view('pages.mortgage-calculators.index');
        }
    }

    public function appCalculator()
    {
        return view('pages.app-calculator');
    }

    public function preQualification(Request $request)
    {
        
        return response()->json([
            'message' => 'Pre-qualification successful',
            'data' => $request->all()
        ]);
    }

    public function index()
    {
        return view('pages.home');
    }

    public function search(Request $request)
    {
      
    }
}
