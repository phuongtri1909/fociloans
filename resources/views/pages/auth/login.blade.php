@extends('layouts.main')
@section('title', 'Đăng nhập')
@section('description', 'Đăng nhập')
@section('keywords', 'Đăng nhập')

@push('styles-main')
    <style>
        .logo-site {
            height: 200px;
            object-fit: contain;
            transition: height 0.3s ease;
        }

        @media (max-width: 768px) {
            .logo-site {
                height: 150px;
            }
        }

        @media (max-width: 576px) {
            .logo-site {
                height: 120px;
            }
        }
    </style>
@endpush

@section('content-main')
    <section class=" p-3 p-md-4 p-xl-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xxl-11">
                    <div class="border-light shadow-sm rounded">
                        <div class="g-0">
                            <div class="col-12 d-flex align-items-center justify-content-center rounded">
                                <div class="col-12 col-lg-11 col-xl-10">
                                    <div class="card-body p-3 p-md-4 p-xl-5">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="mb-5">
                                                    <div class="text-center">
                                                        <a href="{{ route('home') }}">
                                                            <img class="logo-site"
                                                                src="{{ asset('assets/images/logo/logo-fociloans.png') }}"
                                                                alt="logo-site">
                                                        </a>
                                                    </div>
                                                    <h2 class="text-center color-coins-refund fw-bold">ĐĂNG NHẬP</h2>
                                                </div>
                                            </div>
                                        </div>

                                        <form action="{{ route('login') }}" method="post">
                                            @csrf
                                            <div class="row gy-3 overflow-hidden">
                                                <div class="col-12">
                                                    <div class="form-floating mb-3">
                                                        <input type="user_name"
                                                            class="form-control @error('user_name') is-invalid @enderror"
                                                            name="user_name" id="user_name" placeholder="name@example.com"
                                                            value="{{ old('user_name') }}" required>
                                                        <label for="user_name" class="form-label">Nhập tài khoản</label>
                                                        @error('user_name')
                                                            <div class="invalid-feedback">
                                                                {{ $message }}
                                                            </div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-floating mb-3 position-relative">
                                                        <input type="password"
                                                            class="form-control @error('password') is-invalid @enderror"
                                                            name="password" id="password" value=""
                                                            placeholder="Password" required>
                                                        <label for="password" class="form-label">Mật khẩu</label>
                                                        <i class="fa fa-eye position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer"
                                                            id="togglePassword"></i>
                                                        @error('password')
                                                            <div class="invalid-feedback">
                                                                {{ $message }}
                                                            </div>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button class="btn btn-lg border-coins-refund-2 color-coins-refund"
                                                            type="submit">Đăng nhập</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

