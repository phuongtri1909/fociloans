@extends('layouts.app')
@section('title', 'Mortgage Calculators - Fociloans')
@section('description', 'Explore our collection of mortgage calculators to help with your home loan decisions')
@section('keyword',
    'mortgage calculator, loan calculator, refinance calculator, payment calculator, affordability
    calculator')
    @push('styles')
        <style>
            .calculator-card {

                transition: all 0.3s ease;
                height: 100%;


            }

            .calculator-card:hover {
                transform: translateY(-5px);
                border-radius: 10px;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            }

            .calculator-icon {
                height: 160px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                overflow: hidden;
            }

            .calculator-icon img {
                max-width: 80%;
                max-height: 80%;
                object-fit: contain;
            }

            .calculator-title {
                font-weight: 600;
                color: #336667;
                margin: 0;
                padding: 1rem;
                text-align: center;
                font-size: 1.1rem;
            }

            .calculators-section {
                padding: 3rem 0;
            }

            .page-title {
                color: #336667;
                margin-bottom: 2rem;
                text-align: center;
                font-weight: 700;
            }
        </style>
    @endpush

@section('content')
    <section class="calculators-section">
        <div class="container">
            <h2 class="page-title">Mortgage Calculators</h2>

            <div class="row g-4">
                <!-- Calculator 1 -->
                <div class="col-md-6 col-lg-4 mb-4">
                    <a href="{{ route('mortgage.calculators', 'mortgage') }}" class="text-decoration-none">
                        <div class="calculator-card">
                            <div class="calculator-icon">
                                <img src="{{ asset('assets/images/iconCalculator/image1.png') }}" alt="Mortgage Calculator">
                            </div>
                            <h3 class="calculator-title">Mortgage Calculator</h3>
                        </div>
                    </a>
                </div>

                <!-- Calculator 2 -->
                <div class="col-md-6 col-lg-4 mb-4">
                    <a href="{{ route('mortgage.calculators', 'refinance') }}" class="text-decoration-none">
                        <div class="calculator-card">
                            <div class="calculator-icon">
                                <img src="{{ asset('assets/images/iconCalculator/image2.png') }}"
                                    alt="Refinance Calculator">
                            </div>
                            <h3 class="calculator-title">Refinance Calculator</h3>
                        </div>
                    </a>
                </div>

                <!-- Calculator 3 -->
                <div class="col-md-6 col-lg-4 mb-4">
                    <a href="{{ route('mortgage.calculators', 'extra-payment') }}" class="text-decoration-none">
                        <div class="calculator-card">
                            <div class="calculator-icon">
                                <img src="{{ asset('assets/images/iconCalculator/image3.png') }}"
                                    alt="Extra Payment Calculator">
                            </div>
                            <h3 class="calculator-title">Extra Payment Calculator</h3>
                        </div>
                    </a>
                </div>

                <!-- Calculator 4 -->
                <div class="col-md-6 col-lg-4 mb-4">
                    <a href="{{ route('mortgage.calculators', 'affordability') }}" class="text-decoration-none">
                        <div class="calculator-card">
                            <div class="calculator-icon">
                                <img src="{{ asset('assets/images/iconCalculator/image4.png') }}"
                                    alt="How much home can I afford">
                            </div>
                            <h3 class="calculator-title">How much home can I afford</h3>
                        </div>
                    </a>
                </div>

                <!-- Calculator 5 -->
                <div class="col-md-6 col-lg-4 mb-4">
                    <a href="{{ route('mortgage.calculators', 'principal') }}" class="text-decoration-none">
                        <div class="calculator-card">
                            <div class="calculator-icon">
                                <img src="{{ asset('assets/images/iconCalculator/image5.png') }}"
                                    alt="Principal Calculator">
                            </div>
                            <h3 class="calculator-title">Principal Calculator</h3>
                        </div>
                    </a>
                </div>

                <!-- Calculator 6 -->
                <div class="col-md-6 col-lg-4 mb-4">
                    <a href="{{ route('mortgage.calculators', 'income-qualification') }}" class="text-decoration-none">
                        <div class="calculator-card">
                            <div class="calculator-icon">
                                <img src="{{ asset('assets/images/iconCalculator/image6.png') }}"
                                    alt="Income Qualification Calculator">
                            </div>
                            <h3 class="calculator-title">How Much Income To Qualify</h3>
                        </div>
                    </a>
                </div>
            </div>

            <div class="mt-5">
                <h3 class="fw-bold">Disclaimer</h3>
    
                <p> Information and interactive calculators are made available to you as self-help tools for your independent
                    use and are not intended to provide
                    investment advice. We cannot and do not guarantee their applicability or accuracy in regards to your
                    individual circumstances. All examples are
                    hypothetical and are for illustrative purposes. We encourage you to seek personalized advice from qualified
                    professionals regarding all personal
                    finance issues.</p>
            </div>
        </div>
       
    </section>
@endsection

@push('scripts')
@endpush
