<footer class="site-footer py-4">
    <div class="custom-container">
        <div class="row align-items-center">
            <!-- Logo Section -->
            <div class="col-md-6 mb-4 mb-md-0">
                <div class="footer-logo">
                    <a href="{{ url('/') }}">
                        <img src="{{ asset('assets/images/logo/logo-fociloans.png') }}" alt="Fociloans" height="50">
                    </a>
                </div>
            </div>

            <!-- Social and Attribution Section -->
            <div class="col-md-6 text-md-end">
                <div class="social-links mb-3">
                    <a href="#" class="social-icon me-2" aria-label="Facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="social-icon me-2" aria-label="Twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="social-icon me-2" aria-label="LinkedIn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="social-icon me-2" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
                <div class="attribution">
                    <p class="text-muted fs-7 mb-0">Powered By <a href="https://www.lenderhomepage.com" target="_blank"
                            rel="noopener noreferrer" class="text-decoration-none">LenderHomePage.com</a></p>
                </div>
            </div>
        </div>

        <!-- Optional Copyright Section -->
        <div class="row mt-4">
            <div class="col-12">
                <div class="copyright text-center text-muted fs-7">
                    <p class="mb-0">&copy; {{ date('Y') }} Fociloans. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="{{ asset('assets/js/script.js') }}"></script>
@stack('scripts')

</body>

</html>
