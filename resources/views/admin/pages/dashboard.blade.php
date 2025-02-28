@extends('admin.layouts.app')

@push('styles-admin')
@endpush

@section('content-auth')
    <div class="container py-4">
        <h2 class="fw-bold mb-4">Trang dashboard</h2>
        @include('components.toast')
    </div>
@endsection
