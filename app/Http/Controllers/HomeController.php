<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function mortgageCalculators($page = 'index')
    {
        $validCalculators = [
            'mortgage' => '',
            'refinance' => 'refi',
            'affordability' => 'prequal',
            'extra-payment' => 'payoff',
            'principal' => 'principal',
            'income-qualification' => 'income'
        ];

        if (array_key_exists($page, $validCalculators)) {
            return view('pages.mortgage-calculators.item-calculator', [
                'page' => $validCalculators[$page],
                'title' => ucfirst(str_replace('-', ' ', $page)) . ' Calculator',
                'calculator_type' => $page
            ]);
        }

        return view('pages.mortgage-calculators.index');
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

    public function search(Request $request) {}
}
