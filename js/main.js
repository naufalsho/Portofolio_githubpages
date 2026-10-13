/**
 * NAUFAL SHOLAHUDDIN - PORTFOLIO SCRIPTS
 * Driven by verified GitHub Repositories & README specifications
 * Uses jQuery & Bootstrap 5
 */

$(document).ready(function () {
  // 1. Theme Management (Dark / Light)
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  $('#themeToggleBtn').on('click', function () {
    const currentTheme = $('html').attr('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  });

  function applyTheme(theme) {
    $('html').attr('data-theme', theme);
    if (theme === 'light') {
      $('#themeIcon').removeClass('bi-moon-stars-fill').addClass('bi-sun-fill text-warning');
      $('#themeIconMobile').removeClass('bi-moon-stars-fill').addClass('bi-sun-fill text-warning');
    } else {
      $('#themeIcon').removeClass('bi-sun-fill text-warning').addClass('bi-moon-stars-fill');
      $('#themeIconMobile').removeClass('bi-sun-fill text-warning').addClass('bi-moon-stars-fill');
    }
  }

  // 2. Navbar on scroll
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 40) {
      $('#mainNav').addClass('scrolled');
      $('#backToTop').fadeIn();
    } else {
      $('#mainNav').removeClass('scrolled');
      $('#backToTop').fadeOut();
    }
  });

  // 3. Back to Top Click
  $('#backToTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
  });

  // 4. Smooth Nav & Active state tracking
  $('.nav-link-custom').on('click', function (e) {
    const target = $(this).attr('href');
    if (target.startsWith('#')) {
      e.preventDefault();
      const $targetEl = $(target);
      if ($targetEl.length) {
        $('html, body').animate({
          scrollTop: $targetEl.offset().top - 70
        }, 300);
      }
      $('.navbar-collapse').collapse('hide');
    }
  });

  // 5. Project Filtering (Strictly from GitHub Repos)
  $('.filter-btn').on('click', function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    const filterVal = $(this).data('filter');
    if (filterVal === 'all') {
      $('.project-item').fadeIn(250);
    } else {
      $('.project-item').each(function () {
        if ($(this).hasClass(filterVal)) {
          $(this).fadeIn(250);
        } else {
          $(this).fadeOut(150);
        }
      });
    }
  });

  // 6. Project Modal Details (Exact data extracted from each GitHub repository README)
  const projectDetails = {
    'medionexam': {
      title: 'MedionExam (ExSys 3.0) — Enterprise Assessment & Examination Platform',
      repoName: 'naufalsho/MedionExam',
      role: 'Full Stack .NET Developer & Architect',
      badge: '.NET 10 MVC • Dapper 2.1 • C# 13',
      description: 'Enterprise web-based assessment system engineered for large-scale employee recruitment, psychometric testing, and competency evaluations. Orchestrates dynamic multimedia questions, proctored live testing, automated grading, evaluator rubrics, and high-fidelity PDF competency reports.',
      highlights: [
        'Absolute Timestamp Mathematics (Date.now()) delta calculation: eliminates timer drift on iOS/Safari background tab sleep and mobile screen lock.',
        'Zero-Reload SPA Engine & Persistent Media Stream: executes subtest transitions via AJAX Partial Views while holding camera/mic globally (window.globalVideoStream) to eliminate repetitive permission popups.',
        'High-Concurrency Scoring via Raw Parameterized Dapper SQL: achieved sub-millisecond execution times on bulk score aggregations.',
        'Multi-Day Duration Engine: custom duration serializer bypassing SQL Server TIME 23:59:59 ceiling to support 600+ hour test windows.',
        'Asynchronous Background Email Queue (IHostedService EmailQueueWorker) and pixel-perfect PDF reporting via DinkToPdf.'
      ],
      stack: ['.NET 10 MVC', 'C# 13', 'Dapper 2.1', 'SQL Server 2022', 'Bootstrap 5', 'UBold Dashboard', 'jQuery SPA', 'Dragula.js', 'WebcamJS', 'DinkToPdf', 'ClosedXML'],
      repo: 'https://github.com/naufalsho/MedionExam'
    },
    'medist3': {
      title: 'MEDIST 3.0 — Enterprise Distribution & Customer Relation Management',
      repoName: 'naufalsho/Medist_v3.0',
      role: 'Full-Stack Developer (Areas/Mobile — Hublang Request)',
      badge: '.NET 10 MVC • Dapper • Oracle / SQL Server',
      description: 'Enterprise Resource Planning (ERP) dan supply chain distribution system berskala korporat yang mengelola proses operasional secara menyeluruh: logistik pengiriman armada (Shipment Realization), sirkulasi komersial pesanan & plafon kredit, serta digitalisasi permohonan relasi pelanggan (Hublang Request).',
      highlights: [
        'State Machine Circulation Workflow: Merancang alur persetujuan berjenjang 8 slot (Requester, DAM, SA1, AR, RM, SA2, SA3, Final Approval) dengan strict transaction audit log dan kontrol otorisasi.',
        'Asynchronous Concurrent Data Fetching: Mengoptimasi pemuatan form pengajuan 12 tab kompleks via Task.WhenAll di Controller, memangkas latency pemuatan halaman hingga 60-70% tanpa waterfall bottleneck.',
        'Dapper Micro-ORM & Clean SQL Separation: Menyusun 48 query SQL modular terisolasi via SqlLoader untuk eksekusi data access berkinerja tinggi tanpa overhead ORM berat.',
        'Multi-Commodity Business Potential & SFTP Storage: Evaluasi kelayakan kredit calon pelanggan lintas komoditas (Agri, Aqua, Pet, Farm, Shop, OZPS) serta integrasi penyimpanan dokumen SFTP dan PDF generation.'
      ],
      stack: ['.NET 10 MVC', 'C#', 'Dapper micro-ORM', 'SqlLoader', 'Oracle / SQL Server', 'Task.WhenAll Async', 'Bootstrap 5', 'UBold Dashboard', 'jQuery 3.x', 'State Machine', 'SFTP & PDF Generation'],
      repo: 'https://github.com/naufalsho/Medist_v3.0'
    },
    'aedportal': {
      title: 'AED Portal — Machinery Specification, Technical Library & Q&A System',
      repoName: 'naufalsho/AED-1',
      role: 'Full Stack Developer',
      badge: '.NET 6.0 • Dapper + EF Core • SignalR',
      description: 'Enterprise internal web portal supporting technical and commercial operations in heavy machinery (Material Handling & Agribusiness), competitor head-to-head unit comparisons, technical handbooks, and collaborative Q&A ticket consultation.',
      highlights: [
        'N-Tier Clean Architecture with modular separation: Core, Data, Domain, Infrastructure, and WebApp.',
        'Hybrid Data Access: Dapper for high-speed dynamic comparison matrices & EF Core 6 for entity lifecycle and audit logs.',
        'Real-Time Notification Engine built with ASP.NET Core SignalR for live status updates on technical inquiries.',
        'Implement Compatibility Matrix: automated validation of tractor-implement capacity, engine HP, and dimensions.',
        'Hangfire background task processing, secure cookie auth, AES encryption, and in-browser protected PDF document reader.'
      ],
      stack: ['.NET 6.0 MVC', 'C# 10', 'Dapper', 'EF Core 6', 'SignalR', 'SQL Server', 'Bootstrap 5', 'DataTables', 'Select2', 'Hangfire', 'AES Encryption'],
      repo: 'https://github.com/naufalsho/AED-1'
    },
    'msiportal': {
      title: 'MSI Portal — Yard Management System (YMS) & Inbound Logistics',
      repoName: 'naufalsho/MSI-v01',
      role: 'Full Stack Developer (Inbound, Customs & OCR)',
      badge: '.NET 6 MVC • Tesseract OCR • SAP ABAP Batch',
      description: 'Enterprise Yard Management System (YMS) and inbound logistics platform managing heavy equipment inflow, customs clearance automation (import/export), unloading inspection, and yard block placement.',
      highlights: [
        'Cross-departmental collaboration hub connecting Yard Coordinator, Sales, and MSI Customs Clearance department.',
        '8-Stage standardized yard lifecycle tracking with physical Barcode / QR Code scanning per unit.',
        'Automated Optical Character Recognition (OCR) extracting pabean PDF data (BC 1.1, PIB, SPPB, Perkins/AGCO principal invoices).',
        'Enterprise SAP HANA ERP integration via scheduled ABAP batch file synchronization (PO, material, Goods Receipt MIGO).',
        'RPA bot integration for real-time tax/customs rate synchronization and embedded Microsoft Power BI analytical dashboards.'
      ],
      stack: ['ASP.NET Core 6 MVC', 'EF Core', 'SQL Server', 'Tesseract OCR', 'SAP HANA ABAP Batch', 'Power BI Api', 'RPA Automation', 'Bootstrap 5', 'DataTables'],
      repo: 'https://github.com/naufalsho/MSI-v01'
    },
    'dqcustomer': {
      title: 'DQCustomer — Customer Data Quality & Account Governance Service',
      repoName: 'naufalsho/DQCustomerBackEnd',
      role: 'Full Stack Developer (API & Next.js Integration)',
      badge: '.NET Core Web API • Dapper • Next.js & TS',
      description: 'Enterprise Customer Master Data governance, account segmentation, sales opportunity funnel, and billing schedule backend service integrated with a modern Next.js TypeScript frontend.',
      highlights: [
        'Decoupled full-stack architecture serving modern Next.js & TypeScript dashboard with JWT Bearer Token security.',
        'High-performance data access using Dapper ORM with complex SQL Server Stored Procedures and Unit of Work pattern.',
        'Advanced multi-criteria filtering: Named vs. Non-Named Accounts, CAP (Corporate Account Program), PMO, and Blacklist/Hold Shipment.',
        'Automated Account Activity History (Audit Trail) capturing every mutation of customer PICs, office addresses, and relations.',
        'Sales opportunity funnel tracking and automated workflow approval notifications via Stored Procedures.'
      ],
      stack: ['ASP.NET Core Web API', 'Dapper ORM', 'SQL Server', 'Next.js', 'TypeScript', 'JWT Auth', 'Consul Service Discovery', 'N-Layered Arch'],
      repo: 'https://github.com/naufalsho/DQCustomerBackEnd'
    },
    'raspsychotest': {
      title: 'RAS-Psychotest-Berca — Enterprise Psychological Testing Platform',
      repoName: 'naufalsho/RAS-Psychotest-Berca',
      role: 'Lead Full Stack Contributor (340+ commits)',
      badge: '.NET 6 MVC • 5 Test Batteries • ClosedXML',
      description: 'In-house enterprise online psychological testing platform built from scratch for HR & Talent Acquisition PT Berca Hardayaperkasa, replacing recurring third-party vendor SaaS subscriptions.',
      highlights: [
        'Top contributor with 340+ Git commits leading end-to-end architecture, pull requests, and production deployment.',
        'Integrated 5 psychometric test engines: IST (9 cognitive subtests + Age Norms Matrix), DISC (behavior graphs), PAPI Kostick (20 dimensions), MSDT (8 management styles), RMIB (vocational rankings).',
        'Robust exam state management combining sessionStorage and server synchronization preventing data loss on browser refresh.',
        'Automated scoring engine exporting comprehensive HR psychogram reports to Excel via ClosedXML and Bytescout.',
        'Automated email invitations using SQL Server Database Mail with built-in 3x retry transaction mechanism.'
      ],
      stack: ['.NET 6.0 MVC', 'C# 10', 'Dapper & EF Core', 'SQL Server', 'AdminLTE', 'xUnit & Moq', 'ClosedXML', 'Database Mail', 'JWT Auth'],
      repo: 'https://github.com/naufalsho/RAS-Psychotest-Berca'
    },
    'aedmobile': {
      title: 'Traknus AED Mobile — Industrial Equipment & Field Portal App',
      repoName: 'naufalsho/aed_mobile_v01',
      role: 'Mobile & API Developer',
      badge: 'Flutter 3.x • Dart 3.8+ • Provider Pattern',
      description: 'Enterprise cross-platform mobile application providing field engineers, sales teams, and operational staff with role-based access to heavy machinery catalogs, multi-division resources, and offline technical handbooks.',
      highlights: [
        'Clean Layered Architecture with Provider Pattern for state management and separation of concerns.',
        'Role-Based Access Control (RBAC) dynamically parsing user claims to grant access to authorized divisions (MHB, AGCON, POWER).',
        'Hierarchical recursive tree explorer for complex technical service handbooks with adaptive dark/light mode.',
        'Embedded in-app PDF reader (flutter_pdfview) with smart chunk download caching (Dio + path_provider) to save field data bandwidth.',
        'Fault-tolerant network service layer communicating seamlessly with ASP.NET Core backend endpoints.'
      ],
      stack: ['Flutter 3.x', 'Dart 3.8+', 'Provider Pattern', 'Dio & http', 'flutter_pdfview', 'SharedPreferences', 'REST API', 'JSON Serialization'],
      repo: 'https://github.com/naufalsho/aed_mobile_v01'
    },
    'assessmentagit': {
      title: 'Access Request Hub MVP (Assessment Agit)',
      repoName: 'naufalsho/Assessment_Agit',
      role: 'Full Stack .NET Engineer & Architect',
      badge: '.NET 10.0 • Clean Architecture • SQLite',
      description: 'Single source of truth enterprise system for internal application access requests, multi-tier approval workflows, concurrency handling, and immutable audit logs.',
      highlights: [
        'Strict Clean Architecture separating Domain, Application, Infrastructure, Razor UI, and Automated Test Suite.',
        'Zero-dependency embedded relational persistence with SQLite and automatic relational database seeding.',
        'Engineered idempotency controls, race-condition guards, and strict separation of privilege roles.',
        '100% verified test coverage across 7 mandatory assessment business scenarios using xUnit and in-memory SQLite.'
      ],
      stack: ['.NET 10.0', 'ASP.NET Core Razor Pages', 'Clean Architecture', 'SQLite', 'EF Core', 'xUnit Tests', 'Bootstrap 5', 'DataTables', 'SweetAlert2'],
      repo: 'https://github.com/naufalsho/Assessment_Agit'
    },
    'refreshflow': {
      title: 'JWT Refresh Token Flow Architecture MVP',
      repoName: 'naufalsho/refresh-flow-mvp-reactandnet',
      role: 'Security & Backend Architect',
      badge: '.NET 8 Web API • React TS • Token Rotation',
      description: 'Production-ready reference architecture showcasing short-lived JWT access tokens and rotating refresh tokens with HttpOnly cookies, reuse detection, and graceful session termination.',
      highlights: [
        'Dual-token security: 15-minute JWT access token in memory + random 256-bit rotating refresh token stored in HttpOnly, Secure, SameSite=Lax cookie.',
        'Automatic reuse detection: instantly revokes entire token family (FamilyId) and forces re-login upon detecting rotated token replay.',
        'Seamless React TypeScript client with Axios interceptors providing silent background refresh without user interruption.'
      ],
      stack: ['.NET 8 Web API', 'React (TypeScript)', 'ASP.NET Identity', 'JWT Bearer', 'Axios Interceptors', 'HttpOnly Cookies', 'Security Best Practices'],
      repo: 'https://github.com/naufalsho/refresh-flow-mvp-reactandnet'
    },
    'ahpskripsi': {
      title: 'SPK Penerimaan Karyawan Paruh Waktu Metode AHP (Skripsi UNINDRA)',
      repoName: 'naufalsho/SPK_Penerimaan_Karyawan_Paruh_Waktu_Metode_Analytical_Hierarchy_Process_AHP-Skripsi',
      role: 'Researcher & Lead Developer',
      badge: 'Java • AHP Algorithm • MySQL & iReports',
      description: 'Decision Support System (DSS) berbasis kecerdasan buatan turunan untuk seleksi dan penerimaan karyawan paruh waktu menggunakan algoritma Analytical Hierarchy Process (AHP) di Apotek Sanba Jakarta.',
      highlights: [
        'Implementasi matematis matriks perbandingan berpasangan, normalisasi bobot, dan kalkulasi Consistency Ratio (CR <= 0.1).',
        'Penentuan prioritas kriteria dan subkriteria multi-dimensi untuk penilaian objektif pelamar kerja.',
        'Modul pelaporan otomatis berbasis iReports untuk mencetak laporan calon pelamar, bobot kriteria, dan urutan ranking seleksi.'
      ],
      stack: ['Java', 'NetBeans IDE', 'MySQL', 'JDBC', 'iReports', 'AHP Algorithm', 'Decision Support System'],
      repo: 'https://github.com/naufalsho/SPK_Penerimaan_Karyawan_Paruh_Waktu_Metode_Analytical_Hierarchy_Process_AHP-Skripsi'
    },
    'webapireact': {
      title: 'WebAPIWithReact — Web API .NET with React JWT Template',
      repoName: 'naufalsho/WebAPIWithReact',
      role: 'Full Stack Developer',
      badge: '.NET Web API • React • JWT',
      description: 'Starter template dan integrasi autentikasi modern antara backend ASP.NET Core Web API dan client React dengan JWT tokenization.',
      highlights: [
        'Endpoint autentikasi login terstandarisasi dengan token JWT.',
        'Integrasi antarmuka frontend React modern dengan manajemen state pengguna.',
        'Konfigurasi CORS dan middleware penanganan otorisasi berbasis peran.'
      ],
      stack: ['.NET Core Web API', 'React', 'TypeScript', 'JWT Auth', 'SQL Server'],
      repo: 'https://github.com/naufalsho/WebAPIWithReact'
    },
    'sistemakademik': {
      title: 'Sistem Informasi Akademik Sekolah (Java GUI Desktop)',
      repoName: 'naufalsho/Sistem-Akadamik-SD_IslamNurMuria',
      role: 'Desktop Developer',
      badge: 'Java Swing • MySQL • iReports',
      description: 'Aplikasi desktop manajemen akademik sekolah mencakup data siswa, tenaga pengajar, penjadwalan kelas, rekapitulasi nilai, dan pencetakan rapor.',
      highlights: [
        'Antarmuka grafis Java Swing desktop dengan navigasi form terstruktur.',
        'Pengelolaan basis data relasional MySQL menggunakan JDBC driver.',
        'Pencetakan laporan akademik otomatis terintegrasi iReports.'
      ],
      stack: ['Java', 'NetBeans', 'MySQL', 'JDBC', 'iReports'],
      repo: 'https://github.com/naufalsho/Sistem-Akadamik-SD_IslamNurMuria'
    }
  };

  $('.btn-view-detail').on('click', function () {
    const projId = $(this).data('project');
    const data = projectDetails[projId];

    if (!data) return;

    $('#modalProjTitle').text(data.title);
    $('#modalProjClient').text(data.repoName);
    $('#modalProjPeriod').text(data.role);
    $('#modalProjBadge').text(data.badge);
    $('#modalProjDesc').text(data.description);

    // List highlights
    const $contribList = $('#modalProjContribs');
    $contribList.empty();
    data.highlights.forEach(function (c) {
      $contribList.append(`<li><i class="bi bi-check2-circle text-primary me-2"></i><span>${c}</span></li>`);
    });

    // Tech badges
    const $stackList = $('#modalProjStack');
    $stackList.empty();
    data.stack.forEach(function (s) {
      $stackList.append(`<span class="tech-badge highlight">${s}</span>`);
    });

    // Repo link
    if (data.repo) {
      $('#modalProjRepoBtn').attr('href', data.repo).show();
    } else {
      $('#modalProjRepoBtn').hide();
    }

    const modal = new bootstrap.Modal(document.getElementById('projectDetailModal'));
    modal.show();
  });

  // 7. Clipboard Copy Helper
  window.copyToClipboard = function (text, label) {
    navigator.clipboard.writeText(text).then(function () {
      showToast(`Copied ${label} to clipboard!`);
    }).catch(function () {
      const $temp = $('<input>');
      $('body').append($temp);
      $temp.val(text).select();
      document.execCommand('copy');
      $temp.remove();
      showToast(`Copied ${label} to clipboard!`);
    });
  };

  function showToast(message) {
    const $toast = $('#copyToast');
    $('#toastMessage').text(message);
    $toast.addClass('show');
    setTimeout(function () {
      $toast.removeClass('show');
    }, 2500);
  }

  // 8. Contact Form Handling
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    const name = $('#contactName').val().trim();
    const email = $('#contactEmail').val().trim();
    const message = $('#contactMessage').val().trim();
    const method = $('input[name="contactMethod"]:checked').val();

    if (!name || !message) {
      alert('Mohon isi nama dan pesan Anda.');
      return;
    }

    if (method === 'whatsapp') {
      const waText = encodeURIComponent(`Halo Naufal, saya ${name} (${email}).\n\n${message}`);
      window.open(`https://wa.me/6281295927133?text=${waText}`, '_blank');
    } else {
      const mailSubject = encodeURIComponent(`Inquiry from Portfolio: ${name}`);
      const mailBody = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
      window.location.href = `mailto:naufalsholahuddin33@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    }

    showToast('Mengarahkan ke ' + (method === 'whatsapp' ? 'WhatsApp' : 'Email') + '...');
  });
});
