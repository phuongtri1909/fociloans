@extends('layouts.app')
@section('title', 'Trang chủ - Distributor component info parameter')
@section('description', 'Trang hiển thị kết quả tìm kiếm thông tin linh kiện')
@section('keyword', 'linh kiện, distributor, lcsc, digikey')

@push('styles')
    <link rel="stylesheet" href="https://lhp-cdn.s3.us-east-2.amazonaws.com/calculator-widget/app.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Baloo+Chettan+2:wght@700&family=Baloo+Chettan+2:wght@500&family=Poppins:wght@300&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cabin:wght@500&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&display=swap">
    <style>
        .result-container {
            border: 1px solid #dee2e6;
            border-radius: 0.5rem;
            padding: 1.5rem;
        }

        .table-responsive {
            min-height: 300px;
        }

        .calculator-container {
            background-color: #f8f9fa;
            border-radius: 0.5rem;
            padding: 2rem;
            margin-bottom: 2rem;
        }

        .result-box {
            background-color: #e9ecef;
            padding: 1rem;
            border-radius: 0.25rem;
            margin-top: 1rem;
            font-size: 1.2rem;
            font-weight: bold;
        }

        .form-group {
            margin-bottom: 1rem;
        }

        .payment-schedule {
            margin-top: 2rem;
        }
    </style>
@endpush

@section('content')
    <div id="calculator" style="height: 1000px">
    </div>

@endsection

@push('scripts')
    <script src="{{ asset('assets/js/index.js') }}"></script>
    <script>
        (window.lhpCalculator || {
            mount: () => new Promise.resolve({
                on: () => {}
            })
        }).mount(`calculator`, {
            page: `/refi`,
            defaultOptions: "{}",
        }).then(client => {
            client.on(`resized`, () => {
                let busEvent = JSON.parse(event.data.replace("/*framebus*/", ""));
                let container = document.getElementById(`calculator`);

                const heightChange = busEvent.eventData.height + 65;
                container.style.height = heightChange + `px`;
            })
        })
    </script>


@endpush
