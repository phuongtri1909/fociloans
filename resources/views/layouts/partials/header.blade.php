<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>@yield('title', 'Trang chủ - fociloans')</title>
    <meta name="description" content="@yield('description', '')">
    <meta name="keywords" content="@yield('keywords', '')">
    <meta name="robots" content="no index,no follow">
    <meta property="og:type" content="website">
    <meta property="og:title" content="@yield('title', 'Trang chủ - fociloans')">
    <meta property="og:description" content="@yield('decription', '')">
    <meta property="og:url" content="{{ url()->full() }}">
    <meta property="og:site_name" content="fociloans">
    <meta property="og:image" content="{{ asset('assets/images/logo/logo-fociloans.png') }}">
    <meta property="og:image:secure_url" content="{{ asset('assets/images/logo/logo-fociloans.png') }}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="@yield('title', 'Trang chủ - fociloans')">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="@yield('title', 'Trang chủ - fociloans')">
    <meta name="twitter:description" content="@yield('decription', '')">
    <meta name="twitter:image" content="{{ asset('assets/images/logo/logo-fociloans.png') }}">
    <meta name="twitter:image:alt" content="@yield('title', 'Trang chủ - fociloans')">
    <link rel="icon" href="{{ asset('assets/images/logo/favicon.ico') }}" type="image/png/x-icon">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{ asset('assets/images/logo/favicon.ico') }}" type="image/x-icon">
    <meta name="google-site-verification" content="" />

    <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "{{ url('/') }}",
          "logo": "{{ asset('assets/images/logo/logo-fociloans.png')}}"
        }
    </script>

    @stack('meta')

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <!-- Bootstrap CSS -->

    {{-- styles --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('assets/css/styles.css') }}">

    @stack('styles')

    {{-- end styles --}}
</head>

<body>
    <header id="siteHeader" class="site-header">
        <div class="container">
            <nav class="navbar navbar-expand-lg py-2">
                <div class="container-fluid px-0">
                    <a class="navbar-brand" href="{{ url('/') }}">
                        <img class="logo-site" src="{{ asset('assets/images/logo/logo-fociloans.png') }}"
                            alt="Fociloans" height="20">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown hover-dropdown">
                                <a class="nav-link custom-dropdown fw-bold font-header fs-4-5" href="#"
                                    role="button" aria-expanded="false">
                                    Programs
                                </a>
                                <ul class="dropdown-menu px-2">
                                    <li><a class="dropdown-item" href="#">Conventional</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="#">VA Loan</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="#">DPA</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="#">Jumbo Loans</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="#">Construction Loan</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="#">FHA</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="#">HELOC</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="#">Land Loan</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown hover-dropdown">
                                <a class="nav-link custom-dropdown fw-bold font-header fs-4-5" href="{{ route('mortgage.calculators') }}"
                                    role="button" aria-expanded="false">
                                    Calculators
                                </a>
                                <ul class="dropdown-menu px-2">
                                    <li><a class="dropdown-item" href="{{ route('mortgage.calculators', 'mortgage') }}">Mortgage Glossary</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="{{ route('mortgage.calculators', 'refinance') }}">Refinance Calculator</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="{{ route('mortgage.calculators', 'extra-payment') }}">Extra payment Calculator</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="{{ route('mortgage.calculators', 'affordability') }}">How much I can afford</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="{{ route('mortgage.calculators', 'principal') }}">Principal Reduction</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="{{ route('mortgage.calculators', 'income-qualification') }}">How much income to qualify</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown hover-dropdown">
                                <a class="nav-link custom-dropdown fw-bold font-header fs-4-5" href="#"
                                    role="button" aria-expanded="false">
                                    Business Loans
                                </a>
                                <ul class="dropdown-menu px-2">
                                    <li><a class="dropdown-item" href="#">Multi-Unit</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="#">DSCR</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="#">Fix and Flip</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="#">SBA</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown hover-dropdown">
                                <a class="nav-link custom-dropdown fw-bold font-header fs-4-5" href="#"
                                    role="button" aria-expanded="false">
                                    Learning Center
                                </a>
                                <ul class="dropdown-menu px-2">
                                    <li><a class="dropdown-item" href="#">Blog</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="#">FAQ</a></li>
                                    <hr class="dropdown-divider">
                                    <li><a class="dropdown-item" href="#">Glossary</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold font-header fs-4-5" href="#">About Us</a>
                            </li>
                        </ul>
                        <!-- Keep language and Apply Now button as is -->
                        <div class="d-flex align-items-center">
                            <div class="dropdown me-3">
                                <button class="btn btn-sm btn-outline-secondary custom-dropdown" type="button"
                                    id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-globe me-1"></i> EN
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                                    <li><a class="dropdown-item" href="#" data-lang="en">English</a></li>
                                    <li><a class="dropdown-item" href="#" data-lang="vi">Tiếng Việt</a></li>
                                </ul>
                            </div>
                            <a href="#"
                                class="btn btn-warning btn-rd-05rem rounded-4 cl-apply-now fw-bold">Apply Now</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
