/**
 * NAUFAL SHOLAHUDDIN - PORTFOLIO SCRIPTS
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
    } else {
      $('#themeIcon').removeClass('bi-sun-fill text-warning').addClass('bi-moon-stars-fill');
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
      // Collapse navbar on mobile after click
      $('.navbar-collapse').collapse('hide');
    }
  });

  // 5. Project Filtering
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

  // 6. Project Modal Details
  const projectDetails = {
    'exsys': {
      title: 'Psikotes Web Online - Exsys',
      client: 'PT. Medion (Internal Enterprise System)',
      role: '.NET Technical Consultant & Developer',
      period: 'Jun 2026 – Aug 2026',
      badge: '.NET 10 & Dapper',
      description: 'A high-performance online psychological testing system designed for PT Medion internal recruitment workflow. Handles automated multi-test assessments, candidate examination workflows, and psychogram evaluation with high efficiency.',
      contributions: [
        'Designed and implemented end-to-end architecture using .NET 10 MVC, Dapper ORM, and SQL Server.',
        'Engineered real-time candidate examination monitoring to observe live test progress and eliminate candidate test cheating.',
        'Created automated comprehensive psychogram report generation, reducing HR manual assessment workload significantly.',
        'Optimized data access and complex SQL Stored Procedures to handle simultaneous test sessions with low latency.'
      ],
      stack: ['.NET 10 MVC', 'Dapper', 'SQL Server', 'Stored Procedures', 'Bootstrap 5', 'jQuery', 'Clean Architecture'],
      repo: 'https://github.com/naufalsho/MedionExam'
    },
    'tractor': {
      title: 'Unit Tractor Comparison & Yard Management System (YMS)',
      client: 'PT. Traktor Nusantara',
      role: '.NET Developer',
      period: 'Aug 2024 – Aug 2025',
      badge: '.NET 7 Core MVC',
      description: 'Comprehensive heavy equipment and unit tractor comparison web application coupled with yard tracking capabilities to support operational workflows and technical sales comparison.',
      contributions: [
        'Refactored ~70% of legacy application code to drastically improve response times, clean code standards, and long-term maintainability.',
        'Engineered new business logic algorithms for multi-parameter unit tractor specification comparison.',
        'Integrated OCR engine using Tesseract to automatically extract structured data from PDF spec sheets into JSON payloads for API consumption.',
        'Contributed to cross-platform module integration using .NET Core MVC and Flutter mobile apps.'
      ],
      stack: ['.NET 7 Core MVC', 'Entity Framework Core', 'SQL Server', 'Tesseract OCR', 'JavaScript', 'Bootstrap', 'Flutter'],
      repo: 'https://github.com/naufalsho/AED-1'
    },
    'dqcustomer': {
      title: 'DQ Customer Master System',
      client: 'PT. Berca Hardayaperkasa',
      role: 'Backend .NET Developer',
      period: '2024',
      badge: '.NET 6 Web API & Dapper',
      description: 'High-performance centralized customer master data backend system designed for managing high-volume enterprise customer records and cross-service data consistency.',
      contributions: [
        'Architected and implemented scalable RESTful APIs utilizing .NET 6 Web API with N-Layered Architecture.',
        'Integrated Dapper ORM with highly optimized SQL Server Stored Procedures for high-volume transactions.',
        'Ensured seamless API integration with modern React-based frontend client systems.',
        'Enforced strict data validation, error handling middleware, and repository pattern best practices.'
      ],
      stack: ['.NET 6 Web API', 'Dapper', 'SQL Server', 'Stored Procedures', 'N-Layered Architecture', 'RESTful API', 'React Integration'],
      repo: 'https://github.com/naufalsho/DQCustomerBackEnd'
    },
    'psychotest': {
      title: 'Psycho-Test Web App (RAS-Psychotest)',
      client: 'PT. Berca Hardayaperkasa',
      role: 'Full Stack .NET Developer',
      period: '2023 – 2024 (1 Year)',
      badge: 'Full Stack .NET 6 & Razor',
      description: 'An enterprise-scale psychological testing platform built from scratch to automate candidate screening across 5 major test batteries and generate psychogram evaluations.',
      contributions: [
        'Covered complete SDLC from requirement gathering with HR stakeholders, architecture design, development, Katalon testing, to IIS deployment.',
        'Programmed assessment scoring engine for DISC, RIMB, PAPI Kostick, MSDT, and IST assessment batteries.',
        'Implemented psychogram reporting engine integrating complex business rules and Excel Macro generation.',
        'Secured application with JWT token authentication and role-based permissions.'
      ],
      stack: ['.NET 6 MVC', 'Web API', 'EF Core', 'Razor Pages', 'SQL Server', 'JWT Auth', 'jQuery', 'Bootstrap', 'Katalon QA'],
      repo: 'https://github.com/naufalsho/RAS-Psychotest-Berca'
    },
    'refreshflow': {
      title: 'JWT Refresh Token Flow Architecture MVP',
      client: 'Open Source / Architecture Prototype',
      role: 'Lead Architect & Developer',
      period: '2025',
      badge: '.NET 8 + React TS',
      description: 'Production-ready reference architecture showcasing secure JWT access token and rotating refresh token implementation between .NET 8 Web API and a React (TypeScript) frontend.',
      contributions: [
        'Implemented secure cookie-based refresh token handling with token rotation to prevent replay attacks.',
        'Structured clean repository pattern and dependency injection in .NET 8.',
        'Built full React TypeScript client demonstration with automatic token silent-refresh Axios interceptors.'
      ],
      stack: ['.NET 8 Web API', 'React (TypeScript)', 'JWT Auth', 'Silent Refresh', 'Axios Interceptors', 'Clean Code'],
      repo: 'https://github.com/naufalsho/refresh-flow-mvp-reactandnet'
    },
    'aedmobile': {
      title: 'AED Mobile - Yard & Field Operations App',
      client: 'PT. Traktor Nusantara Ecosystem',
      role: 'Mobile & API Developer',
      period: '2025',
      badge: 'Flutter & Dart',
      description: 'Cross-platform mobile companion app built with Flutter for on-field yard tracking, inspection checklists, and mobile data collection directly synced to .NET backend APIs.',
      contributions: [
        'Built responsive mobile screens using Flutter & Dart following clean state management patterns.',
        'Connected real-time REST API synchronization with .NET Core backend services.',
        'Handled offline inspection data caching and background upload sync.'
      ],
      stack: ['Flutter', 'Dart', 'REST API', '.NET Core Backend', 'Mobile UI/UX', 'JSON Serialization'],
      repo: 'https://github.com/naufalsho/aed_mobile_v01'
    },
    'ahpskripsi': {
      title: 'Decision Support System (AHP Method) - UNINDRA',
      client: 'Universitas Indraprasta PGRI (Thesis Project)',
      role: 'Full Stack Developer & Researcher',
      period: '2022',
      badge: 'Analytical Hierarchy Process',
      description: 'Decision Support System (DSS) developed for part-time employee recruitment ranking based on multi-criteria weighting using the Analytical Hierarchy Process (AHP).',
      contributions: [
        'Modeled pairwise comparison matrix and consistency ratio calculation algorithm.',
        'Engineered responsive web UI with automated candidate ranking and scoring export.',
        'Completed with academic distinction (GPA 3.38 / 4.00).'
      ],
      stack: ['AHP Algorithm', 'Decision Support System', 'Web Development', 'SQL Database', 'Statistics'],
      repo: 'https://github.com/naufalsho/SPK_Penerimaan_Karyawan_Paruh_Waktu_Metode_Analytical_Hierarchy_Process_AHP-Skripsi'
    }
  };

  $('.btn-view-detail').on('click', function () {
    const projId = $(this).data('project');
    const data = projectDetails[projId];

    if (!data) return;

    $('#modalProjTitle').text(data.title);
    $('#modalProjClient').text(data.client);
    $('#modalProjPeriod').text(data.period);
    $('#modalProjBadge').text(data.badge);
    $('#modalProjDesc').text(data.description);

    // List contributions
    const $contribList = $('#modalProjContribs');
    $contribList.empty();
    data.contributions.forEach(function (c) {
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
      // Fallback
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
