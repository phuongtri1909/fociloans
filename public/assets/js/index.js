!(function (t) {
    var e = {}
    function n (A) {
        if (e[A]) return e[A].exports
        var E = (e[A] = { i: A, l: !1, exports: {} })
        return t[A].call(E.exports, E, E.exports, n), (E.l = !0), E.exports
    }
    ;(n.m = t),
        (n.c = e),
        (n.d = function (t, e, A) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: A })
        }),
        (n.r = function (t) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(t, '__esModule', { value: !0 })
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t
            var A = Object.create(null)
            if (
                (n.r(A),
                Object.defineProperty(A, 'default', {
                    enumerable: !0,
                    value: t
                }),
                2 & e && 'string' != typeof t)
            )
                for (var E in t)
                    n.d(
                        A,
                        E,
                        function (e) {
                            return t[e]
                        }.bind(null, E)
                    )
            return A
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default
                      }
                    : function () {
                          return t
                      }
            return n.d(e, 'a', e), e
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }),
        (n.p = '/'),
        n((n.s = 21))
})([
    function (t, e, n) {
        'use strict'
        n.d(e, 'c', function () {
            return A
        }),
            n.d(e, 'a', function () {
                return E
            }),
            n.d(e, 'b', function () {
                return r
            })
        var A = function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 2
                return (
                    (t = Number(t)),
                    Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
                )
            },
            E = function (t, e) {
                return ((t *= 1e6) * (e *= 1e6)) / 1e12
            },
            r = function (t) {
                return (
                    ('string' == typeof t || t instanceof String) &&
                        (t = parseFloat(t.replace(/[^\d\.]/g, ''))),
                    isNaN(t) || !t ? 0 : t
                )
            }
    },
    function (t, e, n) {
        'use strict'
        var A
        function E (t, e) {
            var n = Object.keys(t)
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(t)
                e &&
                    (A = A.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })),
                    n.push.apply(n, A)
            }
            return n
        }
        function r (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}
                e % 2
                    ? E(Object(n), !0).forEach(function (e) {
                          a(t, e, n[e])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(n)
                      )
                    : E(Object(n)).forEach(function (e) {
                          Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                          )
                      })
            }
            return t
        }
        function a (t, e, n) {
            return (
                e in t
                    ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (t[e] = n),
                t
            )
        }
        n.r(e),
            n.d(e, 'merge', function () {
                return N
            })
        var O =
                (a(
                    (A = {
                        type: 'conventional',
                        property_price: 25e4,
                        down_payment: 25e3,
                        down_payment_rate: 10,
                        interest_rate: 4,
                        interest_rate_with_points: 7.5,
                        month: 11,
                        standard_deduction: 12400,
                        realestate_taxes: 1800,
                        other_deductions: 1350,
                        monthly_income: 5e3,
                        auto_payment: 0,
                        student_payment: 0,
                        installment_payment: 0,
                        credit_payment: 0,
                        other_payment: 0,
                        term: 30,
                        monthly_hoa: 0,
                        yearly_hoa: 0,
                        annual_insurance: 800,
                        annual_insurance_rate: 0.3,
                        fico: 850,
                        state: 'CA',
                        county: 'ORANGE',
                        property_tax: 1.2,
                        property_tax_value: 0,
                        loan_amount: 1e5,
                        payments_made: 12,
                        points: 2,
                        tax_rate: 32,
                        state_tax_rate: 5,
                        payment_considered: 1200,
                        factors: n(23).default,
                        origination_fee: 1,
                        annual_savings_rate: 5,
                        monthly_rent: 700,
                        monthly_rent_insurance: 15,
                        annual_rent_rate_increase: 4,
                        annual_taxes: 2500,
                        annual_maintenance: 900,
                        appreciation_rate: 5,
                        closing_costs: 2e3,
                        selling_costs: 7,
                        years_paid: 0,
                        years_before_sell: 5,
                        year_payment_number: 12,
                        upfront_fee: 0,
                        first_mortgage: 'yes',
                        active_duty: 'yes',
                        is_refi: !1,
                        is_shared: !1,
                        refi_interest_rate: 4,
                        refi_term: 30,
                        loan_cost: 0,
                        est_back_ratio: 36,
                        est_front_ratio: 30,
                        borrowerIncome: 0,
                        coBorrowerIncome: 0
                    }),
                    'borrowerIncome',
                    6e3
                ),
                a(A, 'miscAmount', 0),
                a(A, 'creditAmount', 0),
                a(A, 'slAmount', 0),
                a(A, 'autoAmount', 0),
                a(A, 'cash', 25e3),
                a(A, 'equityInProp', 0),
                a(A, 'stocks', 0),
                a(A, 'retirement', 0),
                a(A, 'otherCash', 0),
                a(A, 'max_down_payment', 5e4),
                a(A, 'min_down_payment', 3.5),
                a(A, 'use_fixed_insurance', !1),
                a(A, 'use_fixed_tax', !1),
                a(A, 'use_fixed_pmi', !1),
                a(A, 'use_custom_pmi', !1),
                a(A, 'annual_pmi', 0),
                a(A, 'pmiFactor', 0),
                a(A, 'buydown_type', '2_1'),
                A),
            N = function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {}
                return r({}, O, {}, t)
            }
        e.default = O
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        var A = n(0),
            E = function (t) {
                return 'yes' == t.first_mortgage && 'yes' == t.active_duty
                    ? t.down_payment_rate >= 10
                        ? t.Upfront1stActiveFee10percent || 0
                        : t.down_payment_rate >= 5
                        ? t.Upfront1stActiveFee5percent || 0
                        : t.Upfront1stActiveFeeNone || 0
                    : 'yes' == t.first_mortgage && 'no' == t.active_duty
                    ? t.down_payment_rate >= 10
                        ? t.Upfront1stNotActiveFee10percent || 0
                        : t.down_payment_rate >= 5
                        ? t.Upfront1stNotActiveFee5percent || 0
                        : t.Upfront1stNotActiveFeeNone || 0
                    : 'no' == t.first_mortgage && 'yes' == t.active_duty
                    ? t.down_payment_rate >= 10
                        ? t.UpfrontActiveFee10percent || 0
                        : t.down_payment_rate >= 5
                        ? t.UpfrontActiveFee5percent || 0
                        : t.UpfrontActiveFeeNone || 0
                    : 'no' == t.first_mortgage && 'no' == t.active_duty
                    ? t.down_payment_rate >= 10
                        ? t.UpfrontNotActiveFee10percent || 0
                        : t.down_payment_rate >= 5
                        ? t.UpfrontNotActiveFee5percent || 0
                        : t.UpfrontNotActiveFeeNone || 0
                    : void 0
            }
        e.default = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : []
            ;(t = n(1).merge(t)), e.length && (t.factors = e)
            var r = {
                principal_and_interest: n(24).default(t),
                taxes_and_hoa:
                    (t.property_price * t.property_tax) / 100 / 12 +
                    t.monthly_hoa,
                insurance: n(7).default(t),
                monthly_insurance:
                    ((t.annual_insurance_rate / 100) * t.property_price) / 12
            }
            null != t.use_fixed_insurance &&
                1 == t.use_fixed_insurance &&
                (r.monthly_insurance = t.annual_insurance / 12),
                null != t.use_fixed_tax &&
                    1 == t.use_fixed_tax &&
                    (r.taxes_and_hoa =
                        t.property_tax_value / 12 + t.monthly_hoa),
                null != t.use_custom_pmi &&
                    1 == t.use_custom_pmi &&
                    (null != t.use_fixed_pmi && 1 == t.use_fixed_pmi
                        ? (r.insurance = t.annual_pmi / 12)
                        : (r.insurance =
                              (t.loan_amount * (t.pmiFactor / 100)) / 12))
            var a = Object(A.c)(
                Object.values(r).reduce(function (t, e) {
                    return t + e
                })
            )
            Object.keys(r).map(function (t) {
                return (r[t] = Object(A.c)(r[t]))
            })
            var O = { total: a, breakdown: r }
            return (
                'fha' == t.type &&
                    (O.fha_upfront_mip = Object(A.c)(
                        t.loan_amount * (t.upfront_fee / 100),
                        2
                    )),
                'rural' == t.type &&
                    (O.rural_upfront_mip = Object(A.c)(
                        t.loan_amount * (t.upfront_fee / 100),
                        2
                    )),
                'va' == t.type &&
                    (O.va_fee = Object(A.c)(t.loan_amount * (E(t) / 100), 2)),
                O
            )
        }
    },
    function (t, e, n) {
        'use strict'
        function A (t, e) {
            for (var n = 0; n < e.length; n++) {
                var A = e[n]
                ;(A.enumerable = A.enumerable || !1),
                    (A.configurable = !0),
                    'value' in A && (A.writable = !0),
                    Object.defineProperty(t, A.key, A)
            }
        }
        n.r(e)
        var E = (function () {
            function t (e) {
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, t),
                    (this.options = e)
            }
            var e, n, E
            return (
                (e = t),
                (n = [
                    {
                        key: 'result',
                        value: function () {
                            var t = this.options.interest_rate / 1200
                            return (
                                this.options.loan_amount *
                                (t /
                                    (1 -
                                        Math.pow(
                                            1 + t,
                                            -12 * this.options.term
                                        )))
                            )
                        }
                    }
                ]) && A(e.prototype, n),
                E && A(e, E),
                t
            )
        })()
        e.default = function (t) {
            return new E(t).result()
        }
    },
    function (t, e, n) {
        'use strict'
        var A = n(35),
            E = n(15)
        A.attach(), (t.exports = E.Framebus)
    },
    function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.subscribers = e.childWindows = e.prefix = void 0),
            (e.prefix = '/*framebus*/'),
            (e.childWindows = []),
            (e.subscribers = {})
    },
    function (t, e, n) {
        'use strict'
        var A = n(4),
            E = new (n.n(A).a)(),
            r = {
                on: function (t, e) {
                    console.log('Listening for event:', 'fociloanscalculator:'.concat(t));
                    return E.on('fociloanscalculator:'.concat(t), e), this;
                },
                off: function (t) {
                    return E.off('fociloanscalculator:'.concat(t)), this
                },
                teardown: function () {
                    return E.teardown(), this
                },
                emit: function (t, e) {
                    console.log('Emit event:', 'fociloanscalculator:'.concat(t), 'with data:', e);
                    return E.emit('fociloanscalculator:'.concat(t), e), this;
                }
            }
        e.a = r
    },
    function (t, e, n) {
        'use strict'
        function A (t, e) {
            for (var n = 0; n < e.length; n++) {
                var A = e[n]
                ;(A.enumerable = A.enumerable || !1),
                    (A.configurable = !0),
                    'value' in A && (A.writable = !0),
                    Object.defineProperty(t, A.key, A)
            }
        }
        n.r(e)
        var E = (function () {
            function t (e) {
                var n = e.factors,
                    A = e.loan_amount,
                    E = e.term,
                    r = e.fico,
                    a = e.down_payment,
                    O = e.property_price,
                    N = e.type
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, t),
                    (this.fico = r),
                    (this.term = E),
                    (this.factors = n),
                    (this.ltv = A / O),
                    (this.loanAmount = A),
                    (this.downPaymentPercent = (a / O) * 100),
                    (this.type = N)
            }
            var e, n, E
            return (
                (e = t),
                (n = [
                    {
                        key: 'result',
                        value: function () {
                            if ('va' == this.type) return 0
                            if (this.downPaymentPercent >= 20) return 0
                            var t = this.getFactors()
                            if (!t.length) return 0
                            var e = t[0].mi / 100
                            return (this.loanAmount * e) / 12
                        }
                    },
                    {
                        key: 'isBetween',
                        value: function (t, e, n) {
                            return t >= e && t <= n
                        }
                    },
                    {
                        key: 'getFactors',
                        value: function () {
                            var t = this
                            return this.factors
                                .filter(function (e) {
                                    return t.isFactorApplicable(e)
                                })
                                .sort(function (t, e) {
                                    return t.mi - e.mi
                                })
                        }
                    },
                    {
                        key: 'isFactorApplicable',
                        value: function (t) {
                            var e = t.loan_min,
                                n = t.loan_max,
                                A = t.ltv_min,
                                E = t.ltv_max,
                                r = t.fico_min,
                                a = t.fico_max,
                                O = t.years
                            return (
                                (parseInt(this.term) === parseInt(O) ||
                                    'rural' == this.type) &&
                                ((this.isBetween(this.loanAmount, e, n) &&
                                    'fha' == this.type) ||
                                    'fha' != this.type) &&
                                100 * this.ltv >= A &&
                                100 * this.ltv <= E &&
                                (!this.fico || this.isBetween(this.fico, r, a))
                            )
                        }
                    }
                ]) && A(e.prototype, n),
                E && A(e, E),
                t
            )
        })()
        e.default = function (t) {
            return new E(t).result()
        }
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        e.default = function (t) {
            for (
                var e = t.propertyPrice,
                    n = t.monthlyPayment,
                    A = t.monthlyHoaFees,
                    E = t.monthlyTaxesDollar,
                    r = t.monthlyHazardInsurance,
                    a = t.monthlyMortgageInsurance,
                    O = t.loanAmount,
                    N = t.interestRate,
                    o = [];
                Math.floor(O) > 0;

            ) {
                var R = (O / e) * 100
                Math.ceil(R) <= 80 && 0 !== a && ((n -= a), (a = 0))
                var i = (O * N) / 100 / 12,
                    L = [A, E, r, a].reduce(function (t, e) {
                        return t + e
                    }),
                    I = n - i - L
                I > O ? ((I = O), (O = 0)) : (O -= I),
                    o.push({
                        monthlyPayment: n,
                        balance: O,
                        principal: I,
                        interest: i,
                        taxesAndFees: L
                    })
            }
            return (
                (function (t) {
                    ;(t[0].totalInterest = t[0].interest),
                        (t[0].totalPrincipal = t[0].principal),
                        (t[0].totalPaid = t[0].monthlyPayment),
                        t.reduce(function (t, e) {
                            return (
                                (e.totalPaid = t.totalPaid + e.monthlyPayment),
                                (e.totalInterest =
                                    t.totalInterest + e.interest),
                                (e.totalPrincipal =
                                    t.totalPrincipal + e.principal),
                                {
                                    totalPaid: e.totalPaid,
                                    totalInterest: e.totalInterest,
                                    totalPrincipal: e.totalPrincipal
                                }
                            )
                        })
                })(o),
                o
            )
        }
    },
    function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.isntString = void 0),
            (e.isntString = function (t) {
                return 'string' != typeof t
            })
    },
    function (t, e, n) {
        'use strict'
        function A (t, e) {
            for (var n = 0; n < e.length; n++) {
                var A = e[n]
                ;(A.enumerable = A.enumerable || !1),
                    (A.configurable = !0),
                    'value' in A && (A.writable = !0),
                    Object.defineProperty(t, A.key, A)
            }
        }
        n.r(e)
        var E = (function () {
            function t (e) {
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, t),
                    (this.options = e)
            }
            var e, E, r
            return (
                (e = t),
                (E = [
                    {
                        key: 'result',
                        value: function () {
                            for (
                                var t = n(3).default(this.options),
                                    e =
                                        12 *
                                        (this.options.years_paid +
                                            this.options.years_before_sell),
                                    A = this.options.loan_amount,
                                    E = 0,
                                    r = 0,
                                    a = 1;
                                a <= e;
                                a++
                            )
                                (A -=
                                    t -
                                    (E =
                                        (A * this.options.interest_rate) /
                                        1200)),
                                    a > 12 * this.options.years_paid && (r += E)
                            return r
                        }
                    }
                ]) && A(e.prototype, E),
                r && A(e, r),
                t
            )
        })()
        e.default = function (t) {
            return new E(t).result()
        }
    },
    function (t, e, n) {
        'use strict'
        function A (t, e) {
            for (var n = 0; n < e.length; n++) {
                var A = e[n]
                ;(A.enumerable = A.enumerable || !1),
                    (A.configurable = !0),
                    'value' in A && (A.writable = !0),
                    Object.defineProperty(t, A.key, A)
            }
        }
        n.r(e)
        var E = (function () {
            function t (e) {
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, t),
                    (this.options = e)
            }
            var e, n, E
            return (
                (e = t),
                (n = [
                    {
                        key: 'result',
                        value: function () {
                            for (
                                var t = this.options.loan_amount,
                                    e =
                                        this.options.year_payment_number *
                                        this.options.years_paid,
                                    n = 0,
                                    A = 0;
                                e > 0;

                            )
                                (n =
                                    (t * this.options.interest_rate) /
                                    (100 * this.options.year_payment_number)),
                                    (t = A =
                                        t - (this.options.payment_amount - n)),
                                    e--
                            return A
                        }
                    }
                ]) && A(e.prototype, n),
                E && A(e, E),
                t
            )
        })()
        e.default = function (t) {
            return new E(t).result()
        }
    },
    function (t, e, n) {
        var A = n(17).Symbol
        t.exports = A
    },
    function (t, e, n) {
        'use strict'
        function A (t, e) {
            for (var n = 0; n < e.length; n++) {
                var A = e[n]
                ;(A.enumerable = A.enumerable || !1),
                    (A.configurable = !0),
                    'value' in A && (A.writable = !0),
                    Object.defineProperty(t, A.key, A)
            }
        }
        n.r(e)
        var E = (function () {
            function t (e) {
                var n = e.loan_amount,
                    A = e.interest_rate,
                    E = e.term,
                    r = e.payments_made
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, t),
                    (this.loan_amount = n),
                    (this.interest_rate = A),
                    (this.term = E),
                    (this.payments_made = r)
            }
            var e, E, r
            return (
                (e = t),
                (E = [
                    {
                        key: 'result',
                        value: function () {
                            for (
                                var t,
                                    e = this.interest_rate / 1200,
                                    A = (this.term, this.loan_amount),
                                    E = n(3).default({
                                        loan_amount: this.loan_amount,
                                        interest_rate: this.interest_rate,
                                        term: this.term
                                    }),
                                    r = this.payments_made,
                                    a = 0;
                                r > 0;

                            )
                                (A -= t = E - A * e), (a += t), r--
                            return this.loan_amount - a
                        }
                    }
                ]) && A(e.prototype, E),
                r && A(e, r),
                t
            )
        })()
        e.default = function (t) {
            return new E(t).result()
        }
    },
    function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.packagePayload = void 0)
        var A = n(38),
            E = n(5)
        e.packagePayload = function (t, e, n, r) {
            var a,
                O = { event: t, origin: e }
            'function' == typeof r && (O.reply = A.subscribeReplier(r, e)),
                (O.eventData = n)
            try {
                a = E.prefix + JSON.stringify(O)
            } catch (t) {
                throw new Error('Could not stringify event: ' + t.message)
            }
            return a
        }
    },
    function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.Framebus = void 0)
        var A = n(9),
            E = n(39),
            r = n(16),
            a = n(14),
            O = n(5),
            N = 'undefined' != typeof window && window.Promise,
            o = (function () {
                function t (t) {
                    void 0 === t && (t = {}),
                        (this.origin = t.origin || '*'),
                        (this.channel = t.channel || ''),
                        (this.verifyDomain = t.verifyDomain),
                        (this.isDestroyed = !1),
                        (this.listeners = [])
                }
                return (
                    (t.setPromise = function (e) {
                        t.Promise = e
                    }),
                    (t.target = function (e) {
                        return new t(e)
                    }),
                    (t.prototype.include = function (t) {
                        return (
                            null != t &&
                            null != t.Window &&
                            t.constructor === t.Window &&
                            (O.childWindows.push(t), !0)
                        )
                    }),
                    (t.prototype.target = function (e) {
                        return t.target(e)
                    }),
                    (t.prototype.emit = function (t, e, n) {
                        if (this.isDestroyed) return !1
                        var E = this.origin
                        if (((t = this.namespaceEvent(t)), A.isntString(t)))
                            return !1
                        if (A.isntString(E)) return !1
                        'function' == typeof e && ((n = e), (e = void 0))
                        var O = a.packagePayload(t, E, e, n)
                        return (
                            !!O &&
                            (r.broadcast(window.top || window.self, O, E), !0)
                        )
                    }),
                    (t.prototype.emitAsPromise = function (e, n) {
                        var A = this
                        return new t.Promise(function (t, E) {
                            A.emit(e, n, function (e) {
                                t(e)
                            }) ||
                                E(
                                    new Error(
                                        'Listener not added for "' + e + '"'
                                    )
                                )
                        })
                    }),
                    (t.prototype.on = function (t, e) {
                        if (this.isDestroyed) return !1
                        var n = this,
                            A = this.origin,
                            r = e
                        return (
                            (t = this.namespaceEvent(t)),
                            !E.subscriptionArgsInvalid(t, r, A) &&
                                (this.verifyDomain &&
                                    (r = function () {
                                        for (
                                            var t = [], A = 0;
                                            A < arguments.length;
                                            A++
                                        )
                                            t[A] = arguments[A]
                                        n.checkOrigin(this && this.origin) &&
                                            e.apply(void 0, t)
                                    }),
                                this.listeners.push({
                                    eventName: t,
                                    handler: r,
                                    originalHandler: e
                                }),
                                (O.subscribers[A] = O.subscribers[A] || {}),
                                (O.subscribers[A][t] =
                                    O.subscribers[A][t] || []),
                                O.subscribers[A][t].push(r),
                                !0)
                        )
                    }),
                    (t.prototype.off = function (t, e) {
                        var n = e
                        if (this.isDestroyed) return !1
                        if (this.verifyDomain)
                            for (var A = 0; A < this.listeners.length; A++) {
                                var r = this.listeners[A]
                                r.originalHandler === e && (n = r.handler)
                            }
                        t = this.namespaceEvent(t)
                        var a = this.origin
                        if (E.subscriptionArgsInvalid(t, n, a)) return !1
                        var N = O.subscribers[a] && O.subscribers[a][t]
                        if (!N) return !1
                        for (A = 0; A < N.length; A++)
                            if (N[A] === n) return N.splice(A, 1), !0
                        return !1
                    }),
                    (t.prototype.teardown = function () {
                        if (!this.isDestroyed) {
                            this.isDestroyed = !0
                            for (var t = 0; t < this.listeners.length; t++) {
                                var e = this.listeners[t]
                                this.off(e.eventName, e.handler)
                            }
                            this.listeners.length = 0
                        }
                    }),
                    (t.prototype.checkOrigin = function (t) {
                        var e,
                            n = document.createElement('a')
                        return (
                            (n.href = location.href),
                            (e =
                                'https:' === n.protocol
                                    ? n.host.replace(/:443$/, '')
                                    : 'http:' === n.protocol
                                    ? n.host.replace(/:80$/, '')
                                    : n.host),
                            n.protocol + '//' + e === t ||
                                !this.verifyDomain ||
                                this.verifyDomain(t)
                        )
                    }),
                    (t.prototype.namespaceEvent = function (t) {
                        return this.channel ? this.channel + ':' + t : t
                    }),
                    (t.Promise = N),
                    t
                )
            })()
        e.Framebus = o
    },
    function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.broadcast = void 0)
        var A = n(40)
        e.broadcast = function t (e, n, E) {
            var r,
                a = 0
            try {
                for (
                    e.postMessage(n, E),
                        A.hasOpener(e) &&
                            e.opener.top !== window.top &&
                            t(e.opener.top, n, E);
                    (r = e.frames[a]);

                )
                    t(r, n, E), a++
            } catch (t) {}
        }
    },
    function (t, e, n) {
        var A = n(51),
            E =
                'object' == typeof self &&
                self &&
                self.Object === Object &&
                self,
            r = A || E || Function('return this')()
        t.exports = r
    },
    function (t, e, n) {
        var A = n(55),
            E = n(19),
            r = /^\s+|\s+$/g,
            a = /^[-+]0x[0-9a-f]+$/i,
            O = /^0b[01]+$/i,
            N = /^0o[0-7]+$/i,
            o = parseInt
        t.exports = function (t) {
            if ('number' == typeof t) return t
            if (E(t)) return NaN
            if (A(t)) {
                var e = 'function' == typeof t.valueOf ? t.valueOf() : t
                t = A(e) ? e + '' : e
            }
            if ('string' != typeof t) return 0 === t ? t : +t
            t = t.replace(r, '')
            var n = O.test(t)
            return n || N.test(t)
                ? o(t.slice(2), n ? 2 : 8)
                : a.test(t)
                ? NaN
                : +t
        }
    },
    function (t, e, n) {
        var A = n(56),
            E = n(59)
        t.exports = function (t) {
            return 'symbol' == typeof t || (E(t) && '[object Symbol]' == A(t))
        }
    },
    function (t, e, n) {
        'use strict'
        function A (t, e) {
            for (var n = 0; n < e.length; n++) {
                var A = e[n]
                ;(A.enumerable = A.enumerable || !1),
                    (A.configurable = !0),
                    'value' in A && (A.writable = !0),
                    Object.defineProperty(t, A.key, A)
            }
        }
        n.r(e)
        var E = (function () {
            function t (e) {
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, t),
                    (this.rate = e.rate),
                    (this.nper = e.nper),
                    (this.pmt = e.pmt)
            }
            var e, n, E
            return (
                (e = t),
                (n = [
                    {
                        key: 'result',
                        value: function () {
                            return (
                                (this.pmt / this.rate) *
                                (1 - Math.pow(1 + this.rate, -this.nper))
                            )
                        }
                    }
                ]) && A(e.prototype, n),
                E && A(e, E),
                t
            )
        })()
        e.default = function (t) {
            return new E(t).result()
        }
    },
    function (t, e, n) {
        t.exports = n(22)
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        var A = {
            calculate: n(2).default,
            principal: n(25).default,
            payoff: n(26).default,
            interestOnly: n(27).default,
            taxBenefits: n(28).default,
            affordability: n(29).default,
            apr: n(31).default,
            pointPayments: n(32).default,
            limits: n(33).default,
            defaultOptions: n(1).default,
            mount: n(34).default,
            unmount: n(44).default,
            amortisation: n(8).default,
            income: n(45).default,
            buyRent: n(46).default,
            shouldRefinance: n(47).default,
            prequal: n(48).default,
            states: n(65).default,
            counties: function (t) {
                return n(66).default[t]
            },
            buydown: n(67).default
        }
        void 0 === window.fociloanscalculator && (window.fociloanscalculator = A),
            (e.default = A)
    },
    function (t, e, n) {
        'use strict'
        n.r(e),
            (e.default = [
                {
                    mi: 0.45,
                    years: 15,
                    loan_min: 0,
                    loan_max: 625499,
                    ltv_min: 0,
                    ltv_max: 90,
                    fico_min: 0,
                    fico_max: 850
                },
                {
                    mi: 0.7,
                    years: 15,
                    loan_min: 0,
                    loan_max: 625499,
                    ltv_min: 90,
                    ltv_max: 100,
                    fico_min: 0,
                    fico_max: 850
                },
                {
                    mi: 0.45,
                    years: 15,
                    loan_min: 0,
                    loan_max: 2e6,
                    ltv_min: 0,
                    ltv_max: 78,
                    fico_min: 0,
                    fico_max: 850
                },
                {
                    mi: 0.7,
                    years: 15,
                    loan_min: 625500,
                    loan_max: 2e6,
                    ltv_min: 0,
                    ltv_max: 90,
                    fico_min: 0,
                    fico_max: 850
                },
                {
                    mi: 0.95,
                    years: 15,
                    loan_min: 625500,
                    loan_max: 2e6,
                    ltv_min: 90,
                    ltv_max: 100,
                    fico_min: 0,
                    fico_max: 850
                },
                {
                    mi: 0.8,
                    years: 30,
                    loan_min: 0,
                    loan_max: 625500,
                    ltv_min: 0,
                    ltv_max: 95,
                    fico_min: 0,
                    fico_max: 850
                },
                {
                    mi: 0.85,
                    years: 30,
                    loan_min: 0,
                    loan_max: 625500,
                    ltv_min: 95,
                    ltv_max: 100,
                    fico_min: 0,
                    fico_max: 850
                },
                {
                    mi: 1,
                    years: 30,
                    loan_min: 625501,
                    loan_max: 2e6,
                    ltv_min: 0,
                    ltv_max: 95,
                    fico_min: 0,
                    fico_max: 850
                },
                {
                    mi: 1.05,
                    years: 30,
                    loan_min: 625501,
                    loan_max: 2e6,
                    ltv_min: 95,
                    ltv_max: 100,
                    fico_min: 0,
                    fico_max: 850
                }
            ])
    },
    function (t, e, n) {
        'use strict'
        function A (t, e) {
            for (var n = 0; n < e.length; n++) {
                var A = e[n]
                ;(A.enumerable = A.enumerable || !1),
                    (A.configurable = !0),
                    'value' in A && (A.writable = !0),
                    Object.defineProperty(t, A.key, A)
            }
        }
        n.r(e)
        var E = (function () {
            function t (e) {
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, t),
                    (this.options = e)
            }
            var e, n, E
            return (
                (e = t),
                (n = [
                    {
                        key: 'result',
                        value: function () {
                            var t,
                                e,
                                n = 12 * this.options.term,
                                A = this.options.interest_rate / 100 / 12,
                                E = this.getFee(
                                    this.options.type,
                                    this.options.loan_amount,
                                    this.options.down_payment,
                                    this.options.upfront_fee
                                )
                            return 0 === A
                                ? this.options.loan_amount + E / n || 1
                                : (this.options.loan_amount + E) *
                                      ((t = A * Math.pow(1 + A, n)),
                                      (e = Math.pow(1 + A, n) - 1),
                                      t / e || 1)
                        }
                    },
                    {
                        key: 'getFee',
                        value: function (t, e, n, A) {
                            switch (t) {
                                case 'rural':
                                    return e * (A / 100 || 0.01)
                                case 'va':
                                    return this.getVaFee(e, n)
                                case 'fha':
                                    return e * (A / 100 || 0.0175)
                                default:
                                    return 0
                            }
                        }
                    },
                    {
                        key: 'getVaFee',
                        value: function (t, e) {
                            var n = (100 / t) * e
                            return n < 5
                                ? 0.0215 * t
                                : n < 10
                                ? 0.015 * t
                                : 0.0125 * t
                        }
                    }
                ]) && A(e.prototype, n),
                E && A(e, E),
                t
            )
        })()
        e.default = function (t) {
            return new E(t).result()
        }
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        var A = n(0)
        e.default = function (t) {
            t = n(1).merge(t)
            var e = Object(A.c)(n(13).default(t))
            return {
                balance: e,
                balance_percent: (e / t.loan_amount) * 100,
                loan_amount: t.loan_amount,
                interest_rate: t.interest_rate,
                payments_made: t.payments_made,
                total_payments: 12 * t.term,
                paid: Object(A.c)(t.loan_amount - e)
            }
        }
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        var A = n(0)
        function E (t, e) {
            var n = Object.keys(t)
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(t)
                e &&
                    (A = A.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })),
                    n.push.apply(n, A)
            }
            return n
        }
        function r (t, e, n) {
            return (
                e in t
                    ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (t[e] = n),
                t
            )
        }
        e.default = function (t) {
            t = n(1).merge(t)
            var e,
                a,
                O,
                N = n(3).default(t),
                o = n(8).default({
                    propertyPrice: 0,
                    monthlyPayment: N,
                    monthlyHoaFees: 0,
                    monthlyTaxesDollar: 0,
                    monthlyHazardInsurance: 0,
                    monthlyMortgageInsurance: 0,
                    loanAmount: t.loan_amount,
                    interestRate: t.interest_rate
                }),
                R = Object(A.c)(
                    o[o.length - 1].totalInterest +
                        o[o.length - 1].totalPrincipal
                ),
                i = ''.concat(t.term, ' years')
            return (
                t.payment_considered >= N
                    ? ((e = n(8).default({
                          propertyPrice: 0,
                          monthlyPayment: parseFloat(t.payment_considered),
                          monthlyHoaFees: 0,
                          monthlyTaxesDollar: 0,
                          monthlyHazardInsurance: 0,
                          monthlyMortgageInsurance: 0,
                          loanAmount: t.loan_amount,
                          interestRate: t.interest_rate
                      })),
                      (a = Object(A.c)(
                          e[e.length - 1].totalInterest +
                              e[e.length - 1].totalPrincipal
                      )),
                      (O = ''.concat(Math.floor(e.length / 12), ' years')),
                      e.length % 12 &&
                          (O += ', '.concat(e.length % 12, ' months')))
                    : ((e = []), (a = 0), (O = null)),
                (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {}
                        e % 2
                            ? E(Object(n), !0).forEach(function (e) {
                                  r(t, e, n[e])
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                  t,
                                  Object.getOwnPropertyDescriptors(n)
                              )
                            : E(Object(n)).forEach(function (e) {
                                  Object.defineProperty(
                                      t,
                                      e,
                                      Object.getOwnPropertyDescriptor(n, e)
                                  )
                              })
                    }
                    return t
                })(
                    {
                        base_amortisation: o,
                        new_amortisation: e,
                        base_total: R,
                        new_total: a,
                        base_duration: i,
                        new_duration: O
                    },
                    t
                )
            )
        }
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        e.default = function (t) {
            return {
                interest_only:
                    (t = n(1).merge(t)).loan_amount *
                    (t.interest_rate / 100 / 12)
            }
        }
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        e.default = function (t) {
            ;(t = n(1).merge(t)).realestate_taxes > 1e4 &&
                (t.realestate_taxes = 1e4)
            var e = n(3).default(t),
                A = (t.points * t.loan_amount) / 100,
                E = t.loan_amount * (t.interest_rate / 1200),
                r = parseFloat(t.month),
                a = 0 == r ? 0.6 * E : E * (r + 0.5),
                O = a + A,
                N = t.other_deductions + O + t.realestate_taxes,
                o = N - t.standard_deduction,
                R = ((t.tax_rate + t.state_tax_rate) * o) / 100
            return {
                mortgage_payment: e,
                loan_points: A,
                interest_paid: a,
                after_tax: e - R / r,
                standard_deduction: t.standard_deduction,
                interest_point: O,
                realestate_taxes: t.realestate_taxes,
                other_deductions: t.other_deductions,
                itemized_deduction: N,
                additional_deduction: o,
                tax_benefit: R
            }
        }
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        var A = n(0)
        function E (t, e) {
            var n = Object.keys(t)
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(t)
                e &&
                    (A = A.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })),
                    n.push.apply(n, A)
            }
            return n
        }
        function r (t, e, n) {
            return (
                e in t
                    ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (t[e] = n),
                t
            )
        }
        e.default = function (t) {
            ;(t = n(1).merge(t)).monthly_obligations =
                parseFloat(t.auto_payment) +
                parseFloat(t.student_payment) +
                parseFloat(t.installment_payment) +
                parseFloat(t.credit_payment) +
                parseFloat(t.other_payment)
            var e = n(30).default(t),
                a = {
                    taxes:
                        (e.home_value *
                            (t.property_tax || defaultOptions.property_tax)) /
                        100 /
                        12,
                    mortgage_insurance: n(7).default({
                        factors: t.factors,
                        loan_amount: e.loan_amount,
                        loan_to_value: e.loan_amount / e.home_value,
                        term: t.term,
                        fico: t.fico,
                        down_payment: e.down_payment,
                        property_price: e.home_value
                    }),
                    hazard_insurance: t.annual_insurance / 12,
                    principal_interest: e.principal_interest
                },
                O = Object(A.c)(
                    Object.values(a).reduce(function (t, e) {
                        return t + e
                    })
                )
            return (
                Object.keys(e).map(function (t) {
                    return (e[t] = Object(A.c)(e[t]))
                }),
                Object.keys(a).map(function (t) {
                    return (a[t] = Object(A.c)(a[t]))
                }),
                (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {}
                        e % 2
                            ? E(Object(n), !0).forEach(function (e) {
                                  r(t, e, n[e])
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                  t,
                                  Object.getOwnPropertyDescriptors(n)
                              )
                            : E(Object(n)).forEach(function (e) {
                                  Object.defineProperty(
                                      t,
                                      e,
                                      Object.getOwnPropertyDescriptor(n, e)
                                  )
                              })
                    }
                    return t
                })({ total: O }, e, {}, a)
            )
        }
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        var A = n(0)
        function E (t, e) {
            for (var n = 0; n < e.length; n++) {
                var A = e[n]
                ;(A.enumerable = A.enumerable || !1),
                    (A.configurable = !0),
                    'value' in A && (A.writable = !0),
                    Object.defineProperty(t, A.key, A)
            }
        }
        var r = (function () {
            function t (e) {
                var n = e.monthly_income,
                    A = e.monthly_obligations,
                    E = e.term,
                    r = e.interest_rate,
                    a = e.down_payment,
                    O = e.factors,
                    N = e.fico,
                    o = e.property_tax,
                    R = e.est_front_ratio,
                    i = e.est_back_ratio
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, t),
                    (this.monthly_income = parseFloat(n)),
                    (this.monthly_obligations = parseFloat(A)),
                    (this.term = E),
                    (this.interest_rate = r),
                    (this.down_payment = a),
                    (this.est_front_ratio = R),
                    (this.est_back_ratio = i),
                    (this.factors = O),
                    (this.fico = N),
                    (this.property_tax = o)
            }
            var e, r, a
            return (
                (e = t),
                (r = [
                    {
                        key: 'loan_amount',
                        value: function (t, e, n) {
                            var A =
                                    arguments.length > 3 &&
                                    void 0 !== arguments[3]
                                        ? arguments[3]
                                        : 12,
                                E = e / 12 / 100,
                                r = n * A
                            return (
                                (t * (Math.pow(1 + E, r) - 1)) /
                                (E * Math.pow(1 + E, r))
                            )
                        }
                    },
                    {
                        key: 'get_pmi_ltv',
                        value: function (t) {
                            return t <= 80
                                ? 0
                                : t >= 80.01 && t <= 85
                                ? 0.32
                                : t >= 85.01 && t <= 90
                                ? 0.52
                                : t >= 90.01 && t <= 95
                                ? 0.72
                                : t >= 95.01 && t <= 97
                                ? 0.9
                                : 1
                        }
                    },
                    {
                        key: 'monthly_payment',
                        value: function (t, e, n) {
                            var A =
                                arguments.length > 3 && void 0 !== arguments[3]
                                    ? arguments[3]
                                    : 12
                            return (
                                t *
                                ((e /= 1200) / (1 - Math.pow(1 + e, -A * n)))
                            )
                        }
                    },
                    {
                        key: 'result',
                        value: function () {
                            var t =
                                    (this.est_front_ratio *
                                        this.monthly_income) /
                                    100,
                                e = this.loan_amount(
                                    t,
                                    this.interest_rate,
                                    this.term,
                                    12
                                ),
                                E = -this.est_back_ratio,
                                r = 0,
                                a = 0,
                                O = 0,
                                N = (this.down_payment / e) * 100,
                                o =
                                    ((this.est_back_ratio + 0.25) *
                                        this.monthly_income) /
                                    100,
                                R =
                                    ((this.est_front_ratio + 0.25) *
                                        this.monthly_income) /
                                    100
                            for (
                                console.log(
                                    'ratios',
                                    this.est_back_ratio,
                                    this.est_front_ratio
                                );
                                r + this.monthly_obligations < o && r < R;

                            )
                                (E += 0.01),
                                    (t =
                                        ((this.est_front_ratio + E) *
                                            this.monthly_income) /
                                        100),
                                    (O =
                                        (100 *
                                            (e = this.loan_amount(
                                                t,
                                                this.interest_rate,
                                                this.term
                                            ))) /
                                        (100 - N)),
                                    (a = n(7).default({
                                        factors: this.factors,
                                        loan_amount: e,
                                        loan_to_value: e / O,
                                        term: this.term,
                                        fico: this.fico,
                                        down_payment: this.down_payment,
                                        property_price: O
                                    })),
                                    (r =
                                        t +
                                        (O * this.property_tax) / 100 / 12 +
                                        a)
                            return {
                                principal_interest: n(3).default({
                                    loan_amount: e,
                                    interest_rate: this.interest_rate,
                                    term: this.term
                                }),
                                monthly_income: this.monthly_income,
                                monthly_obligations: this.monthly_obligations,
                                actual_front_ratio: Object(A.c)(
                                    (100 * r) / this.monthly_income
                                ),
                                actual_back_ratio: Object(A.c)(
                                    (100 * (r + this.monthly_obligations)) /
                                        this.monthly_income
                                ),
                                home_value: 100 * Math.floor(e / (100 - N)),
                                down_payment: this.down_payment,
                                loan_amount: 100 * Math.floor(e / 100)
                            }
                        }
                    }
                ]) && E(e.prototype, r),
                a && E(e, a),
                t
            )
        })()
        e.default = function (t) {
            return new r(t).result()
        }
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        var A = n(0)
        e.default = function (t) {
            for (
                var e,
                    E = (t = n(1).merge(t)).interest_rate / 100 / 12,
                    r = 12 * t.term,
                    a = n(3).default(t),
                    O = parseFloat(t.other_payment),
                    N = (t.loan_amount * t.points) / 100,
                    o = (t.loan_amount * t.origination_fee) / 100,
                    R = 0.5 * t.loan_amount * E,
                    i = o + N + O + R,
                    L = t.loan_amount - i,
                    I = 0,
                    S = E;
                Math.abs(I - a) > 0.1;

            )
                (e = S),
                    (S =
                        (I = L * (S / (1 - Math.pow(1 + S, -r)))) - a < 0
                            ? e + (S *= 2) / 50
                            : e - (S /= 2) / 50)
            return {
                loan_amount: t.loan_amount,
                interest_rate: t.interest_rate,
                origination_fee: o,
                discount_points: N,
                half_interest: R,
                total_fees: i,
                apr: Object(A.c)(12 * e * 100, 3),
                other_payment: O,
                monthly_payment: a
            }
        }
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        e.default = function (t) {
            var e = ((t = n(1).merge(t)).points * t.loan_amount) / 100,
                A = t.annual_savings_rate / 1200,
                E = t.interest_rate / 1200,
                r = t.interest_rate_with_points / 1200,
                a = 12 * t.term,
                O = e * A,
                N = t.loan_amount * (E / (1 - Math.pow(1 + E, -1 * a))),
                o = t.loan_amount * (r / (1 - Math.pow(1 + r, -1 * a))),
                R = N - o,
                i = R - O,
                L = e / i,
                I = Math.floor(L / 12),
                S = Math.floor(L - 12 * I),
                s = ''.concat(I, ' years')
            return (
                S && (s += ', '.concat(S, ' months')),
                {
                    monthly_payment: N,
                    monthly_payment2: o,
                    monthly_savings: R,
                    points_cost: e,
                    annual_savings_rate: t.annual_savings_rate,
                    monthly_income: O,
                    true_saving: i,
                    breakeven: s
                }
            )
        }
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        e.default = function (t) {
            return (
                (e = {
                    property_price: { min: 0, max: 4e6, step: 5e3 },
                    loan_amount: { min: 0, max: 2e6, step: 5e3 },
                    down_payment: {
                        min: 0,
                        max: t.property_price / 2,
                        step: t.property_price / 200
                    },
                    down_payment_rate: {
                        min: t.min_down_payment || 0,
                        max: 50,
                        step: 0.5
                    },
                    interest_rate: { min: 1, max: 15, step: 0.125 },
                    annual_insurance: { min: 0, max: 1e3, step: 10 },
                    payments_made: { min: 0, max: 12 * t.term, step: 1 },
                    interest_rate_with_points: { min: 1, max: 20, step: 0.125 },
                    annual_savings_rate: { min: 1, max: 20, step: 0.125 },
                    payment_considered: {
                        min: 0,
                        max: t.property_price / 20,
                        step: 1
                    },
                    annual_rent_rate_increase: { min: 0, max: 20, step: 0.125 }
                }),
                (A = { min: 0, max: 15e5, step: 5e3 }),
                (n = 'loan_amount') in e
                    ? Object.defineProperty(e, n, {
                          value: A,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (e[n] = A),
                e
            )
            var e, n, A
        }
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        var A = n(4),
            E = n.n(A),
            r = n(6),
            a =
                '/app-calculator',
            O = new E.a()
        e.default = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {}
            return new Promise(function (n) {
                var A = 2
                localStorage.setItem('form:config', JSON.stringify(e)),
                
                    e.uniqueId && (A = e.uniqueId),
                    'string' == typeof t && (t = document.getElementById(t)),
                    O.on('fociloanscalculator:created', function () {
                        O.emit(
                            'fociloanscalculator:setConfig',
                            JSON.parse(localStorage.getItem('form:config'))
                        ),
                            n(r.a)
                    })
                   
                var E = document.createElement('iframe')
                ;(E.src = ''.concat(a, '?dn=').concat(A)),
                    E.setAttribute(
                        'style',
                        'width: 100%; height: 100%; border: none; float: left'
                    ),
                    E.setAttribute('frameborder', '0'),
                    E.setAttribute('scrolling', 'no'),
                    E.setAttribute('data-custom', 'yes'),
                    t.appendChild(E)
            })
        }
    },
    function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.detach = e.attach = void 0)
        var A = n(36),
            E = !1
        ;(e.attach = function () {
            E ||
                'undefined' == typeof window ||
                ((E = !0), window.addEventListener('message', A.onmessage, !1))
        }),
            (e.detach = function () {
                ;(E = !1),
                    window.removeEventListener('message', A.onmessage, !1)
            })
    },
    function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.onmessage = void 0)
        var A = n(9),
            E = n(37),
            r = n(42),
            a = n(43)
        e.onmessage = function (t) {
            if (!A.isntString(t.data)) {
                var e = E.unpackPayload(t)
                if (e) {
                    var n = e.eventData,
                        O = e.reply
                    r.dispatch('*', e.event, n, O, t),
                        r.dispatch(t.origin, e.event, n, O, t),
                        a.broadcastToChildWindows(t.data, e.origin, t.source)
                }
            }
        }
    },
    function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.unpackPayload = void 0)
        var A = n(5),
            E = n(14)
        e.unpackPayload = function (t) {
            var e
            if (t.data.slice(0, A.prefix.length) !== A.prefix) return !1
            try {
                e = JSON.parse(t.data.slice(A.prefix.length))
            } catch (t) {
                return !1
            }
            if (e.reply) {
                var n = t.origin,
                    r = t.source,
                    a = e.reply
                e.reply = function (t) {
                    if (r) {
                        var e = E.packagePayload(a, n, t)
                        e && r.postMessage(e, n)
                    }
                }
            }
            return e
        }
    },
    function (t, e, n) {
        'use strict'
        var A =
            (this && this.__importDefault) ||
            function (t) {
                return t && t.__esModule ? t : { default: t }
            }
        Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.subscribeReplier = void 0)
        var E = n(15),
            r = A(n(41))
        e.subscribeReplier = function (t, e) {
            var n = r.default()
            return (
                E.Framebus.target({ origin: e }).on(n, function A (r, a) {
                    t(r, a), E.Framebus.target({ origin: e }).off(n, A)
                }),
                n
            )
        }
    },
    function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.subscriptionArgsInvalid = void 0)
        var A = n(9)
        e.subscriptionArgsInvalid = function (t, e, n) {
            return (
                !!A.isntString(t) || 'function' != typeof e || A.isntString(n)
            )
        }
    },
    function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.hasOpener = void 0),
            (e.hasOpener = function (t) {
                return (
                    t.top === t &&
                    null != t.opener &&
                    t.opener !== t &&
                    !0 !== t.opener.closed
                )
            })
    },
    function (t, e, n) {
        'use strict'
        t.exports = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
                /[xy]/g,
                function (t) {
                    var e = (16 * Math.random()) | 0
                    return ('x' === t ? e : (3 & e) | 8).toString(16)
                }
            )
        }
    },
    function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.dispatch = void 0)
        var A = n(5)
        e.dispatch = function (t, e, n, E, r) {
            if (A.subscribers[t] && A.subscribers[t][e]) {
                var a = []
                n && a.push(n), E && a.push(E)
                for (var O = 0; O < A.subscribers[t][e].length; O++)
                    A.subscribers[t][e][O].apply(r, a)
            }
        }
    },
    function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.broadcastToChildWindows = void 0)
        var A = n(16),
            E = n(5)
        e.broadcastToChildWindows = function (t, e, n) {
            for (var r = E.childWindows.length - 1; r >= 0; r--) {
                var a = E.childWindows[r]
                a.closed
                    ? E.childWindows.splice(r, 1)
                    : n !== a && A.broadcast(a.top, t, e)
            }
        }
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        var A = n(4),
            E = n.n(A),
            r = n(6),
            a = new E.a()
        e.default = function () {
            return new Promise(function (t) {
                a.teardown(), a.emit('fociloanscalculator:destroy'), t(r.a)
            })
        }
    },
    function (t, e, n) {
        'use strict'
        function A (t, e) {
            var n = Object.keys(t)
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(t)
                e &&
                    (A = A.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })),
                    n.push.apply(n, A)
            }
            return n
        }
        function E (t, e, n) {
            return (
                e in t
                    ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (t[e] = n),
                t
            )
        }
        n.r(e)
        e.default = function (t) {
            ;((t = n(1).merge(t)).down_payment =
                t.property_price * (t.down_payment_rate / 100)),
                (t.loan_amount = t.property_price - t.down_payment)
            var e = n(2).default(t),
                r = e.total / (t.est_front_ratio / 100)
            return (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {}
                    e % 2
                        ? A(Object(n), !0).forEach(function (e) {
                              E(t, e, n[e])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(n)
                          )
                        : A(Object(n)).forEach(function (e) {
                              Object.defineProperty(
                                  t,
                                  e,
                                  Object.getOwnPropertyDescriptor(n, e)
                              )
                          })
                }
                return t
            })({}, e, {
                monthly_income: r,
                monthly_expenses: (t.est_back_ratio / 100) * r - e.total,
                property_price: t.property_price,
                down_payment: t.down_payment,
                loan_amount: t.loan_amount
            })
        }
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        e.default = function (t) {
            ;(t = n(1).merge(t)).type = 'NA'
            var e = 12 * t.years_before_sell,
                A = (t.points * t.loan_amount) / 100,
                E = A + t.closing_costs,
                r = n(10).default(t) + A,
                a = t.monthly_rent + t.monthly_rent_insurance,
                O = t.annual_rent_rate_increase / 100,
                N = 12 * a * ((Math.pow(1 + O, t.years_before_sell) - 1) / O),
                o = N / t.years_before_sell / 12,
                R = n(3).default(t),
                i = e * R,
                L = (t.annual_taxes + t.annual_insurance) * t.years_before_sell,
                I = (L + t.annual_maintenance * t.years_before_sell) / e,
                S = 12 * I * t.years_before_sell,
                s = t.annual_maintenance * t.years_before_sell,
                u =
                    (((R - o) *
                        Math.pow(1 + t.annual_savings_rate / 100 / 12, e)) /
                        e) *
                    e,
                T = t.property_price - t.loan_amount,
                c = R + I - o,
                l = c * e
            l < 0 && ((c = 0), (u = 0), (l = 0))
            var C = T + u + N + l + E,
                M =
                    t.property_price *
                    Math.pow(
                        1 + t.appreciation_rate / 100,
                        t.years_before_sell
                    ),
                p = M * (1 - t.selling_costs / 100),
                f = n(11).default({
                    loan_amount: t.loan_amount,
                    year_payment_number: t.year_payment_number,
                    years_paid: t.years_before_sell,
                    interest_rate: t.interest_rate,
                    payment_amount: R
                }),
                m = p - f - T,
                _ = m - l,
                D =
                    ((r += t.standard_deduction * t.years_before_sell) *
                        t.tax_rate) /
                    100,
                H = i - S + D - t.closing_costs
            return {
                years_to_rent: t.years_before_sell,
                average_rent: o,
                total_rent_etc: N,
                purchase_equivalent: C,
                monthly_payment: R,
                monthly_total_payment: R + I,
                appreciated_value: M,
                proceeds_minus_cost: p,
                loan_balance: f,
                equity_appreciation: m,
                total_payment: i,
                taxes_and_insurance: L,
                total_maintenance: s,
                tax_savings: D,
                total_closing: E,
                owner_investment: H,
                monthly_rent_savings: c,
                estimated_interest: u,
                total_rent_savings: l,
                total_purchase_benefit: _
            }
        }
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        var A = n(0)
        function E (t, e) {
            var n = Object.keys(t)
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(t)
                e &&
                    (A = A.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })),
                    n.push.apply(n, A)
            }
            return n
        }
        function r (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}
                e % 2
                    ? E(Object(n), !0).forEach(function (e) {
                          a(t, e, n[e])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(n)
                      )
                    : E(Object(n)).forEach(function (e) {
                          Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                          )
                      })
            }
            return t
        }
        function a (t, e, n) {
            return (
                e in t
                    ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (t[e] = n),
                t
            )
        }
        e.default = function (t) {
            t = n(1).merge(t)
            var e,
                E,
                a = n(2).default(t),
                O = Object(A.c)(n(13).default(t)),
                N = n(2).default(
                    r(
                        {},
                        t,
                        {},
                        {
                            term: t.refi_term,
                            interest_rate: t.refi_interest_rate,
                            loan_amount: O
                        }
                    )
                ),
                o =
                    a.breakdown.principal_and_interest -
                    N.breakdown.principal_and_interest
            o < 0 ? (o = 0) : (e = S / o / 12),
                e > 0 &&
                    ((E = ''.concat(Math.floor(e), ' years')),
                    (E += ', '.concat(
                        Math.ceil(12 * (e - Math.floor(e))),
                        ' months'
                    )))
            var R = n(10).default(
                    r({}, t, {}, { years_paid: t.payments_made / 12 })
                ),
                i = n(10).default(
                    r(
                        {},
                        t,
                        {},
                        {
                            years_paid: t.payments_made / 12,
                            loan_amount: O,
                            interest_rate: t.refi_interest_rate
                        }
                    )
                ),
                L = (R * t.tax_rate) / 100,
                I = (i * t.tax_rate) / 100,
                S = t.loan_cost + t.points * (O / 100),
                s = n(11).default({
                    loan_amount: t.loan_amount,
                    year_payment_number: t.year_payment_number,
                    years_paid: t.payments_made / 12 + t.years_before_sell,
                    interest_rate: t.interest_rate,
                    payment_amount: a.breakdown.principal_and_interest
                }),
                u = n(11).default({
                    loan_amount: O,
                    year_payment_number: t.year_payment_number,
                    years_paid: t.years_before_sell,
                    interest_rate: t.refi_interest_rate,
                    payment_amount: N.breakdown.principal_and_interest
                })
            return {
                breakeven: E,
                balance: O,
                new_payment: N,
                current_payment: a,
                monthly_saving: o,
                total_saving:
                    12 * o * t.years_before_sell + (I - L) - S + s - u,
                total_monthly_saving: 12 * o * t.years_before_sell,
                ref_total_cost: S,
                balance_at_sale: s,
                ref_balance_at_sale: u,
                tax_savings: I - L,
                balance_loss: s - u
            }
        }
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        var A = n(0)
        n(49)
        function E (t, e) {
            var n = Object.keys(t)
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(t)
                e &&
                    (A = A.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })),
                    n.push.apply(n, A)
            }
            return n
        }
        function r (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}
                e % 2
                    ? E(Object(n), !0).forEach(function (e) {
                          a(t, e, n[e])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(n)
                      )
                    : E(Object(n)).forEach(function (e) {
                          Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                          )
                      })
            }
            return t
        }
        function a (t, e, n) {
            return (
                e in t
                    ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (t[e] = n),
                t
            )
        }
        var O = function (t, e, n, E) {
            var r,
                a,
                O =
                    parseFloat(Object(A.b)(t.cash)) +
                    parseFloat(Object(A.b)(t.equityInProp)) +
                    parseFloat(Object(A.b)(t.stocks)) +
                    parseFloat(Object(A.b)(t.retirement)) +
                    parseFloat(Object(A.b)(t.otherCash))
            return (
                (t.min_down_payment / 100) * e > O &&
                    ((a = 'max_down_payment'),
                    (r =
                        'Min down payment is higher than cash position, EDIT ABOVE')),
                t.down_payment > O &&
                    ((a = 'max_down_payment'),
                    (r =
                        'Max down payment is higher than cash position, EDIT ABOVE')),
                E > 0 &&
                    n <= 0 &&
                    0 == t.down_payment &&
                    ((a = 'min_down_payment'),
                    (r = 'No cash position for down payment, EDIT ABOVE')),
                { msg: r, field: a }
            )
        }
        e.default = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : []
            t = n(1).merge(t)
            var E =
                    parseFloat(Object(A.b)(t.borrowerIncome)) +
                    parseFloat(Object(A.b)(t.coBorrowerIncome)),
                a =
                    parseFloat(Object(A.b)(t.autoAmount)) +
                    parseFloat(Object(A.b)(t.creditAmount)) +
                    parseFloat(Object(A.b)(t.slAmount)) +
                    parseFloat(Object(A.b)(t.miscAmount)),
                N = Object(A.a)(E, t.est_back_ratio / 100),
                o = Object(A.a)(E, t.est_front_ratio / 100),
                R = N - a
            o < N - a && (R = o)
            for (
                var i,
                    L = n(64).default({ options: t, monthlyPayment: R }),
                    I = L + t.down_payment,
                    S = t.monthly_hoa,
                    s = R - S,
                    u = t.use_fixed_tax
                        ? t.property_tax_value / 12
                        : (I * (t.property_tax / 100)) / 12,
                    T = t.use_fixed_insurance
                        ? t.annual_insurance / 12
                        : (I * (t.annual_insurance_rate / 100)) / 12,
                    c = t.use_custom_pmi
                        ? t.use_fixed_pmi
                            ? t.annual_pmi / 12
                            : (I * (t.pmiFactor / 100)) / 12
                        : 0,
                    l = 10,
                    C = u,
                    M = T,
                    p = c;
                l;

            ) {
                var f = s - Math.abs(C + M + p),
                    m = n(20).default({
                        rate: t.interest_rate / 100 / 12,
                        nper: 12 * t.term,
                        pmt: f
                    }),
                    _ = m + t.down_payment
                ;((12 * ((_ * (t.property_tax / 100)) / 12)) / _) * 100,
                    ((12 * ((_ * (t.annual_insurance_rate / 100)) / 12)) / _) *
                        100,
                    (_ * (t.pmiFactor / 100)) / 12,
                    (i = n(2).default(
                        r({}, t, { loan_amount: m, property_price: _ }),
                        e
                    )),
                    l--,
                    (C = t.use_fixed_tax
                        ? u
                        : (_ * (t.property_tax / 100)) / 12),
                    (M = t.use_fixed_insurance
                        ? T
                        : (_ * (t.annual_insurance_rate / 100)) / 12),
                    (p = t.use_custom_pmi
                        ? t.use_fixed_pmi
                            ? t.annual_pmi / 12
                            : (_ * (t.pmiFactor / 100)) / 12
                        : i.breakdown.insurance)
            }
            var D = C,
                H = M,
                y = p,
                U = S + D + H + y,
                d = R - Math.abs(U),
                P = n(20).default({
                    rate: t.interest_rate / 100 / 12,
                    nper: 12 * t.term,
                    pmt: d
                }),
                h = P,
                G = h + t.down_payment
            h < 0 && ((h = 0), (G = 0))
            var B
            n(2).default(
                r({}, t, {
                    loan_amount: h,
                    property_price: h + t.down_payment
                }),
                e
            )
            ;(B =
                d >= 0
                    ? {
                          total: R,
                          breakdown: {
                              principal_and_interest: d,
                              taxes_and_hoa: D + t.monthly_hoa,
                              insurance: y,
                              monthly_insurance: H
                          }
                      }
                    : {
                          total: 0,
                          breakdown: {
                              principal_and_interest: 0,
                              taxes_and_hoa: 0,
                              insurance: 0,
                              monthly_insurance: 0
                          }
                      }),
                console.log('---------------------------'),
                console.log(
                    'DTI Monthly Amount (' + t.est_back_ratio + ' DTI)',
                    N
                ),
                console.log(
                    'DTI Frontend Monthly Amount (' +
                        t.est_front_ratio +
                        ' DTI)',
                    o
                ),
                console.log('Net Monthly Amount (after debt)', R),
                console.log('DownPayment', t.down_payment),
                console.log('maxEstLoanAmount from Net Monthly Amount', L),
                console.log('maxEstPropertyPrice', I),
                console.log(
                    'Fee Breakdown for Net Monthly Amount',
                    '-- Taxes:',
                    D,
                    ', HOA: ',
                    t.monthly_hoa,
                    ', Hazard:',
                    H,
                    ', MI:',
                    y,
                    ', Sum:',
                    U
                ),
                console.log(
                    'Qualifying Monthly Payment (Net Monthly Amount - Fees)',
                    d
                ),
                console.log('Present Value (PV)', h),
                console.log(
                    'Max PreapprovalValue (PV + Down Payment)',
                    h + t.down_payment
                )
            var W = {
                    loanType: t.type,
                    borrowerIncome: t.borrowerIncome,
                    coBorrowerIncome: t.coBorrowerIncome,
                    purchaseValue: t.purchaseValue,
                    minDownPayment: Object(A.a)(
                        t.min_down_payment / 100,
                        h + t.down_payment
                    ),
                    downPayment: t.down_payment,
                    downPaymentPercent: Object(A.a)(t.down_payment / h, 100),
                    creditScore: t.fico,
                    incomeNeededPercent: t.est_back_ratio,
                    incomeNeededFrontPercent: t.est_front_ratio,
                    purchaseRefinanceTaxValue: h,
                    secondLoanAmount: 0,
                    rate: t.interest_rate,
                    secondRate: 0,
                    term: 12 * t.term,
                    points: 0,
                    totalMonthlyAmount: B.total,
                    monthlyPropertyTaxAmount: B.breakdown.taxes_and_hoa,
                    monthlyInsuranceAmount: B.breakdown.insurance,
                    monthlyHOAAmount: 0,
                    monthlyMIAmount: B.breakdown.monthly_insurance,
                    monthlySecondLoanAmount: 0,
                    cash: t.cash,
                    retirement: t.retirement,
                    stocks: t.stocks,
                    equityInProp: t.equityInProp,
                    otherCash: t.otherCash,
                    miFactor: 0,
                    miscAmount: t.miscAmount,
                    creditAmount: t.creditAmount,
                    slAmount: t.slAmount,
                    autoAmount: t.autoAmount,
                    taxesAndInsuranceAmount: 0,
                    useDownPaymentPercentage: !1,
                    fixedMaxPreApproval: !1,
                    fixedMaxPreApprovalValue: null,
                    computed: {
                        incomeNeeded: E,
                        loanAmount: G,
                        totalIncome: E,
                        totalMonthlyPayments: R,
                        totalAdjustedMonthlyPayments: d,
                        property_price: G
                    },
                    calculatorOptions: r({}, t)
                },
                K = !1
            return (
                t.down_payment < (t.min_down_payment / 100) * G &&
                    (console.log('-------PLANB-------'),
                    (h =
                        (100 * t.down_payment) / t.min_down_payment -
                        t.down_payment),
                    (B = n(2).default(
                        r({}, t, {
                            loan_amount: h,
                            property_price: h + t.down_payment
                        }),
                        e
                    )),
                    (G = h + t.down_payment),
                    (K = !0)),
                r({ id: t.id }, B, {
                    maxPreapprovalValue: h,
                    scenarioData: W,
                    property_price: G,
                    downPaymentError: O(t, G, h, E),
                    downPaymentRestricted: K
                })
            )
        }
    },
    function (t, e, n) {
        var A = n(50)('round')
        t.exports = A
    },
    function (t, e, n) {
        var A = n(17),
            E = n(53),
            r = n(18),
            a = n(60),
            O = A.isFinite,
            N = Math.min
        t.exports = function (t) {
            var e = Math[t]
            return function (t, n) {
                if (((t = r(t)), (n = null == n ? 0 : N(E(n), 292)) && O(t))) {
                    var A = (a(t) + 'e').split('e'),
                        o = e(A[0] + 'e' + (+A[1] + n))
                    return +(
                        (A = (a(o) + 'e').split('e'))[0] +
                        'e' +
                        (+A[1] - n)
                    )
                }
                return e(t)
            }
        }
    },
    function (t, e, n) {
        ;(function (e) {
            var n = 'object' == typeof e && e && e.Object === Object && e
            t.exports = n
        }.call(this, n(52)))
    },
    function (t, e) {
        var n
        n = (function () {
            return this
        })()
        try {
            n = n || new Function('return this')()
        } catch (t) {
            'object' == typeof window && (n = window)
        }
        t.exports = n
    },
    function (t, e, n) {
        var A = n(54)
        t.exports = function (t) {
            var e = A(t),
                n = e % 1
            return e == e ? (n ? e - n : e) : 0
        }
    },
    function (t, e, n) {
        var A = n(18)
        t.exports = function (t) {
            return t
                ? (t = A(t)) === 1 / 0 || t === -1 / 0
                    ? 17976931348623157e292 * (t < 0 ? -1 : 1)
                    : t == t
                    ? t
                    : 0
                : 0 === t
                ? t
                : 0
        }
    },
    function (t, e) {
        t.exports = function (t) {
            var e = typeof t
            return null != t && ('object' == e || 'function' == e)
        }
    },
    function (t, e, n) {
        var A = n(12),
            E = n(57),
            r = n(58),
            a = A ? A.toStringTag : void 0
        t.exports = function (t) {
            return null == t
                ? void 0 === t
                    ? '[object Undefined]'
                    : '[object Null]'
                : a && a in Object(t)
                ? E(t)
                : r(t)
        }
    },
    function (t, e, n) {
        var A = n(12),
            E = Object.prototype,
            r = E.hasOwnProperty,
            a = E.toString,
            O = A ? A.toStringTag : void 0
        t.exports = function (t) {
            var e = r.call(t, O),
                n = t[O]
            try {
                t[O] = void 0
                var A = !0
            } catch (t) {}
            var E = a.call(t)
            return A && (e ? (t[O] = n) : delete t[O]), E
        }
    },
    function (t, e) {
        var n = Object.prototype.toString
        t.exports = function (t) {
            return n.call(t)
        }
    },
    function (t, e) {
        t.exports = function (t) {
            return null != t && 'object' == typeof t
        }
    },
    function (t, e, n) {
        var A = n(61)
        t.exports = function (t) {
            return null == t ? '' : A(t)
        }
    },
    function (t, e, n) {
        var A = n(12),
            E = n(62),
            r = n(63),
            a = n(19),
            O = A ? A.prototype : void 0,
            N = O ? O.toString : void 0
        t.exports = function t (e) {
            if ('string' == typeof e) return e
            if (r(e)) return E(e, t) + ''
            if (a(e)) return N ? N.call(e) : ''
            var n = e + ''
            return '0' == n && 1 / e == -1 / 0 ? '-0' : n
        }
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (
                var n = -1, A = null == t ? 0 : t.length, E = Array(A);
                ++n < A;

            )
                E[n] = e(t[n], n, t)
            return E
        }
    },
    function (t, e) {
        var n = Array.isArray
        t.exports = n
    },
    function (t, e, n) {
        'use strict'
        function A (t, e) {
            for (var n = 0; n < e.length; n++) {
                var A = e[n]
                ;(A.enumerable = A.enumerable || !1),
                    (A.configurable = !0),
                    'value' in A && (A.writable = !0),
                    Object.defineProperty(t, A.key, A)
            }
        }
        n.r(e)
        var E = (function () {
            function t (e) {
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, t),
                    (this.options = e.options),
                    (this.monthlyPayment = e.monthlyPayment)
            }
            var e, n, E
            return (
                (e = t),
                (n = [
                    {
                        key: 'result',
                        value: function () {
                            var t = this.options.interest_rate / 12 / 100,
                                e = 12 * this.options.term
                            return (
                                (this.monthlyPayment *
                                    (Math.pow(1 + t, e) - 1)) /
                                (t * Math.pow(1 + t, e))
                            )
                        }
                    }
                ]) && A(e.prototype, n),
                E && A(e, E),
                t
            )
        })()
        e.default = function (t) {
            return new E(t).result()
        }
    },
    function (t, e, n) {
        'use strict'
        n.r(e),
            (e.default = [
                { value: 'AL', name: 'Alabama' },
                { value: 'AK', name: 'Alaska' },
                { value: 'AZ', name: 'Arizona' },
                { value: 'AR', name: 'Arkansas' },
                { value: 'CA', name: 'California' },
                { value: 'CO', name: 'Colorado' },
                { value: 'CT', name: 'Connecticut' },
                { value: 'DE', name: 'Delaware' },
                { value: 'DC', name: 'District Of Columbia' },
                { value: 'FL', name: 'Florida' },
                { value: 'GA', name: 'Georgia' },
                { value: 'HI', name: 'Hawaii' },
                { value: 'ID', name: 'Idaho' },
                { value: 'IL', name: 'Illinois' },
                { value: 'IN', name: 'Indiana' },
                { value: 'IA', name: 'Iowa' },
                { value: 'KS', name: 'Kansas' },
                { value: 'KY', name: 'Kentucky' },
                { value: 'LA', name: 'Louisiana' },
                { value: 'ME', name: 'Maine' },
                { value: 'MD', name: 'Maryland' },
                { value: 'MA', name: 'Massachusetts' },
                { value: 'MI', name: 'Michigan' },
                { value: 'MN', name: 'Minnesota' },
                { value: 'MS', name: 'Mississippi' },
                { value: 'MO', name: 'Missouri' },
                { value: 'MT', name: 'Montana' },
                { value: 'NE', name: 'Nebraska' },
                { value: 'NV', name: 'Nevada' },
                { value: 'NH', name: 'New Hampshire' },
                { value: 'NJ', name: 'New Jersey' },
                { value: 'NM', name: 'New Mexico' },
                { value: 'NY', name: 'New York' },
                { value: 'NC', name: 'North Carolina' },
                { value: 'ND', name: 'North Dakota' },
                { value: 'OH', name: 'Ohio' },
                { value: 'OK', name: 'Oklahoma' },
                { value: 'OR', name: 'Oregon' },
                { value: 'PA', name: 'Pennsylvania' },
                { value: 'RI', name: 'Rhode Island' },
                { value: 'SC', name: 'South Carolina' },
                { value: 'SD', name: 'South Dakota' },
                { value: 'TN', name: 'Tennessee' },
                { value: 'TX', name: 'Texas' },
                { value: 'UT', name: 'Utah' },
                { value: 'VT', name: 'Vermont' },
                { value: 'VA', name: 'Virginia' },
                { value: 'WA', name: 'Washington' },
                { value: 'WV', name: 'West Virginia' },
                { value: 'WI', name: 'Wisconsin' },
                { value: 'WY', name: 'Wyoming' }
            ])
    },
    function (t, e, n) {
        'use strict'
        n.r(e),
            (e.default = {
                NY: [
                    'SUFFOLK',
                    'NEW YORK',
                    'RICHMOND',
                    'BRONX',
                    'WESTCHESTER',
                    'PUTNAM',
                    'ROCKLAND',
                    'ORANGE',
                    'NASSAU',
                    'QUEENS',
                    'KINGS',
                    'ALBANY',
                    'SCHENECTADY',
                    'MONTGOMERY',
                    'GREENE',
                    'COLUMBIA',
                    'RENSSELAER',
                    'SARATOGA',
                    'FULTON',
                    'SCHOHARIE',
                    'WASHINGTON',
                    'OTSEGO',
                    'HAMILTON',
                    'DELAWARE',
                    'ULSTER',
                    'DUTCHESS',
                    'SULLIVAN',
                    'WARREN',
                    'ESSEX',
                    'CLINTON',
                    'FRANKLIN',
                    'SAINT LAWRENCE',
                    'ONONDAGA',
                    'CAYUGA',
                    'OSWEGO',
                    'MADISON',
                    'CORTLAND',
                    'TOMPKINS',
                    'ONEIDA',
                    'SENECA',
                    'CHENANGO',
                    'WAYNE',
                    'LEWIS',
                    'HERKIMER',
                    'JEFFERSON',
                    'TIOGA',
                    'BROOME',
                    'ERIE',
                    'GENESEE',
                    'NIAGARA',
                    'WYOMING',
                    'ALLEGANY',
                    'CATTARAUGUS',
                    'CHAUTAUQUA',
                    'ORLEANS',
                    'MONROE',
                    'LIVINGSTON',
                    'YATES',
                    'ONTARIO',
                    'STEUBEN',
                    'SCHUYLER',
                    'CHEMUNG'
                ],
                PR: [
                    'ADJUNTAS',
                    'AGUADA',
                    'AGUADILLA',
                    'MARICAO',
                    'ANASCO',
                    'UTUADO',
                    'ARECIBO',
                    'BARCELONETA',
                    'CABO ROJO',
                    'PENUELAS',
                    'CAMUY',
                    'LARES',
                    'SAN GERMAN',
                    'SABANA GRANDE',
                    'CIALES',
                    'DORADO',
                    'GUANICA',
                    'FLORIDA',
                    'GUAYANILLA',
                    'HATILLO',
                    'HORMIGUEROS',
                    'ISABELA',
                    'JAYUYA',
                    'LAJAS',
                    'LAS MARIAS',
                    'MANATI',
                    'MOCA',
                    'RINCON',
                    'QUEBRADILLAS',
                    'MAYAGUEZ',
                    'SAN SEBASTIAN',
                    'MOROVIS',
                    'VEGA ALTA',
                    'VEGA BAJA',
                    'YAUCO',
                    'AGUAS BUENAS',
                    'GUAYAMA',
                    'AIBONITO',
                    'MAUNABO',
                    'ARROYO',
                    'PONCE',
                    'NAGUABO',
                    'NARANJITO',
                    'OROCOVIS',
                    'RIO GRANDE',
                    'PATILLAS',
                    'CAGUAS',
                    'CANOVANAS',
                    'CEIBA',
                    'CAYEY',
                    'FAJARDO',
                    'CIDRA',
                    'HUMACAO',
                    'SALINAS',
                    'SAN LORENZO',
                    'SANTA ISABEL',
                    'VIEQUES',
                    'VILLALBA',
                    'YABUCOA',
                    'COAMO',
                    'LAS PIEDRAS',
                    'LOIZA',
                    'LUQUILLO',
                    'CULEBRA',
                    'JUNCOS',
                    'GURABO',
                    'COMERIO',
                    'COROZAL',
                    'BARRANQUITAS',
                    'JUANA DIAZ',
                    'SAN JUAN',
                    'BAYAMON',
                    'TOA BAJA',
                    'TOA ALTA',
                    'CATANO',
                    'GUAYNABO',
                    'TRUJILLO ALTO',
                    'CAROLINA'
                ],
                MN: [
                    'MOWER',
                    'ITASCA',
                    'WASHINGTON',
                    'CHISAGO',
                    'ANOKA',
                    'ISANTI',
                    'PINE',
                    'GOODHUE',
                    'DAKOTA',
                    'RICE',
                    'SCOTT',
                    'WABASHA',
                    'STEELE',
                    'KANABEC',
                    'RAMSEY',
                    'HENNEPIN',
                    'WRIGHT',
                    'SIBLEY',
                    'SHERBURNE',
                    'RENVILLE',
                    'MCLEOD',
                    'CARVER',
                    'MEEKER',
                    'STEARNS',
                    'MILLE LACS',
                    'LAKE',
                    'SAINT LOUIS',
                    'COOK',
                    'CARLTON',
                    'AITKIN',
                    'OLMSTED',
                    'WINONA',
                    'HOUSTON',
                    'FILLMORE',
                    'DODGE',
                    'BLUE EARTH',
                    'NICOLLET',
                    'FREEBORN',
                    'FARIBAULT',
                    'LE SUEUR',
                    'BROWN',
                    'WATONWAN',
                    'MARTIN',
                    'WASECA',
                    'REDWOOD',
                    'COTTONWOOD',
                    'NOBLES',
                    'JACKSON',
                    'LINCOLN',
                    'MURRAY',
                    'LYON',
                    'ROCK',
                    'PIPESTONE',
                    'KANDIYOHI',
                    'STEVENS',
                    'SWIFT',
                    'BIG STONE',
                    'LAC QUI PARLE',
                    'TRAVERSE',
                    'YELLOW MEDICINE',
                    'CHIPPEWA',
                    'GRANT',
                    'DOUGLAS',
                    'MORRISON',
                    'TODD',
                    'POPE',
                    'OTTER TAIL',
                    'BENTON',
                    'CROW WING',
                    'CASS',
                    'HUBBARD',
                    'WADENA',
                    'BECKER',
                    'NORMAN',
                    'CLAY',
                    'MAHNOMEN',
                    'POLK',
                    'WILKIN',
                    'BELTRAMI',
                    'CLEARWATER',
                    'LAKE OF THE WOODS',
                    'KOOCHICHING',
                    'ROSEAU',
                    'PENNINGTON',
                    'MARSHALL',
                    'RED LAKE',
                    'KITTSON'
                ],
                PA: [
                    'SUSQUEHANNA',
                    'BEAVER',
                    'WASHINGTON',
                    'ALLEGHENY',
                    'FAYETTE',
                    'WESTMORELAND',
                    'GREENE',
                    'SOMERSET',
                    'BEDFORD',
                    'FULTON',
                    'ARMSTRONG',
                    'INDIANA',
                    'JEFFERSON',
                    'CAMBRIA',
                    'CLEARFIELD',
                    'ELK',
                    'FOREST',
                    'CAMERON',
                    'BUTLER',
                    'CLARION',
                    'LAWRENCE',
                    'CRAWFORD',
                    'MERCER',
                    'VENANGO',
                    'WARREN',
                    'MCKEAN',
                    'ERIE',
                    'BLAIR',
                    'HUNTINGDON',
                    'CENTRE',
                    'POTTER',
                    'CLINTON',
                    'TIOGA',
                    'BRADFORD',
                    'CUMBERLAND',
                    'MIFFLIN',
                    'LEBANON',
                    'DAUPHIN',
                    'PERRY',
                    'JUNIATA',
                    'NORTHUMBERLAND',
                    'YORK',
                    'LANCASTER',
                    'FRANKLIN',
                    'ADAMS',
                    'LYCOMING',
                    'SULLIVAN',
                    'UNION',
                    'SNYDER',
                    'COLUMBIA',
                    'MONTOUR',
                    'SCHUYLKILL',
                    'NORTHAMPTON',
                    'LEHIGH',
                    'CARBON',
                    'BUCKS',
                    'MONTGOMERY',
                    'BERKS',
                    'MONROE',
                    'LUZERNE',
                    'PIKE',
                    'LACKAWANNA',
                    'WAYNE',
                    'WYOMING',
                    'DELAWARE',
                    'PHILADELPHIA',
                    'CHESTER'
                ],
                MT: [
                    'GLACIER',
                    'STILLWATER',
                    'YELLOWSTONE',
                    'ROSEBUD',
                    'CARBON',
                    'TREASURE',
                    'SWEET GRASS',
                    'BIG HORN',
                    'PARK',
                    'FERGUS',
                    'WHEATLAND',
                    'GOLDEN VALLEY',
                    'MEAGHER',
                    'MUSSELSHELL',
                    'GARFIELD',
                    'POWDER RIVER',
                    'PETROLEUM',
                    'ROOSEVELT',
                    'SHERIDAN',
                    'MCCONE',
                    'RICHLAND',
                    'DANIELS',
                    'VALLEY',
                    'DAWSON',
                    'PHILLIPS',
                    'CUSTER',
                    'CARTER',
                    'FALLON',
                    'PRAIRIE',
                    'WIBAUX',
                    'CASCADE',
                    'LEWIS AND CLARK',
                    'PONDERA',
                    'TETON',
                    'CHOUTEAU',
                    'TOOLE',
                    'JUDITH BASIN',
                    'LIBERTY',
                    'HILL',
                    'BLAINE',
                    'JEFFERSON',
                    'BROADWATER',
                    'SILVER BOW',
                    'MADISON',
                    'DEER LODGE',
                    'POWELL',
                    'GALLATIN',
                    'BEAVERHEAD',
                    'MISSOULA',
                    'MINERAL',
                    'LAKE',
                    'RAVALLI',
                    'SANDERS',
                    'GRANITE',
                    'FLATHEAD',
                    'LINCOLN'
                ],
                UT: [
                    'GARFIELD',
                    'DUCHESNE',
                    'UTAH',
                    'SALT LAKE',
                    'UINTAH',
                    'DAVIS',
                    'SUMMIT',
                    'MORGAN',
                    'TOOELE',
                    'DAGGETT',
                    'RICH',
                    'WASATCH',
                    'WEBER',
                    'BOX ELDER',
                    'CACHE',
                    'CARBON',
                    'SAN JUAN',
                    'EMERY',
                    'GRAND',
                    'SEVIER',
                    'SANPETE',
                    'MILLARD',
                    'JUAB',
                    'KANE',
                    'BEAVER',
                    'IRON',
                    'WAYNE',
                    'WASHINGTON',
                    'PIUTE'
                ],
                KY: [
                    'LESLIE',
                    'SHELBY',
                    'NELSON',
                    'TRIMBLE',
                    'HENRY',
                    'MARION',
                    'OLDHAM',
                    'JEFFERSON',
                    'WASHINGTON',
                    'SPENCER',
                    'BULLITT',
                    'MEADE',
                    'BRECKINRIDGE',
                    'GRAYSON',
                    'HARDIN',
                    'MERCER',
                    'NICHOLAS',
                    'POWELL',
                    'ROWAN',
                    'MENIFEE',
                    'SCOTT',
                    'MONTGOMERY',
                    'ESTILL',
                    'JESSAMINE',
                    'ANDERSON',
                    'WOODFORD',
                    'BOURBON',
                    'OWEN',
                    'BATH',
                    'MADISON',
                    'CLARK',
                    'JACKSON',
                    'ROCKCASTLE',
                    'GARRARD',
                    'LINCOLN',
                    'BOYLE',
                    'FAYETTE',
                    'FRANKLIN',
                    'WHITLEY',
                    'LAUREL',
                    'KNOX',
                    'HARLAN',
                    'BELL',
                    'LETCHER',
                    'CLAY',
                    'PERRY',
                    'CAMPBELL',
                    'BRACKEN',
                    'HARRISON',
                    'BOONE',
                    'PENDLETON',
                    'CARROLL',
                    'GRANT',
                    'KENTON',
                    'MASON',
                    'FLEMING',
                    'GALLATIN',
                    'ROBERTSON',
                    'BOYD',
                    'GREENUP',
                    'LAWRENCE',
                    'CARTER',
                    'LEWIS',
                    'ELLIOTT',
                    'MARTIN',
                    'JOHNSON',
                    'WOLFE',
                    'BREATHITT',
                    'LEE',
                    'OWSLEY',
                    'MORGAN',
                    'MAGOFFIN',
                    'PIKE',
                    'FLOYD',
                    'KNOTT',
                    'MCCRACKEN',
                    'CALLOWAY',
                    'CARLISLE',
                    'BALLARD',
                    'MARSHALL',
                    'GRAVES',
                    'LIVINGSTON',
                    'HICKMAN',
                    'CRITTENDEN',
                    'LYON',
                    'FULTON',
                    'WARREN',
                    'ALLEN',
                    'BARREN',
                    'METCALFE',
                    'MONROE',
                    'SIMPSON',
                    'EDMONSON',
                    'BUTLER',
                    'LOGAN',
                    'TODD',
                    'TRIGG',
                    'CHRISTIAN',
                    'DAVIESS',
                    'OHIO',
                    'MUHLENBERG',
                    'MCLEAN',
                    'HANCOCK',
                    'HENDERSON',
                    'WEBSTER',
                    'HOPKINS',
                    'CALDWELL',
                    'UNION',
                    'PULASKI',
                    'CASEY',
                    'CLINTON',
                    'RUSSELL',
                    'MCCREARY',
                    'WAYNE',
                    'HART',
                    'ADAIR',
                    'LARUE',
                    'CUMBERLAND',
                    'TAYLOR',
                    'GREEN'
                ],
                MO: [
                    'SHELBY',
                    'SAINT LOUIS',
                    'JEFFERSON',
                    'FRANKLIN',
                    'SAINT FRANCOIS',
                    'WASHINGTON',
                    'GASCONADE',
                    'SAINT LOUIS CITY',
                    'SAINT CHARLES',
                    'PIKE',
                    'MONTGOMERY',
                    'WARREN',
                    'LINCOLN',
                    'AUDRAIN',
                    'CALLAWAY',
                    'MARION',
                    'CLARK',
                    'MACON',
                    'SCOTLAND',
                    'LEWIS',
                    'RALLS',
                    'KNOX',
                    'MONROE',
                    'ADAIR',
                    'SCHUYLER',
                    'SULLIVAN',
                    'PUTNAM',
                    'LINN',
                    'IRON',
                    'REYNOLDS',
                    'SAINTE GENEVIEVE',
                    'WAYNE',
                    'MADISON',
                    'BOLLINGER',
                    'CAPE GIRARDEAU',
                    'STODDARD',
                    'PERRY',
                    'SCOTT',
                    'MISSISSIPPI',
                    'DUNKLIN',
                    'PEMISCOT',
                    'NEW MADRID',
                    'BUTLER',
                    'RIPLEY',
                    'CARTER',
                    'LAFAYETTE',
                    'CASS',
                    'JACKSON',
                    'RAY',
                    'PLATTE',
                    'JOHNSON',
                    'CLAY',
                    'BUCHANAN',
                    'GENTRY',
                    'WORTH',
                    'ANDREW',
                    'DEKALB',
                    'NODAWAY',
                    'HARRISON',
                    'CLINTON',
                    'HOLT',
                    'ATCHISON',
                    'LIVINGSTON',
                    'DAVIESS',
                    'CARROLL',
                    'CALDWELL',
                    'GRUNDY',
                    'CHARITON',
                    'MERCER',
                    'BATES',
                    'SAINT CLAIR',
                    'HENRY',
                    'VERNON',
                    'CEDAR',
                    'BARTON',
                    'JASPER',
                    'MCDONALD',
                    'NEWTON',
                    'BARRY',
                    'OSAGE',
                    'BOONE',
                    'MORGAN',
                    'MARIES',
                    'MILLER',
                    'MONITEAU',
                    'CAMDEN',
                    'COLE',
                    'COOPER',
                    'HOWARD',
                    'RANDOLPH',
                    'PETTIS',
                    'SALINE',
                    'BENTON',
                    'PHELPS',
                    'SHANNON',
                    'DENT',
                    'CRAWFORD',
                    'TEXAS',
                    'PULASKI',
                    'LACLEDE',
                    'HOWELL',
                    'DALLAS',
                    'POLK',
                    'DADE',
                    'GREENE',
                    'LAWRENCE',
                    'OREGON',
                    'DOUGLAS',
                    'OZARK',
                    'CHRISTIAN',
                    'STONE',
                    'TANEY',
                    'HICKORY',
                    'WEBSTER',
                    'WRIGHT'
                ],
                SD: [
                    'CORSON',
                    'UNION',
                    'BROOKINGS',
                    'MINNEHAHA',
                    'CLAY',
                    'MCCOOK',
                    'LINCOLN',
                    'TURNER',
                    'LAKE',
                    'MOODY',
                    'HUTCHINSON',
                    'YANKTON',
                    'KINGSBURY',
                    'BON HOMME',
                    'CODINGTON',
                    'DEUEL',
                    'GRANT',
                    'CLARK',
                    'DAY',
                    'HAMLIN',
                    'ROBERTS',
                    'MARSHALL',
                    'DAVISON',
                    'HANSON',
                    'JERAULD',
                    'DOUGLAS',
                    'SANBORN',
                    'GREGORY',
                    'MINER',
                    'BEADLE',
                    'BRULE',
                    'CHARLES MIX',
                    'BUFFALO',
                    'HYDE',
                    'HAND',
                    'LYMAN',
                    'AURORA',
                    'BROWN',
                    'WALWORTH',
                    'SPINK',
                    'EDMUNDS',
                    'FAULK',
                    'MCPHERSON',
                    'POTTER',
                    'HUGHES',
                    'SULLY',
                    'JACKSON',
                    'TRIPP',
                    'JONES',
                    'STANLEY',
                    'BENNETT',
                    'HAAKON',
                    'TODD',
                    'MELLETTE',
                    'PERKINS',
                    'ZIEBACH',
                    'DEWEY',
                    'MEADE',
                    'CAMPBELL',
                    'HARDING',
                    'PENNINGTON',
                    'SHANNON',
                    'BUTTE',
                    'CUSTER',
                    'LAWRENCE',
                    'FALL RIVER'
                ],
                VA: [
                    'LOUDOUN',
                    'RAPPAHANNOCK',
                    'MANASSAS CITY',
                    'MANASSAS PARK CITY',
                    'FAUQUIER',
                    'FAIRFAX',
                    'PRINCE WILLIAM',
                    'FAIRFAX CITY',
                    'FALLS CHURCH CITY',
                    'ARLINGTON',
                    'ALEXANDRIA CITY',
                    'FREDERICKSBURG CITY',
                    'STAFFORD',
                    'SPOTSYLVANIA',
                    'CAROLINE',
                    'NORTHUMBERLAND',
                    'ORANGE',
                    'ESSEX',
                    'WESTMORELAND',
                    'KING GEORGE',
                    'RICHMOND',
                    'LANCASTER',
                    'WINCHESTER CITY',
                    'FREDERICK',
                    'WARREN',
                    'CLARKE',
                    'SHENANDOAH',
                    'PAGE',
                    'CULPEPER',
                    'MADISON',
                    'HARRISONBURG CITY',
                    'ROCKINGHAM',
                    'AUGUSTA',
                    'ALBEMARLE',
                    'CHARLOTTESVILLE CITY',
                    'NELSON',
                    'GREENE',
                    'FLUVANNA',
                    'WAYNESBORO CITY',
                    'GLOUCESTER',
                    'AMELIA',
                    'BUCKINGHAM',
                    'HANOVER',
                    'KING WILLIAM',
                    'NEW KENT',
                    'GOOCHLAND',
                    'MATHEWS',
                    'KING AND QUEEN',
                    'LOUISA',
                    'CUMBERLAND',
                    'CHARLES CITY',
                    'MIDDLESEX',
                    'HENRICO',
                    'JAMES CITY',
                    'YORK',
                    'POWHATAN',
                    'CHESTERFIELD',
                    'RICHMOND CITY',
                    'WILLIAMSBURG CITY',
                    'ACCOMACK',
                    'ISLE OF WIGHT',
                    'NORTHAMPTON',
                    'CHESAPEAKE CITY',
                    'SUFFOLK CITY',
                    'VIRGINIA BEACH CITY',
                    'NORFOLK CITY',
                    'NEWPORT NEWS CITY',
                    'HAMPTON CITY',
                    'POQUOSON CITY',
                    'PORTSMOUTH CITY',
                    'PRINCE GEORGE',
                    'PETERSBURG CITY',
                    'BRUNSWICK',
                    'DINWIDDIE',
                    'NOTTOWAY',
                    'SOUTHAMPTON',
                    'COLONIAL HEIGHTS CITY',
                    'SURRY',
                    'EMPORIA CITY',
                    'FRANKLIN CITY',
                    'HOPEWELL CITY',
                    'SUSSEX',
                    'GREENSVILLE',
                    'PRINCE EDWARD',
                    'MECKLENBURG',
                    'CHARLOTTE',
                    'LUNENBURG',
                    'APPOMATTOX',
                    'ROANOKE CITY',
                    'ROANOKE',
                    'BOTETOURT',
                    'MONTGOMERY',
                    'PATRICK',
                    'HENRY',
                    'PULASKI',
                    'FRANKLIN',
                    'PITTSYLVANIA',
                    'FLOYD',
                    'GILES',
                    'BEDFORD',
                    'MARTINSVILLE CITY',
                    'CRAIG',
                    'SALEM',
                    'BRISTOL',
                    'WASHINGTON',
                    'WISE',
                    'DICKENSON',
                    'LEE',
                    'RUSSELL',
                    'BUCHANAN',
                    'SCOTT',
                    'NORTON CITY',
                    'GRAYSON',
                    'SMYTH',
                    'WYTHE',
                    'BLAND',
                    'CARROLL',
                    'GALAX CITY',
                    'TAZEWELL',
                    'STAUNTON CITY',
                    'BATH',
                    'HIGHLAND',
                    'ROCKBRIDGE',
                    'BUENA VISTA CITY',
                    'CLIFTON FORGE CITY',
                    'COVINGTON CITY',
                    'ALLEGHANY',
                    'LEXINGTON CITY',
                    'LYNCHBURG CITY',
                    'CAMPBELL',
                    'HALIFAX',
                    'AMHERST',
                    'BEDFORD CITY',
                    'DANVILLE CITY'
                ],
                VI: ['SAINT THOMAS', 'SAINT CROIX', 'SAINT JOHN'],
                MA: [
                    'HAMPDEN',
                    'HAMPSHIRE',
                    'WORCESTER',
                    'BERKSHIRE',
                    'FRANKLIN',
                    'MIDDLESEX',
                    'ESSEX',
                    'PLYMOUTH',
                    'NORFOLK',
                    'BRISTOL',
                    'SUFFOLK',
                    'BARNSTABLE',
                    'DUKES',
                    'NANTUCKET'
                ],
                RI: ['NEWPORT', 'PROVIDENCE', 'WASHINGTON', 'BRISTOL', 'KENT'],
                NH: [
                    'HILLSBOROUGH',
                    'ROCKINGHAM',
                    'MERRIMACK',
                    'GRAFTON',
                    'BELKNAP',
                    'CARROLL',
                    'SULLIVAN',
                    'CHESHIRE',
                    'COOS',
                    'STRAFFORD'
                ],
                ME: [
                    'YORK',
                    'CUMBERLAND',
                    'SAGADAHOC',
                    'OXFORD',
                    'ANDROSCOGGIN',
                    'FRANKLIN',
                    'KENNEBEC',
                    'LINCOLN',
                    'WALDO',
                    'PENOBSCOT',
                    'PISCATAQUIS',
                    'HANCOCK',
                    'WASHINGTON',
                    'AROOSTOOK',
                    'SOMERSET',
                    'PISCATAGUIS',
                    'KNOX'
                ],
                VT: [
                    'WINDSOR',
                    'ORANGE',
                    'CALEDONIA',
                    'WINDHAM',
                    'BENNINGTON',
                    'CHITTENDEN',
                    'GRAND ISLE',
                    'FRANKLIN',
                    'LAMOILLE',
                    'ADDISON',
                    'WASHINGTON',
                    'RUTLAND',
                    'ORLEANS',
                    'ESSEX'
                ],
                CT: [
                    'HARTFORD',
                    'LITCHFIELD',
                    'TOLLAND',
                    'WINDHAM',
                    'NEW LONDON',
                    'NEW HAVEN',
                    'FAIRFIELD',
                    'MIDDLESEX'
                ],
                NJ: [
                    'MIDDLESEX',
                    'HUDSON',
                    'ESSEX',
                    'MORRIS',
                    'BERGEN',
                    'PASSAIC',
                    'UNION',
                    'SOMERSET',
                    'SUSSEX',
                    'MONMOUTH',
                    'WARREN',
                    'HUNTERDON',
                    'SALEM',
                    'CAMDEN',
                    'OCEAN',
                    'BURLINGTON',
                    'GLOUCESTER',
                    'ATLANTIC',
                    'CAPE MAY',
                    'CUMBERLAND',
                    'MERCER'
                ],
                DE: ['NEW CASTLE', 'KENT', 'SUSSEX'],
                DC: ['DISTRICT OF COLUMBIA'],
                MD: [
                    'CHARLES',
                    'SAINT MARYS',
                    'PRINCE GEORGES',
                    'CALVERT',
                    'HOWARD',
                    'ANNE ARUNDEL',
                    'MONTGOMERY',
                    'HARFORD',
                    'BALTIMORE',
                    'CARROLL',
                    'BALTIMORE CITY',
                    'ALLEGANY',
                    'GARRETT',
                    'TALBOT',
                    'QUEEN ANNES',
                    'CAROLINE',
                    'KENT',
                    'DORCHESTER',
                    'FREDERICK',
                    'WASHINGTON',
                    'WICOMICO',
                    'WORCESTER',
                    'SOMERSET',
                    'CECIL'
                ],
                WV: [
                    'MERCER',
                    'WYOMING',
                    'MCDOWELL',
                    'MINGO',
                    'GREENBRIER',
                    'POCAHONTAS',
                    'MONROE',
                    'SUMMERS',
                    'FAYETTE',
                    'KANAWHA',
                    'ROANE',
                    'RALEIGH',
                    'BOONE',
                    'PUTNAM',
                    'CLAY',
                    'LOGAN',
                    'NICHOLAS',
                    'MASON',
                    'JACKSON',
                    'CALHOUN',
                    'GILMER',
                    'BERKELEY',
                    'JEFFERSON',
                    'MORGAN',
                    'HAMPSHIRE',
                    'LINCOLN',
                    'CABELL',
                    'WAYNE',
                    'OHIO',
                    'BROOKE',
                    'MARSHALL',
                    'HANCOCK',
                    'WOOD',
                    'PLEASANTS',
                    'WIRT',
                    'TYLER',
                    'RITCHIE',
                    'WETZEL',
                    'UPSHUR',
                    'WEBSTER',
                    'RANDOLPH',
                    'BARBOUR',
                    'TUCKER',
                    'HARRISON',
                    'LEWIS',
                    'BRAXTON',
                    'DODDRIDGE',
                    'TAYLOR',
                    'PRESTON',
                    'MONONGALIA',
                    'MARION',
                    'GRANT',
                    'MINERAL',
                    'HARDY',
                    'PENDLETON'
                ],
                NC: [
                    'DAVIE',
                    'SURRY',
                    'FORSYTH',
                    'YADKIN',
                    'ROWAN',
                    'STOKES',
                    'ROCKINGHAM',
                    'ALAMANCE',
                    'RANDOLPH',
                    'CHATHAM',
                    'MONTGOMERY',
                    'CASWELL',
                    'GUILFORD',
                    'ORANGE',
                    'LEE',
                    'DAVIDSON',
                    'MOORE',
                    'PERSON',
                    'HARNETT',
                    'WAKE',
                    'DURHAM',
                    'JOHNSTON',
                    'GRANVILLE',
                    'FRANKLIN',
                    'WAYNE',
                    'VANCE',
                    'WARREN',
                    'EDGECOMBE',
                    'NASH',
                    'BERTIE',
                    'BEAUFORT',
                    'PITT',
                    'WILSON',
                    'HERTFORD',
                    'NORTHAMPTON',
                    'HALIFAX',
                    'HYDE',
                    'MARTIN',
                    'GREENE',
                    'PASQUOTANK',
                    'DARE',
                    'CURRITUCK',
                    'PERQUIMANS',
                    'CAMDEN',
                    'TYRRELL',
                    'GATES',
                    'WASHINGTON',
                    'CHOWAN',
                    'STANLY',
                    'GASTON',
                    'ANSON',
                    'IREDELL',
                    'CLEVELAND',
                    'RUTHERFORD',
                    'CABARRUS',
                    'MECKLENBURG',
                    'LINCOLN',
                    'UNION',
                    'CUMBERLAND',
                    'SAMPSON',
                    'ROBESON',
                    'BLADEN',
                    'DUPLIN',
                    'RICHMOND',
                    'SCOTLAND',
                    'HOKE',
                    'NEW HANOVER',
                    'BRUNSWICK',
                    'PENDER',
                    'COLUMBUS',
                    'ONSLOW',
                    'LENOIR',
                    'PAMLICO',
                    'CARTERET',
                    'CRAVEN',
                    'JONES',
                    'CATAWBA',
                    'AVERY',
                    'WATAUGA',
                    'WILKES',
                    'CALDWELL',
                    'BURKE',
                    'ASHE',
                    'ALLEGHANY',
                    'ALEXANDER',
                    'BUNCOMBE',
                    'SWAIN',
                    'MITCHELL',
                    'JACKSON',
                    'TRANSYLVANIA',
                    'HENDERSON',
                    'YANCEY',
                    'HAYWOOD',
                    'POLK',
                    'GRAHAM',
                    'MACON',
                    'MCDOWELL',
                    'MADISON',
                    'CHEROKEE',
                    'CLAY'
                ],
                SC: [
                    'CLARENDON',
                    'RICHLAND',
                    'BAMBERG',
                    'LEXINGTON',
                    'KERSHAW',
                    'LEE',
                    'CHESTER',
                    'FAIRFIELD',
                    'ORANGEBURG',
                    'CALHOUN',
                    'UNION',
                    'NEWBERRY',
                    'SUMTER',
                    'WILLIAMSBURG',
                    'LANCASTER',
                    'DARLINGTON',
                    'COLLETON',
                    'CHESTERFIELD',
                    'SALUDA',
                    'FLORENCE',
                    'AIKEN',
                    'SPARTANBURG',
                    'LAURENS',
                    'CHEROKEE',
                    'CHARLESTON',
                    'BERKELEY',
                    'DORCHESTER',
                    'GEORGETOWN',
                    'HORRY',
                    'MARLBORO',
                    'MARION',
                    'DILLON',
                    'GREENVILLE',
                    'ABBEVILLE',
                    'ANDERSON',
                    'PICKENS',
                    'OCONEE',
                    'GREENWOOD',
                    'YORK',
                    'ALLENDALE',
                    'BARNWELL',
                    'MCCORMICK',
                    'EDGEFIELD',
                    'BEAUFORT',
                    'HAMPTON',
                    'JASPER'
                ],
                GA: [
                    'DEKALB',
                    'GWINNETT',
                    'FULTON',
                    'COBB',
                    'BARROW',
                    'ROCKDALE',
                    'NEWTON',
                    'WALTON',
                    'FORSYTH',
                    'JASPER',
                    'BARTOW',
                    'POLK',
                    'FLOYD',
                    'CHEROKEE',
                    'CARROLL',
                    'HARALSON',
                    'DOUGLAS',
                    'PAULDING',
                    'GORDON',
                    'PICKENS',
                    'LAMAR',
                    'FAYETTE',
                    'PIKE',
                    'SPALDING',
                    'BUTTS',
                    'HEARD',
                    'MERIWETHER',
                    'COWETA',
                    'HENRY',
                    'TROUP',
                    'CLAYTON',
                    'UPSON',
                    'EMANUEL',
                    'MONTGOMERY',
                    'WHEELER',
                    'JEFFERSON',
                    'EVANS',
                    'BULLOCH',
                    'TATTNALL',
                    'SCREVEN',
                    'BURKE',
                    'TOOMBS',
                    'CANDLER',
                    'JENKINS',
                    'LAURENS',
                    'TREUTLEN',
                    'HALL',
                    'HABERSHAM',
                    'BANKS',
                    'UNION',
                    'FANNIN',
                    'HART',
                    'JACKSON',
                    'FRANKLIN',
                    'GILMER',
                    'RABUN',
                    'WHITE',
                    'LUMPKIN',
                    'DAWSON',
                    'STEPHENS',
                    'TOWNS',
                    'CLARKE',
                    'OGLETHORPE',
                    'OCONEE',
                    'MORGAN',
                    'ELBERT',
                    'MADISON',
                    'TALIAFERRO',
                    'GREENE',
                    'WILKES',
                    'MURRAY',
                    'WALKER',
                    'WHITFIELD',
                    'CATOOSA',
                    'CHATTOOGA',
                    'DADE',
                    'COLUMBIA',
                    'RICHMOND',
                    'MCDUFFIE',
                    'WARREN',
                    'GLASCOCK',
                    'LINCOLN',
                    'WILCOX',
                    'WILKINSON',
                    'MONROE',
                    'HOUSTON',
                    'TAYLOR',
                    'DOOLY',
                    'PEACH',
                    'CRISP',
                    'DODGE',
                    'BLECKLEY',
                    'TWIGGS',
                    'WASHINGTON',
                    'PUTNAM',
                    'JONES',
                    'BALDWIN',
                    'PULASKI',
                    'TELFAIR',
                    'MACON',
                    'JOHNSON',
                    'CRAWFORD',
                    'HANCOCK',
                    'BIBB',
                    'LIBERTY',
                    'CHATHAM',
                    'EFFINGHAM',
                    'MCINTOSH',
                    'BRYAN',
                    'LONG',
                    'WARE',
                    'BACON',
                    'COFFEE',
                    'APPLING',
                    'PIERCE',
                    'GLYNN',
                    'JEFF DAVIS',
                    'CHARLTON',
                    'BRANTLEY',
                    'WAYNE',
                    'CAMDEN',
                    'DECATUR',
                    'LOWNDES',
                    'COOK',
                    'BERRIEN',
                    'CLINCH',
                    'ATKINSON',
                    'BROOKS',
                    'THOMAS',
                    'LANIER',
                    'ECHOLS',
                    'DOUGHERTY',
                    'SUMTER',
                    'TURNER',
                    'MITCHELL',
                    'COLQUITT',
                    'TIFT',
                    'BEN HILL',
                    'IRWIN',
                    'LEE',
                    'WORTH',
                    'TALBOT',
                    'MARION',
                    'HARRIS',
                    'CHATTAHOOCHEE',
                    'SCHLEY',
                    'MUSCOGEE',
                    'STEWART',
                    'WEBSTER',
                    'CALHOUN',
                    'EARLY',
                    'CLAY',
                    'PHELPS',
                    'TERRELL',
                    'GRADY',
                    'SEMINOLE',
                    'QUITMAN',
                    'BAKER',
                    'RANDOLPH'
                ],
                FL: [
                    'CLAY',
                    'SAINT JOHNS',
                    'PUTNAM',
                    'SUWANNEE',
                    'NASSAU',
                    'LAFAYETTE',
                    'COLUMBIA',
                    'UNION',
                    'BAKER',
                    'BRADFORD',
                    'HAMILTON',
                    'MADISON',
                    'DUVAL',
                    'LAKE',
                    'VOLUSIA',
                    'FLAGLER',
                    'MARION',
                    'SUMTER',
                    'LEON',
                    'WAKULLA',
                    'FRANKLIN',
                    'LIBERTY',
                    'GADSDEN',
                    'JEFFERSON',
                    'TAYLOR',
                    'BAY',
                    'JACKSON',
                    'CALHOUN',
                    'WALTON',
                    'HOLMES',
                    'WASHINGTON',
                    'GULF',
                    'ESCAMBIA',
                    'SANTA ROSA',
                    'OKALOOSA',
                    'ALACHUA',
                    'GILCHRIST',
                    'LEVY',
                    'DIXIE',
                    'SEMINOLE',
                    'ORANGE',
                    'BREVARD',
                    'INDIAN RIVER',
                    'MONROE',
                    'MIAMI DADE',
                    'BROWARD',
                    'PALM BEACH',
                    'HENDRY',
                    'MARTIN',
                    'GLADES',
                    'HILLSBOROUGH',
                    'PASCO',
                    'PINELLAS',
                    'POLK',
                    'HIGHLANDS',
                    'HARDEE',
                    'OSCEOLA',
                    'LEE',
                    'CHARLOTTE',
                    'COLLIER',
                    'MANATEE',
                    'SARASOTA',
                    'DE SOTO',
                    'CITRUS',
                    'HERNANDO',
                    'SAINT LUCIE',
                    'OKEECHOBEE'
                ],
                AL: [
                    'SAINT CLAIR',
                    'JEFFERSON',
                    'SHELBY',
                    'TALLAPOOSA',
                    'BLOUNT',
                    'TALLADEGA',
                    'MARSHALL',
                    'CULLMAN',
                    'BIBB',
                    'WALKER',
                    'CHILTON',
                    'COOSA',
                    'CLAY',
                    'TUSCALOOSA',
                    'HALE',
                    'PICKENS',
                    'GREENE',
                    'SUMTER',
                    'WINSTON',
                    'FAYETTE',
                    'MARION',
                    'LAMAR',
                    'FRANKLIN',
                    'MORGAN',
                    'LAUDERDALE',
                    'LIMESTONE',
                    'COLBERT',
                    'LAWRENCE',
                    'JACKSON',
                    'MADISON',
                    'ETOWAH',
                    'CHEROKEE',
                    'DE KALB',
                    'AUTAUGA',
                    'PIKE',
                    'CRENSHAW',
                    'MONTGOMERY',
                    'BUTLER',
                    'BARBOUR',
                    'ELMORE',
                    'BULLOCK',
                    'MACON',
                    'LOWNDES',
                    'COVINGTON',
                    'CALHOUN',
                    'CLEBURNE',
                    'RANDOLPH',
                    'HOUSTON',
                    'HENRY',
                    'DALE',
                    'GENEVA',
                    'COFFEE',
                    'CONECUH',
                    'MONROE',
                    'ESCAMBIA',
                    'WILCOX',
                    'CLARKE',
                    'MOBILE',
                    'BALDWIN',
                    'WASHINGTON',
                    'DALLAS',
                    'MARENGO',
                    'PERRY',
                    'LEE',
                    'RUSSELL',
                    'CHAMBERS',
                    'CHOCTAW'
                ],
                TN: [
                    'ROBERTSON',
                    'DAVIDSON',
                    'DEKALB',
                    'WILLIAMSON',
                    'CHEATHAM',
                    'CANNON',
                    'COFFEE',
                    'MARSHALL',
                    'BEDFORD',
                    'SUMNER',
                    'STEWART',
                    'HICKMAN',
                    'DICKSON',
                    'SMITH',
                    'RUTHERFORD',
                    'MONTGOMERY',
                    'HOUSTON',
                    'WILSON',
                    'TROUSDALE',
                    'HUMPHREYS',
                    'MACON',
                    'PERRY',
                    'WARREN',
                    'LINCOLN',
                    'MAURY',
                    'GRUNDY',
                    'HAMILTON',
                    'MCMINN',
                    'FRANKLIN',
                    'POLK',
                    'BRADLEY',
                    'MONROE',
                    'RHEA',
                    'MEIGS',
                    'SEQUATCHIE',
                    'MARION',
                    'MOORE',
                    'BLEDSOE',
                    'SHELBY',
                    'WASHINGTON',
                    'GREENE',
                    'SULLIVAN',
                    'JOHNSON',
                    'HAWKINS',
                    'CARTER',
                    'UNICOI',
                    'BLOUNT',
                    'ANDERSON',
                    'CLAIBORNE',
                    'GRAINGER',
                    'COCKE',
                    'CAMPBELL',
                    'MORGAN',
                    'KNOX',
                    'CUMBERLAND',
                    'JEFFERSON',
                    'SCOTT',
                    'SEVIER',
                    'LOUDON',
                    'ROANE',
                    'HANCOCK',
                    'HAMBLEN',
                    'UNION',
                    'CROCKETT',
                    'FAYETTE',
                    'TIPTON',
                    'DYER',
                    'HARDEMAN',
                    'HAYWOOD',
                    'LAUDERDALE',
                    'LAKE',
                    'CARROLL',
                    'BENTON',
                    'HENRY',
                    'WEAKLEY',
                    'OBION',
                    'GIBSON',
                    'MADISON',
                    'MCNAIRY',
                    'DECATUR',
                    'HARDIN',
                    'HENDERSON',
                    'CHESTER',
                    'WAYNE',
                    'GILES',
                    'LAWRENCE',
                    'LEWIS',
                    'PUTNAM',
                    'FENTRESS',
                    'OVERTON',
                    'PICKETT',
                    'CLAY',
                    'WHITE',
                    'JACKSON',
                    'VAN BUREN'
                ],
                MS: [
                    'LAFAYETTE',
                    'TATE',
                    'BENTON',
                    'PANOLA',
                    'QUITMAN',
                    'TIPPAH',
                    'MARSHALL',
                    'COAHOMA',
                    'TUNICA',
                    'UNION',
                    'DE SOTO',
                    'WASHINGTON',
                    'BOLIVAR',
                    'SHARKEY',
                    'SUNFLOWER',
                    'ISSAQUENA',
                    'HUMPHREYS',
                    'LEE',
                    'PONTOTOC',
                    'MONROE',
                    'TISHOMINGO',
                    'PRENTISS',
                    'ALCORN',
                    'CALHOUN',
                    'ITAWAMBA',
                    'CHICKASAW',
                    'GRENADA',
                    'CARROLL',
                    'TALLAHATCHIE',
                    'YALOBUSHA',
                    'HOLMES',
                    'MONTGOMERY',
                    'LEFLORE',
                    'YAZOO',
                    'HINDS',
                    'RANKIN',
                    'SIMPSON',
                    'MADISON',
                    'LEAKE',
                    'NEWTON',
                    'COPIAH',
                    'ATTALA',
                    'JEFFERSON',
                    'SCOTT',
                    'CLAIBORNE',
                    'SMITH',
                    'COVINGTON',
                    'ADAMS',
                    'LAWRENCE',
                    'WARREN',
                    'LAUDERDALE',
                    'WAYNE',
                    'KEMPER',
                    'CLARKE',
                    'JASPER',
                    'WINSTON',
                    'NOXUBEE',
                    'NESHOBA',
                    'GREENE',
                    'FORREST',
                    'JEFFERSON DAVIS',
                    'PERRY',
                    'PEARL RIVER',
                    'MARION',
                    'JONES',
                    'GEORGE',
                    'LAMAR',
                    'HARRISON',
                    'HANCOCK',
                    'JACKSON',
                    'STONE',
                    'LINCOLN',
                    'FRANKLIN',
                    'WILKINSON',
                    'PIKE',
                    'AMITE',
                    'WALTHALL',
                    'LOWNDES',
                    'CHOCTAW',
                    'WEBSTER',
                    'CLAY',
                    'OKTIBBEHA'
                ],
                OH: [
                    'LICKING',
                    'FRANKLIN',
                    'DELAWARE',
                    'KNOX',
                    'UNION',
                    'CHAMPAIGN',
                    'CLARK',
                    'FAIRFIELD',
                    'MADISON',
                    'PERRY',
                    'ROSS',
                    'PICKAWAY',
                    'FAYETTE',
                    'HOCKING',
                    'MARION',
                    'LOGAN',
                    'MORROW',
                    'WYANDOT',
                    'HARDIN',
                    'WOOD',
                    'SANDUSKY',
                    'OTTAWA',
                    'LUCAS',
                    'ERIE',
                    'WILLIAMS',
                    'FULTON',
                    'HENRY',
                    'DEFIANCE',
                    'MUSKINGUM',
                    'NOBLE',
                    'BELMONT',
                    'MONROE',
                    'GUERNSEY',
                    'MORGAN',
                    'COSHOCTON',
                    'TUSCARAWAS',
                    'JEFFERSON',
                    'HARRISON',
                    'COLUMBIANA',
                    'LORAIN',
                    'ASHTABULA',
                    'CUYAHOGA',
                    'GEAUGA',
                    'LAKE',
                    'SUMMIT',
                    'PORTAGE',
                    'MEDINA',
                    'WAYNE',
                    'MAHONING',
                    'TRUMBULL',
                    'STARK',
                    'CARROLL',
                    'HOLMES',
                    'SENECA',
                    'HANCOCK',
                    'ASHLAND',
                    'HURON',
                    'RICHLAND',
                    'CRAWFORD',
                    'HAMILTON',
                    'BUTLER',
                    'WARREN',
                    'PREBLE',
                    'BROWN',
                    'CLERMONT',
                    'ADAMS',
                    'CLINTON',
                    'HIGHLAND',
                    'GREENE',
                    'SHELBY',
                    'DARKE',
                    'MIAMI',
                    'MONTGOMERY',
                    'MERCER',
                    'PIKE',
                    'GALLIA',
                    'LAWRENCE',
                    'JACKSON',
                    'VINTON',
                    'SCIOTO',
                    'ATHENS',
                    'WASHINGTON',
                    'MEIGS',
                    'ALLEN',
                    'AUGLAIZE',
                    'PAULDING',
                    'PUTNAM',
                    'VAN WERT'
                ],
                IN: [
                    'MADISON',
                    'HAMILTON',
                    'CLINTON',
                    'HANCOCK',
                    'TIPTON',
                    'BOONE',
                    'HENDRICKS',
                    'RUSH',
                    'PUTNAM',
                    'JOHNSON',
                    'MARION',
                    'SHELBY',
                    'MORGAN',
                    'FAYETTE',
                    'HENRY',
                    'BROWN',
                    'PORTER',
                    'LAKE',
                    'JASPER',
                    'LA PORTE',
                    'NEWTON',
                    'STARKE',
                    'MARSHALL',
                    'KOSCIUSKO',
                    'ELKHART',
                    'ST JOSEPH',
                    'LAGRANGE',
                    'NOBLE',
                    'HUNTINGTON',
                    'STEUBEN',
                    'ALLEN',
                    'DE KALB',
                    'ADAMS',
                    'WELLS',
                    'WHITLEY',
                    'HOWARD',
                    'FULTON',
                    'MIAMI',
                    'CARROLL',
                    'GRANT',
                    'CASS',
                    'WABASH',
                    'PULASKI',
                    'DEARBORN',
                    'UNION',
                    'RIPLEY',
                    'FRANKLIN',
                    'SWITZERLAND',
                    'OHIO',
                    'SCOTT',
                    'CLARK',
                    'HARRISON',
                    'WASHINGTON',
                    'CRAWFORD',
                    'FLOYD',
                    'BARTHOLOMEW',
                    'JACKSON',
                    'JENNINGS',
                    'JEFFERSON',
                    'DECATUR',
                    'DELAWARE',
                    'WAYNE',
                    'JAY',
                    'RANDOLPH',
                    'BLACKFORD',
                    'MONROE',
                    'LAWRENCE',
                    'GREENE',
                    'OWEN',
                    'ORANGE',
                    'DAVIESS',
                    'KNOX',
                    'DUBOIS',
                    'PERRY',
                    'MARTIN',
                    'SPENCER',
                    'PIKE',
                    'WARRICK',
                    'POSEY',
                    'VANDERBURGH',
                    'GIBSON',
                    'VIGO',
                    'PARKE',
                    'VERMILLION',
                    'CLAY',
                    'SULLIVAN',
                    'TIPPECANOE',
                    'MONTGOMERY',
                    'BENTON',
                    'FOUNTAIN',
                    'WHITE',
                    'WARREN'
                ],
                MI: [
                    'SAINT CLAIR',
                    'LAPEER',
                    'MACOMB',
                    'OAKLAND',
                    'WAYNE',
                    'WASHTENAW',
                    'MONROE',
                    'LIVINGSTON',
                    'SANILAC',
                    'GENESEE',
                    'HURON',
                    'SHIAWASSEE',
                    'SAGINAW',
                    'TUSCOLA',
                    'OGEMAW',
                    'BAY',
                    'GLADWIN',
                    'GRATIOT',
                    'CLARE',
                    'MIDLAND',
                    'OSCODA',
                    'ROSCOMMON',
                    'ARENAC',
                    'ALCONA',
                    'IOSCO',
                    'ISABELLA',
                    'INGHAM',
                    'CLINTON',
                    'IONIA',
                    'MONTCALM',
                    'EATON',
                    'BARRY',
                    'KALAMAZOO',
                    'ALLEGAN',
                    'CALHOUN',
                    'VAN BUREN',
                    'BERRIEN',
                    'BRANCH',
                    'SAINT JOSEPH',
                    'CASS',
                    'JACKSON',
                    'LENAWEE',
                    'HILLSDALE',
                    'KENT',
                    'MUSKEGON',
                    'LAKE',
                    'MECOSTA',
                    'NEWAYGO',
                    'OTTAWA',
                    'MASON',
                    'OCEANA',
                    'WEXFORD',
                    'GRAND TRAVERSE',
                    'ANTRIM',
                    'MANISTEE',
                    'BENZIE',
                    'LEELANAU',
                    'OSCEOLA',
                    'MISSAUKEE',
                    'KALKASKA',
                    'CHEBOYGAN',
                    'EMMET',
                    'ALPENA',
                    'MONTMORENCY',
                    'CHIPPEWA',
                    'CHARLEVOIX',
                    'MACKINAC',
                    'OTSEGO',
                    'CRAWFORD',
                    'PRESQUE ISLE',
                    'DICKINSON',
                    'KEWEENAW',
                    'ALGER',
                    'DELTA',
                    'MARQUETTE',
                    'MENOMINEE',
                    'SCHOOLCRAFT',
                    'LUCE',
                    'IRON',
                    'HOUGHTON',
                    'BARAGA',
                    'ONTONAGON',
                    'GOGEBIC'
                ],
                IA: [
                    'WARREN',
                    'ADAIR',
                    'DALLAS',
                    'MARSHALL',
                    'HARDIN',
                    'POLK',
                    'WAYNE',
                    'STORY',
                    'CASS',
                    'AUDUBON',
                    'GUTHRIE',
                    'MAHASKA',
                    'JASPER',
                    'BOONE',
                    'MADISON',
                    'HAMILTON',
                    'FRANKLIN',
                    'MARION',
                    'LUCAS',
                    'GREENE',
                    'CARROLL',
                    'DECATUR',
                    'WRIGHT',
                    'RINGGOLD',
                    'KEOKUK',
                    'POWESHIEK',
                    'UNION',
                    'MONROE',
                    'TAMA',
                    'CLARKE',
                    'CERRO GORDO',
                    'HANCOCK',
                    'WINNEBAGO',
                    'MITCHELL',
                    'WORTH',
                    'FLOYD',
                    'KOSSUTH',
                    'HOWARD',
                    'WEBSTER',
                    'BUENA VISTA',
                    'EMMET',
                    'PALO ALTO',
                    'HUMBOLDT',
                    'SAC',
                    'CALHOUN',
                    'POCAHONTAS',
                    'BUTLER',
                    'CHICKASAW',
                    'FAYETTE',
                    'BUCHANAN',
                    'GRUNDY',
                    'BLACK HAWK',
                    'BREMER',
                    'DELAWARE',
                    'TAYLOR',
                    'ADAMS',
                    'MONTGOMERY',
                    'PLYMOUTH',
                    'SIOUX',
                    'WOODBURY',
                    'CHEROKEE',
                    'IDA',
                    'OBRIEN',
                    'MONONA',
                    'CLAY',
                    'LYON',
                    'OSCEOLA',
                    'DICKINSON',
                    'CRAWFORD',
                    'SHELBY',
                    'POTTAWATTAMIE',
                    'HARRISON',
                    'MILLS',
                    'PAGE',
                    'FREMONT',
                    'DUBUQUE',
                    'JACKSON',
                    'CLINTON',
                    'CLAYTON',
                    'WINNESHIEK',
                    'ALLAMAKEE',
                    'WASHINGTON',
                    'LINN',
                    'IOWA',
                    'JONES',
                    'BENTON',
                    'CEDAR',
                    'JOHNSON',
                    'WAPELLO',
                    'JEFFERSON',
                    'VAN BUREN',
                    'DAVIS',
                    'APPANOOSE',
                    'DES MOINES',
                    'LEE',
                    'HENRY',
                    'LOUISA',
                    'MUSCATINE',
                    'SCOTT'
                ],
                WI: [
                    'SHEBOYGAN',
                    'WASHINGTON',
                    'DODGE',
                    'OZAUKEE',
                    'WAUKESHA',
                    'FOND DU LAC',
                    'CALUMET',
                    'MANITOWOC',
                    'JEFFERSON',
                    'KENOSHA',
                    'RACINE',
                    'MILWAUKEE',
                    'WALWORTH',
                    'ROCK',
                    'GREEN',
                    'IOWA',
                    'LAFAYETTE',
                    'DANE',
                    'GRANT',
                    'RICHLAND',
                    'COLUMBIA',
                    'SAUK',
                    'CRAWFORD',
                    'ADAMS',
                    'MARQUETTE',
                    'GREEN LAKE',
                    'JUNEAU',
                    'POLK',
                    'SAINT CROIX',
                    'PIERCE',
                    'OCONTO',
                    'MARINETTE',
                    'FOREST',
                    'OUTAGAMIE',
                    'SHAWANO',
                    'BROWN',
                    'FLORENCE',
                    'MENOMINEE',
                    'KEWAUNEE',
                    'DOOR',
                    'MARATHON',
                    'WOOD',
                    'CLARK',
                    'PORTAGE',
                    'LANGLADE',
                    'TAYLOR',
                    'LINCOLN',
                    'PRICE',
                    'ONEIDA',
                    'VILAS',
                    'ASHLAND',
                    'IRON',
                    'RUSK',
                    'LA CROSSE',
                    'BUFFALO',
                    'JACKSON',
                    'TREMPEALEAU',
                    'MONROE',
                    'VERNON',
                    'EAU CLAIRE',
                    'PEPIN',
                    'CHIPPEWA',
                    'DUNN',
                    'BARRON',
                    'WASHBURN',
                    'BAYFIELD',
                    'DOUGLAS',
                    'SAWYER',
                    'BURNETT',
                    'WINNEBAGO',
                    'WAUPACA',
                    'WAUSHARA'
                ],
                ND: [
                    'RICHLAND',
                    'CASS',
                    'TRAILL',
                    'SARGENT',
                    'RANSOM',
                    'BARNES',
                    'STEELE',
                    'GRAND FORKS',
                    'WALSH',
                    'NELSON',
                    'PEMBINA',
                    'CAVALIER',
                    'RAMSEY',
                    'ROLETTE',
                    'PIERCE',
                    'TOWNER',
                    'BOTTINEAU',
                    'WELLS',
                    'BENSON',
                    'EDDY',
                    'STUTSMAN',
                    'MCINTOSH',
                    'LAMOURE',
                    'GRIGGS',
                    'FOSTER',
                    'KIDDER',
                    'SHERIDAN',
                    'DICKEY',
                    'LOGAN',
                    'BURLEIGH',
                    'MORTON',
                    'MERCER',
                    'EMMONS',
                    'SIOUX',
                    'GRANT',
                    'OLIVER',
                    'MCLEAN',
                    'STARK',
                    'SLOPE',
                    'GOLDEN VALLEY',
                    'BOWMAN',
                    'DUNN',
                    'BILLINGS',
                    'MCKENZIE',
                    'ADAMS',
                    'HETTINGER',
                    'WARD',
                    'MCHENRY',
                    'BURKE',
                    'DIVIDE',
                    'RENVILLE',
                    'WILLIAMS',
                    'MOUNTRAIL'
                ],
                IL: [
                    'MCHENRY',
                    'LAKE',
                    'COOK',
                    'DU PAGE',
                    'KANE',
                    'DE KALB',
                    'OGLE',
                    'WILL',
                    'GRUNDY',
                    'LIVINGSTON',
                    'LA SALLE',
                    'KENDALL',
                    'LEE',
                    'KANKAKEE',
                    'IROQUOIS',
                    'FORD',
                    'VERMILION',
                    'CHAMPAIGN',
                    'JO DAVIESS',
                    'BOONE',
                    'STEPHENSON',
                    'CARROLL',
                    'WINNEBAGO',
                    'WHITESIDE',
                    'ROCK ISLAND',
                    'MERCER',
                    'HENRY',
                    'BUREAU',
                    'PUTNAM',
                    'MARSHALL',
                    'KNOX',
                    'MCDONOUGH',
                    'FULTON',
                    'WARREN',
                    'HENDERSON',
                    'STARK',
                    'HANCOCK',
                    'PEORIA',
                    'SCHUYLER',
                    'WOODFORD',
                    'MASON',
                    'TAZEWELL',
                    'MCLEAN',
                    'LOGAN',
                    'DEWITT',
                    'MACON',
                    'PIATT',
                    'DOUGLAS',
                    'COLES',
                    'MOULTRIE',
                    'EDGAR',
                    'SHELBY',
                    'MADISON',
                    'CALHOUN',
                    'MACOUPIN',
                    'FAYETTE',
                    'JERSEY',
                    'MONTGOMERY',
                    'GREENE',
                    'BOND',
                    'SAINT CLAIR',
                    'CHRISTIAN',
                    'WASHINGTON',
                    'CLINTON',
                    'RANDOLPH',
                    'MONROE',
                    'PERRY',
                    'ADAMS',
                    'PIKE',
                    'BROWN',
                    'EFFINGHAM',
                    'WABASH',
                    'CRAWFORD',
                    'LAWRENCE',
                    'RICHLAND',
                    'CLARK',
                    'CUMBERLAND',
                    'JASPER',
                    'CLAY',
                    'WAYNE',
                    'EDWARDS',
                    'SANGAMON',
                    'MORGAN',
                    'SCOTT',
                    'CASS',
                    'MENARD',
                    'MARION',
                    'FRANKLIN',
                    'JEFFERSON',
                    'HAMILTON',
                    'WHITE',
                    'WILLIAMSON',
                    'GALLATIN',
                    'JACKSON',
                    'UNION',
                    'JOHNSON',
                    'MASSAC',
                    'ALEXANDER',
                    'SALINE',
                    'HARDIN',
                    'POPE',
                    'PULASKI'
                ],
                KS: [
                    'ATCHISON',
                    'DOUGLAS',
                    'LEAVENWORTH',
                    'DONIPHAN',
                    'LINN',
                    'WYANDOTTE',
                    'MIAMI',
                    'ANDERSON',
                    'JOHNSON',
                    'FRANKLIN',
                    'JEFFERSON',
                    'WABAUNSEE',
                    'SHAWNEE',
                    'MARSHALL',
                    'NEMAHA',
                    'POTTAWATOMIE',
                    'OSAGE',
                    'JACKSON',
                    'BROWN',
                    'GEARY',
                    'RILEY',
                    'BOURBON',
                    'WILSON',
                    'CRAWFORD',
                    'CHEROKEE',
                    'NEOSHO',
                    'ALLEN',
                    'WOODSON',
                    'LYON',
                    'MORRIS',
                    'COFFEY',
                    'MARION',
                    'BUTLER',
                    'CHASE',
                    'GREENWOOD',
                    'CLOUD',
                    'REPUBLIC',
                    'SMITH',
                    'WASHINGTON',
                    'JEWELL',
                    'SEDGWICK',
                    'HARPER',
                    'SUMNER',
                    'COWLEY',
                    'HARVEY',
                    'PRATT',
                    'CHAUTAUQUA',
                    'COMANCHE',
                    'KINGMAN',
                    'KIOWA',
                    'BARBER',
                    'MCPHERSON',
                    'MONTGOMERY',
                    'LABETTE',
                    'ELK',
                    'SALINE',
                    'DICKINSON',
                    'LINCOLN',
                    'MITCHELL',
                    'OTTAWA',
                    'RICE',
                    'CLAY',
                    'OSBORNE',
                    'ELLSWORTH',
                    'RENO',
                    'BARTON',
                    'RUSH',
                    'NESS',
                    'EDWARDS',
                    'PAWNEE',
                    'STAFFORD',
                    'ELLIS',
                    'PHILLIPS',
                    'NORTON',
                    'GRAHAM',
                    'RUSSELL',
                    'TREGO',
                    'ROOKS',
                    'DECATUR',
                    'THOMAS',
                    'RAWLINS',
                    'CHEYENNE',
                    'SHERMAN',
                    'GOVE',
                    'SHERIDAN',
                    'LOGAN',
                    'WALLACE',
                    'FORD',
                    'CLARK',
                    'GRAY',
                    'HAMILTON',
                    'KEARNY',
                    'LANE',
                    'MEADE',
                    'FINNEY',
                    'HODGEMAN',
                    'STANTON',
                    'SEWARD',
                    'WICHITA',
                    'HASKELL',
                    'SCOTT',
                    'GREELEY',
                    'GRANT',
                    'MORTON',
                    'STEVENS'
                ],
                NE: [
                    'BUTLER',
                    'WASHINGTON',
                    'SAUNDERS',
                    'CUMING',
                    'SARPY',
                    'DOUGLAS',
                    'CASS',
                    'BURT',
                    'DODGE',
                    'DAKOTA',
                    'THURSTON',
                    'GAGE',
                    'THAYER',
                    'NEMAHA',
                    'SEWARD',
                    'YORK',
                    'LANCASTER',
                    'PAWNEE',
                    'OTOE',
                    'JOHNSON',
                    'SALINE',
                    'RICHARDSON',
                    'JEFFERSON',
                    'FILLMORE',
                    'CLAY',
                    'PLATTE',
                    'BOONE',
                    'WHEELER',
                    'NANCE',
                    'MERRICK',
                    'COLFAX',
                    'ANTELOPE',
                    'POLK',
                    'GREELEY',
                    'MADISON',
                    'DIXON',
                    'HOLT',
                    'ROCK',
                    'CEDAR',
                    'KNOX',
                    'BOYD',
                    'WAYNE',
                    'PIERCE',
                    'KEYA PAHA',
                    'STANTON',
                    'HALL',
                    'BUFFALO',
                    'CUSTER',
                    'VALLEY',
                    'SHERMAN',
                    'HAMILTON',
                    'HOWARD',
                    'BLAINE',
                    'GARFIELD',
                    'DAWSON',
                    'LOUP',
                    'ADAMS',
                    'HARLAN',
                    'FURNAS',
                    'PHELPS',
                    'KEARNEY',
                    'WEBSTER',
                    'FRANKLIN',
                    'GOSPER',
                    'NUCKOLLS',
                    'RED WILLOW',
                    'DUNDY',
                    'CHASE',
                    'HITCHCOCK',
                    'FRONTIER',
                    'HAYES',
                    'LINCOLN',
                    'ARTHUR',
                    'DEUEL',
                    'MORRILL',
                    'KEITH',
                    'KIMBALL',
                    'CHEYENNE',
                    'PERKINS',
                    'CHERRY',
                    'THOMAS',
                    'GARDEN',
                    'HOOKER',
                    'LOGAN',
                    'MCPHERSON',
                    'BROWN',
                    'BOX BUTTE',
                    'GRANT',
                    'SHERIDAN',
                    'DAWES',
                    'SCOTTS BLUFF',
                    'BANNER',
                    'SIOUX'
                ],
                LA: [
                    'JEFFERSON',
                    'SAINT CHARLES',
                    'SAINT BERNARD',
                    'PLAQUEMINES',
                    'ST JOHN THE BAPTIST',
                    'SAINT JAMES',
                    'ORLEANS',
                    'LAFOURCHE',
                    'ASSUMPTION',
                    'SAINT MARY',
                    'TERREBONNE',
                    'ASCENSION',
                    'TANGIPAHOA',
                    'SAINT TAMMANY',
                    'WASHINGTON',
                    'SAINT HELENA',
                    'LIVINGSTON',
                    'LAFAYETTE',
                    'VERMILION',
                    'SAINT LANDRY',
                    'IBERIA',
                    'EVANGELINE',
                    'ACADIA',
                    'SAINT MARTIN',
                    'JEFFERSON DAVIS',
                    'CALCASIEU',
                    'CAMERON',
                    'BEAUREGARD',
                    'ALLEN',
                    'VERNON',
                    'EAST BATON ROUGE',
                    'WEST BATON ROUGE',
                    'WEST FELICIANA',
                    'POINTE COUPEE',
                    'IBERVILLE',
                    'EAST FELICIANA',
                    'BIENVILLE',
                    'NATCHITOCHES',
                    'CLAIBORNE',
                    'CADDO',
                    'BOSSIER',
                    'WEBSTER',
                    'RED RIVER',
                    'DE SOTO',
                    'SABINE',
                    'OUACHITA',
                    'RICHLAND',
                    'FRANKLIN',
                    'MOREHOUSE',
                    'UNION',
                    'JACKSON',
                    'LINCOLN',
                    'MADISON',
                    'WEST CARROLL',
                    'EAST CARROLL',
                    'RAPIDES',
                    'CONCORDIA',
                    'AVOYELLES',
                    'CATAHOULA',
                    'LA SALLE',
                    'TENSAS',
                    'WINN',
                    'GRANT',
                    'CALDWELL'
                ],
                AR: [
                    'JEFFERSON',
                    'DESHA',
                    'BRADLEY',
                    'ASHLEY',
                    'CHICOT',
                    'LINCOLN',
                    'CLEVELAND',
                    'DREW',
                    'OUACHITA',
                    'CLARK',
                    'NEVADA',
                    'UNION',
                    'DALLAS',
                    'COLUMBIA',
                    'CALHOUN',
                    'HEMPSTEAD',
                    'LITTLE RIVER',
                    'SEVIER',
                    'LAFAYETTE',
                    'HOWARD',
                    'MILLER',
                    'GARLAND',
                    'PIKE',
                    'HOT SPRING',
                    'POLK',
                    'MONTGOMERY',
                    'PERRY',
                    'PULASKI',
                    'ARKANSAS',
                    'JACKSON',
                    'WOODRUFF',
                    'LONOKE',
                    'WHITE',
                    'SALINE',
                    'VAN BUREN',
                    'PRAIRIE',
                    'MONROE',
                    'CONWAY',
                    'FAULKNER',
                    'CLEBURNE',
                    'STONE',
                    'GRANT',
                    'INDEPENDENCE',
                    'CRITTENDEN',
                    'MISSISSIPPI',
                    'LEE',
                    'PHILLIPS',
                    'SAINT FRANCIS',
                    'CROSS',
                    'POINSETT',
                    'CRAIGHEAD',
                    'LAWRENCE',
                    'GREENE',
                    'RANDOLPH',
                    'CLAY',
                    'SHARP',
                    'IZARD',
                    'FULTON',
                    'BAXTER',
                    'BOONE',
                    'CARROLL',
                    'MARION',
                    'NEWTON',
                    'SEARCY',
                    'POPE',
                    'WASHINGTON',
                    'BENTON',
                    'MADISON',
                    'FRANKLIN',
                    'YELL',
                    'LOGAN',
                    'JOHNSON',
                    'SCOTT',
                    'SEBASTIAN',
                    'CRAWFORD'
                ],
                OK: [
                    'CADDO',
                    'GRADY',
                    'OKLAHOMA',
                    'MCCLAIN',
                    'STEPHENS',
                    'CANADIAN',
                    'KINGFISHER',
                    'CLEVELAND',
                    'WASHITA',
                    'LOGAN',
                    'MURRAY',
                    'BLAINE',
                    'KIOWA',
                    'GARVIN',
                    'NOBLE',
                    'CUSTER',
                    'CARTER',
                    'LOVE',
                    'JOHNSTON',
                    'MARSHALL',
                    'BRYAN',
                    'JEFFERSON',
                    'COMANCHE',
                    'JACKSON',
                    'TILLMAN',
                    'COTTON',
                    'HARMON',
                    'GREER',
                    'BECKHAM',
                    'ROGER MILLS',
                    'DEWEY',
                    'GARFIELD',
                    'ALFALFA',
                    'WOODS',
                    'MAJOR',
                    'GRANT',
                    'WOODWARD',
                    'ELLIS',
                    'HARPER',
                    'BEAVER',
                    'TEXAS',
                    'CIMARRON',
                    'OSAGE',
                    'WASHINGTON',
                    'TULSA',
                    'CREEK',
                    'WAGONER',
                    'ROGERS',
                    'PAWNEE',
                    'PAYNE',
                    'LINCOLN',
                    'NOWATA',
                    'CRAIG',
                    'MAYES',
                    'OTTAWA',
                    'DELAWARE',
                    'MUSKOGEE',
                    'OKMULGEE',
                    'PITTSBURG',
                    'MCINTOSH',
                    'CHEROKEE',
                    'SEQUOYAH',
                    'HASKELL',
                    'ADAIR',
                    'PUSHMATAHA',
                    'ATOKA',
                    'HUGHES',
                    'COAL',
                    'LATIMER',
                    'LE FLORE',
                    'KAY',
                    'MCCURTAIN',
                    'CHOCTAW',
                    'POTTAWATOMIE',
                    'SEMINOLE',
                    'PONTOTOC',
                    'OKFUSKEE'
                ],
                TX: [
                    'TRAVIS',
                    'DALLAS',
                    'COLLIN',
                    'DENTON',
                    'GRAYSON',
                    'ROCKWALL',
                    'ELLIS',
                    'NAVARRO',
                    'VAN ZANDT',
                    'KAUFMAN',
                    'HENDERSON',
                    'HUNT',
                    'WOOD',
                    'LAMAR',
                    'RED RIVER',
                    'FANNIN',
                    'DELTA',
                    'HOPKINS',
                    'RAINS',
                    'CAMP',
                    'TITUS',
                    'FRANKLIN',
                    'BOWIE',
                    'CASS',
                    'MARION',
                    'MORRIS',
                    'GREGG',
                    'PANOLA',
                    'UPSHUR',
                    'HARRISON',
                    'RUSK',
                    'SMITH',
                    'CHEROKEE',
                    'NACOGDOCHES',
                    'ANDERSON',
                    'LEON',
                    'TRINITY',
                    'HOUSTON',
                    'FREESTONE',
                    'MADISON',
                    'ANGELINA',
                    'NEWTON',
                    'SAN AUGUSTINE',
                    'SABINE',
                    'POLK',
                    'SHELBY',
                    'TYLER',
                    'JASPER',
                    'TARRANT',
                    'PARKER',
                    'JOHNSON',
                    'WISE',
                    'HOOD',
                    'SOMERVELL',
                    'HILL',
                    'PALO PINTO',
                    'CLAY',
                    'MONTAGUE',
                    'COOKE',
                    'WICHITA',
                    'ARCHER',
                    'KNOX',
                    'WILBARGER',
                    'YOUNG',
                    'BAYLOR',
                    'HASKELL',
                    'ERATH',
                    'STEPHENS',
                    'JACK',
                    'SHACKELFORD',
                    'BROWN',
                    'EASTLAND',
                    'HAMILTON',
                    'COMANCHE',
                    'CALLAHAN',
                    'THROCKMORTON',
                    'BELL',
                    'MILAM',
                    'CORYELL',
                    'MCLENNAN',
                    'WILLIAMSON',
                    'LAMPASAS',
                    'FALLS',
                    'ROBERTSON',
                    'BOSQUE',
                    'LIMESTONE',
                    'MASON',
                    'RUNNELS',
                    'MCCULLOCH',
                    'COLEMAN',
                    'LLANO',
                    'SAN SABA',
                    'CONCHO',
                    'MENARD',
                    'MILLS',
                    'KIMBLE',
                    'EDWARDS',
                    'TOM GREEN',
                    'IRION',
                    'REAGAN',
                    'COKE',
                    'SCHLEICHER',
                    'CROCKETT',
                    'SUTTON',
                    'STERLING',
                    'HARRIS',
                    'MONTGOMERY',
                    'WALKER',
                    'LIBERTY',
                    'SAN JACINTO',
                    'GRIMES',
                    'HARDIN',
                    'MATAGORDA',
                    'FORT BEND',
                    'COLORADO',
                    'AUSTIN',
                    'WHARTON',
                    'BRAZORIA',
                    'WALLER',
                    'WASHINGTON',
                    'GALVESTON',
                    'CHAMBERS',
                    'ORANGE',
                    'JEFFERSON',
                    'BRAZOS',
                    'BURLESON',
                    'LEE',
                    'VICTORIA',
                    'REFUGIO',
                    'DE WITT',
                    'JACKSON',
                    'GOLIAD',
                    'LAVACA',
                    'CALHOUN',
                    'LA SALLE',
                    'BEXAR',
                    'BANDERA',
                    'KENDALL',
                    'FRIO',
                    'MCMULLEN',
                    'ATASCOSA',
                    'MEDINA',
                    'KERR',
                    'LIVE OAK',
                    'WEBB',
                    'ZAPATA',
                    'COMAL',
                    'BEE',
                    'GUADALUPE',
                    'KARNES',
                    'WILSON',
                    'GONZALES',
                    'NUECES',
                    'JIM WELLS',
                    'SAN PATRICIO',
                    'KENEDY',
                    'DUVAL',
                    'BROOKS',
                    'ARANSAS',
                    'JIM HOGG',
                    'KLEBERG',
                    'HIDALGO',
                    'CAMERON',
                    'STARR',
                    'WILLACY',
                    'BASTROP',
                    'BURNET',
                    'BLANCO',
                    'HAYS',
                    'CALDWELL',
                    'GILLESPIE',
                    'UVALDE',
                    'DIMMIT',
                    'ZAVALA',
                    'KINNEY',
                    'REAL',
                    'VAL VERDE',
                    'TERRELL',
                    'MAVERICK',
                    'FAYETTE',
                    'OLDHAM',
                    'GRAY',
                    'WHEELER',
                    'LIPSCOMB',
                    'HUTCHINSON',
                    'PARMER',
                    'POTTER',
                    'MOORE',
                    'HEMPHILL',
                    'RANDALL',
                    'HARTLEY',
                    'ARMSTRONG',
                    'HALE',
                    'DALLAM',
                    'DEAF SMITH',
                    'CASTRO',
                    'LAMB',
                    'OCHILTREE',
                    'CARSON',
                    'HANSFORD',
                    'SWISHER',
                    'ROBERTS',
                    'COLLINGSWORTH',
                    'SHERMAN',
                    'CHILDRESS',
                    'DICKENS',
                    'FLOYD',
                    'COTTLE',
                    'HARDEMAN',
                    'DONLEY',
                    'FOARD',
                    'HALL',
                    'MOTLEY',
                    'KING',
                    'BRISCOE',
                    'HOCKLEY',
                    'COCHRAN',
                    'TERRY',
                    'BAILEY',
                    'CROSBY',
                    'YOAKUM',
                    'LUBBOCK',
                    'GARZA',
                    'DAWSON',
                    'GAINES',
                    'LYNN',
                    'JONES',
                    'STONEWALL',
                    'NOLAN',
                    'TAYLOR',
                    'HOWARD',
                    'MITCHELL',
                    'SCURRY',
                    'KENT',
                    'FISHER',
                    'MIDLAND',
                    'ANDREWS',
                    'REEVES',
                    'WARD',
                    'PECOS',
                    'CRANE',
                    'JEFF DAVIS',
                    'BORDEN',
                    'GLASSCOCK',
                    'ECTOR',
                    'WINKLER',
                    'MARTIN',
                    'UPTON',
                    'LOVING',
                    'EL PASO',
                    'BREWSTER',
                    'HUDSPETH',
                    'PRESIDIO',
                    'CULBERSON'
                ],
                CO: [
                    'JEFFERSON',
                    'ARAPAHOE',
                    'ADAMS',
                    'BOULDER',
                    'ELBERT',
                    'DOUGLAS',
                    'DENVER',
                    'EL PASO',
                    'PARK',
                    'GILPIN',
                    'EAGLE',
                    'SUMMIT',
                    'ROUTT',
                    'LAKE',
                    'JACKSON',
                    'CLEAR CREEK',
                    'GRAND',
                    'WELD',
                    'LARIMER',
                    'MORGAN',
                    'WASHINGTON',
                    'PHILLIPS',
                    'LOGAN',
                    'YUMA',
                    'SEDGWICK',
                    'CHEYENNE',
                    'LINCOLN',
                    'KIT CARSON',
                    'TELLER',
                    'MOHAVE',
                    'PUEBLO',
                    'LAS ANIMAS',
                    'KIOWA',
                    'BACA',
                    'OTERO',
                    'CROWLEY',
                    'BENT',
                    'HUERFANO',
                    'PROWERS',
                    'ALAMOSA',
                    'CONEJOS',
                    'ARCHULETA',
                    'LA PLATA',
                    'COSTILLA',
                    'SAGUACHE',
                    'MINERAL',
                    'RIO GRANDE',
                    'CHAFFEE',
                    'GUNNISON',
                    'FREMONT',
                    'MONTROSE',
                    'HINSDALE',
                    'CUSTER',
                    'DOLORES',
                    'MONTEZUMA',
                    'SAN MIGUEL',
                    'DELTA',
                    'OURAY',
                    'SAN JUAN',
                    'MESA',
                    'GARFIELD',
                    'MOFFAT',
                    'PITKIN',
                    'RIO BLANCO'
                ],
                WY: [
                    'LARAMIE',
                    'ALBANY',
                    'PARK',
                    'PLATTE',
                    'GOSHEN',
                    'NIOBRARA',
                    'CONVERSE',
                    'CARBON',
                    'FREMONT',
                    'SWEETWATER',
                    'WASHAKIE',
                    'BIG HORN',
                    'HOT SPRINGS',
                    'NATRONA',
                    'JOHNSON',
                    'WESTON',
                    'CROOK',
                    'CAMPBELL',
                    'SHERIDAN',
                    'SUBLETTE',
                    'UINTA',
                    'TETON',
                    'LINCOLN'
                ],
                ID: [
                    'BANNOCK',
                    'BINGHAM',
                    'POWER',
                    'BUTTE',
                    'CARIBOU',
                    'BEAR LAKE',
                    'CUSTER',
                    'FRANKLIN',
                    'LEMHI',
                    'ONEIDA',
                    'TWIN FALLS',
                    'CASSIA',
                    'BLAINE',
                    'GOODING',
                    'CAMAS',
                    'LINCOLN',
                    'JEROME',
                    'MINIDOKA',
                    'BONNEVILLE',
                    'FREMONT',
                    'TETON',
                    'CLARK',
                    'JEFFERSON',
                    'MADISON',
                    'NEZ PERCE',
                    'CLEARWATER',
                    'IDAHO',
                    'LEWIS',
                    'LATAH',
                    'ELMORE',
                    'BOISE',
                    'OWYHEE',
                    'CANYON',
                    'WASHINGTON',
                    'VALLEY',
                    'ADAMS',
                    'ADA',
                    'GEM',
                    'PAYETTE',
                    'KOOTENAI',
                    'SHOSHONE',
                    'BONNER',
                    'BOUNDARY',
                    'BENEWAH'
                ],
                AZ: [
                    'MARICOPA',
                    'PINAL',
                    'GILA',
                    'PIMA',
                    'YAVAPAI',
                    'LA PAZ',
                    'YUMA',
                    'MOHAVE',
                    'GRAHAM',
                    'GREENLEE',
                    'COCHISE',
                    'SANTA CRUZ',
                    'NAVAJO',
                    'APACHE',
                    'COCONINO'
                ],
                NM: [
                    'SANDOVAL',
                    'VALENCIA',
                    'CIBOLA',
                    'BERNALILLO',
                    'TORRANCE',
                    'SANTA FE',
                    'SOCORRO',
                    'RIO ARRIBA',
                    'SAN JUAN',
                    'MCKINLEY',
                    'TAOS',
                    'SAN MIGUEL',
                    'LOS ALAMOS',
                    'COLFAX',
                    'GUADALUPE',
                    'MORA',
                    'HARDING',
                    'CATRON',
                    'SIERRA',
                    'DONA ANA',
                    'HIDALGO',
                    'GRANT',
                    'LUNA',
                    'CURRY',
                    'ROOSEVELT',
                    'LEA',
                    'DE BACA',
                    'QUAY',
                    'CHAVES',
                    'EDDY',
                    'LINCOLN',
                    'OTERO',
                    'UNION'
                ],
                NV: [
                    'CLARK',
                    'LINCOLN',
                    'NYE',
                    'ESMERALDA',
                    'WHITE PINE',
                    'LANDER',
                    'EUREKA',
                    'WASHOE',
                    'LYON',
                    'HUMBOLDT',
                    'CHURCHILL',
                    'DOUGLAS',
                    'MINERAL',
                    'PERSHING',
                    'STOREY',
                    'CARSON CITY',
                    'ELKO'
                ],
                CA: [
                    'LOS ANGELES',
                    'ORANGE',
                    'VENTURA',
                    'SAN BERNARDINO',
                    'RIVERSIDE',
                    'SAN DIEGO',
                    'IMPERIAL',
                    'INYO',
                    'SANTA BARBARA',
                    'TULARE',
                    'KINGS',
                    'KERN',
                    'FRESNO',
                    'SAN LUIS OBISPO',
                    'MONTEREY',
                    'MONO',
                    'MADERA',
                    'MERCED',
                    'MARIPOSA',
                    'SAN MATEO',
                    'SANTA CLARA',
                    'SAN FRANCISCO',
                    'SACRAMENTO',
                    'ALAMEDA',
                    'NAPA',
                    'CONTRA COSTA',
                    'SOLANO',
                    'MARIN',
                    'SONOMA',
                    'SANTA CRUZ',
                    'SAN BENITO',
                    'SAN JOAQUIN',
                    'CALAVERAS',
                    'TUOLUMNE',
                    'STANISLAUS',
                    'MENDOCINO',
                    'LAKE',
                    'HUMBOLDT',
                    'TRINITY',
                    'DEL NORTE',
                    'SISKIYOU',
                    'AMADOR',
                    'PLACER',
                    'YOLO',
                    'EL DORADO',
                    'ALPINE',
                    'SUTTER',
                    'YUBA',
                    'NEVADA',
                    'SIERRA',
                    'COLUSA',
                    'GLENN',
                    'BUTTE',
                    'PLUMAS',
                    'SHASTA',
                    'MODOC',
                    'LASSEN',
                    'TEHAMA'
                ],
                HI: ['HONOLULU', 'KAUAI', 'HAWAII', 'MAUI'],
                AS: ['AMERICAN SAMOA'],
                GU: ['GUAM'],
                PW: ['PALAU'],
                FM: ['FEDERATED STATES OF MICRO'],
                MP: ['NORTHERN MARIANA ISLANDS'],
                MH: ['MARSHALL ISLANDS'],
                OR: [
                    'WASCO',
                    'MARION',
                    'CLACKAMAS',
                    'WASHINGTON',
                    'MULTNOMAH',
                    'HOOD RIVER',
                    'COLUMBIA',
                    'SHERMAN',
                    'YAMHILL',
                    'CLATSOP',
                    'TILLAMOOK',
                    'POLK',
                    'LINN',
                    'BENTON',
                    'LINCOLN',
                    'LANE',
                    'CURRY',
                    'COOS',
                    'DOUGLAS',
                    'KLAMATH',
                    'JOSEPHINE',
                    'JACKSON',
                    'LAKE',
                    'DESCHUTES',
                    'HARNEY',
                    'JEFFERSON',
                    'WHEELER',
                    'CROOK',
                    'UMATILLA',
                    'GILLIAM',
                    'BAKER',
                    'GRANT',
                    'MORROW',
                    'UNION',
                    'WALLOWA',
                    'MALHEUR'
                ],
                WA: [
                    'KING',
                    'SNOHOMISH',
                    'KITSAP',
                    'WHATCOM',
                    'SKAGIT',
                    'SAN JUAN',
                    'ISLAND',
                    'PIERCE',
                    'CLALLAM',
                    'JEFFERSON',
                    'LEWIS',
                    'THURSTON',
                    'GRAYS HARBOR',
                    'MASON',
                    'PACIFIC',
                    'COWLITZ',
                    'CLARK',
                    'KLICKITAT',
                    'SKAMANIA',
                    'WAHKIAKUM',
                    'CHELAN',
                    'DOUGLAS',
                    'OKANOGAN',
                    'GRANT',
                    'YAKIMA',
                    'KITTITAS',
                    'SPOKANE',
                    'LINCOLN',
                    'STEVENS',
                    'WHITMAN',
                    'ADAMS',
                    'FERRY',
                    'PEND OREILLE',
                    'FRANKLIN',
                    'BENTON',
                    'WALLA WALLA',
                    'COLUMBIA',
                    'GARFIELD',
                    'ASOTIN'
                ],
                AK: [
                    'ANCHORAGE',
                    'BETHEL',
                    'ALEUTIANS WEST',
                    'LAKE AND PENINSULA',
                    'KODIAK ISLAND',
                    'ALEUTIANS EAST',
                    'WADE HAMPTON',
                    'DILLINGHAM',
                    'KENAI PENINSULA',
                    'YUKON KOYUKUK',
                    'VALDEZ CORDOVA',
                    'MATANUSKA SUSITNA',
                    'BRISTOL BAY',
                    'NOME',
                    'YAKUTAT',
                    'FAIRBANKS NORTH STAR',
                    'DENALI',
                    'NORTH SLOPE',
                    'NORTHWEST ARCTIC',
                    'SOUTHEAST FAIRBANKS',
                    'JUNEAU',
                    'SKAGWAY HOONAH ANGOON',
                    'HAINES',
                    'WRANGELL PETERSBURG',
                    'SITKA',
                    'KETCHIKAN GATEWAY',
                    'PRINCE WALES KETCHIKAN'
                ]
            })
    },
    function (t, e, n) {
        'use strict'
        n.r(e)
        var A = n(0)
        function E (t, e) {
            var n = Object.keys(t)
            if (Object.getOwnPropertySymbols) {
                var A = Object.getOwnPropertySymbols(t)
                e &&
                    (A = A.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })),
                    n.push.apply(n, A)
            }
            return n
        }
        function r (t, e, n) {
            return (
                e in t
                    ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (t[e] = n),
                t
            )
        }
        e.default = function (t) {
            t = n(1).merge(t)
            var e = n(68).default(t),
                a = e.paymentDetails.map(function (t) {
                    return {
                        interest_rate: t.interestRate,
                        new_payment: Object(A.c)(t.newPayment),
                        monthly_savings: Object(A.c)(t.monthlySavings),
                        total_savings: Object(A.c)(t.totalSavings),
                        annual_savings: Object(A.c)(t.annualSavings),
                        payments_at_rate: t.paymentsAtRate
                    }
                }),
                O = Object(A.c)(e.totalBuydownCost)
            return (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {}
                    e % 2
                        ? E(Object(n), !0).forEach(function (e) {
                              r(t, e, n[e])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(n)
                          )
                        : E(Object(n)).forEach(function (e) {
                              Object.defineProperty(
                                  t,
                                  e,
                                  Object.getOwnPropertyDescriptor(n, e)
                              )
                          })
                }
                return t
            })(
                {
                    original_payment: Object(A.c)(e.originalPayment),
                    base_buydown_cost: O,
                    payment_details: a
                },
                t
            )
        }
    },
    function (t, e, n) {
        'use strict'
        function A (t, e) {
            for (var n = 0; n < e.length; n++) {
                var A = e[n]
                ;(A.enumerable = A.enumerable || !1),
                    (A.configurable = !0),
                    'value' in A && (A.writable = !0),
                    Object.defineProperty(t, A.key, A)
            }
        }
        n.r(e)
        var E = (function () {
            function t (e) {
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, t),
                    (this.loanAmount = e.loan_amount),
                    (this.interestRate = e.interest_rate / 100),
                    (this.term = 12 * e.term),
                    (this.buydownType = e.buydown_type)
            }
            var e, n, E
            return (
                (e = t),
                (n = [
                    {
                        key: 'calculateMonthlyPayment',
                        value: function (t) {
                            var e = t / 12
                            return (
                                (this.loanAmount *
                                    (e * Math.pow(1 + e, this.term))) /
                                (Math.pow(1 + e, this.term) - 1)
                            )
                        }
                    },
                    {
                        key: 'result',
                        value: function () {
                            var t = this,
                                e = this.calculateMonthlyPayment(
                                    this.interestRate
                                ),
                                n = [],
                                A = 0
                            return (
                                this.getBuydownSteps().forEach(function (E, r) {
                                    var a = t.interestRate - E.rateReduction,
                                        O = t.calculateMonthlyPayment(a),
                                        N = e - O,
                                        o = N * E.duration,
                                        R = 12 * N
                                    n.push({
                                        interestRate:
                                            (100 * a).toFixed(2) + '%',
                                        newPayment: O.toFixed(2),
                                        monthlySavings: N.toFixed(2),
                                        totalSavings: o.toFixed(2),
                                        annualSavings: R.toFixed(2),
                                        paymentsAtRate: E.duration
                                    }),
                                        (A += o)
                                }),
                                {
                                    originalPayment: e.toFixed(2),
                                    paymentDetails: n,
                                    totalBuydownCost: A.toFixed(2)
                                }
                            )
                        }
                    },
                    {
                        key: 'getBuydownSteps',
                        value: function () {
                            return (
                                {
                                    '3_2_1': [
                                        { rateReduction: 0.03, duration: 12 },
                                        { rateReduction: 0.02, duration: 12 },
                                        { rateReduction: 0.01, duration: 12 }
                                    ],
                                    '2_1': [
                                        { rateReduction: 0.02, duration: 12 },
                                        { rateReduction: 0.01, duration: 12 }
                                    ],
                                    '1_1': [
                                        { rateReduction: 0.01, duration: 12 },
                                        { rateReduction: 0.01, duration: 12 }
                                    ],
                                    '1_0': [
                                        { rateReduction: 0.01, duration: 12 }
                                    ]
                                }[this.buydownType] || []
                            )
                        }
                    }
                ]) && A(e.prototype, n),
                E && A(e, E),
                t
            )
        })()
        e.default = function (t) {
            return new E(t).result()
        }
    }
])
