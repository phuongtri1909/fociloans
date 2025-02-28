@extends('layouts.app')
@section('title', '')
@section('description', '')
@section('keyword', '')

@push('styles')
@endpush

@section('content')
    <section class="custom-container mt-5">
        <div id="calculator">
        </div>
    </section>

    <section>
        <div class="mt-5 container">
            <h3 class="fw-bold">Disclaimer</h3>

            <p> Information and interactive calculators are made available to you as self-help tools for your independent
                use and are not intended to provide
                investment advice. We cannot and do not guarantee their applicability or accuracy in regards to your
                individual circumstances. All examples are
                hypothetical and are for illustrative purposes. We encourage you to seek personalized advice from qualified
                professionals regarding all personal
                finance issues.</p>
        </div>
    </section>
@endsection

@push('scripts')
    <script src="{{ asset('assets/js/index.js') }}"></script>
    <script>
        (window.lhpCalculator || {
            mount: () => new Promise.resolve({
                on: () => {}
            })
        }).mount(`calculator`, {
            page: `{{ $page }}`,
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
