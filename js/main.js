/**
 * KINETIC FITNESS - INTERACTIVE ENGINE
 * Modern B2C Fitness Landing Page JS
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar Effect & Active State
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile Menu Toggle
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });
  }

  // Close mobile menu when clicking nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('mobile-active')) {
        navMenu.classList.remove('mobile-active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      }
    });
  });

  // 2. Interactive BMI & Training Path Calculator
  const calcHeight = document.getElementById('calc-height');
  const calcWeight = document.getElementById('calc-weight');
  const calcAge = document.getElementById('calc-age');
  const goalRadios = document.querySelectorAll('input[name="fitness-goal"]');
  const btnCalculate = document.getElementById('btn-calculate');

  const bmiValEl = document.getElementById('bmi-value');
  const bmiStatusEl = document.getElementById('bmi-status');
  const bmiAdviceEl = document.getElementById('bmi-advice');
  const recProgNameEl = document.getElementById('rec-prog-name');
  const recProgIntensityEl = document.getElementById('rec-prog-intensity');

  function calculateFitnessPath() {
    const heightCm = parseFloat(calcHeight?.value) || 172;
    const weightKg = parseFloat(calcWeight?.value) || 68;
    const heightM = heightCm / 100;
    
    if (heightM <= 0 || weightKg <= 0) return;

    const bmi = (weightKg / (heightM * heightM)).toFixed(1);
    
    // Determine selected goal
    let selectedGoal = 'muscle';
    goalRadios.forEach(r => {
      if (r.checked) selectedGoal = r.value;
    });

    // Update UI elements
    if (bmiValEl) bmiValEl.textContent = bmi;

    let status = 'Bình thường (Lý tưởng)';
    let advice = 'Chỉ số cơ thể chuẩn! Phù hợp tăng cơ săn chắc và nâng cao hiệu suất vận động.';
    let progName = 'Hypertrophy Muscle & Strength';
    let intensity = 'Cường độ: 4 - 5 buổi/tuần • Thời lượng: 60 - 75 phút';

    if (bmi < 18.5) {
      status = 'Thiếu cân (Cần tăng khối cơ)';
      advice = 'Tập trung dinh dưỡng thặng dư calo lành mạnh kết hợp giáo án tăng khối lượng cơ bắp chuyên sâu.';
      progName = 'Lean Muscle & Hypertrophy Max';
      intensity = 'Cường độ: 3 - 4 buổi/tuần • Tập trung tạ nặng';
    } else if (bmi >= 25.0 && bmi < 30.0) {
      status = 'Thừa cân nhẹ (Cần đốt mỡ)';
      advice = 'Phù hợp phác đồ kết hợp rèn luyện sức mạnh và cardio ngắt quãng cường độ cao (HIIT).';
      progName = 'Athletic Conditioning & HIIT Burn';
      intensity = 'Cường độ: 4 buổi/tuần • Đốt mỡ tối đa';
    } else if (bmi >= 30.0) {
      status = 'Béo phì (Cần HLV 1-kèm-1)';
      advice = 'Nên có sự giám sát của HLV cá nhân để bảo vệ khớp xương và thiết lập thâm hụt calo an toàn.';
      progName = '1-on-1 Personalized Coaching';
      intensity = 'Cường độ: 3 - 5 buổi/tuần • Có kèm dinh dưỡng';
    }

    // Adjust according to goal
    if (selectedGoal === 'fatloss') {
      progName = 'HIIT & Metabolic Conditioning';
      intensity = 'Cường độ cao • Đốt 600 - 800 kcal/buổi';
    } else if (selectedGoal === 'endurance') {
      progName = 'Hybrid Athlete & Mobility Core';
      intensity = 'Cải thiện sức bền, nhịp tim & độ dẻo dai';
    } else if (selectedGoal === 'pt') {
      progName = 'Elite 1-on-1 Personal Trainer';
      intensity = 'Lộ trình độc quyền cá nhân hóa 100%';
    }

    if (bmiStatusEl) bmiStatusEl.textContent = status;
    if (bmiAdviceEl) bmiAdviceEl.textContent = advice;
    if (recProgNameEl) recProgNameEl.textContent = progName;
    if (recProgIntensityEl) recProgIntensityEl.textContent = intensity;
  }

  if (btnCalculate) {
    btnCalculate.addEventListener('click', (e) => {
      e.preventDefault();
      calculateFitnessPath();
      showToast('Đã phân tích thể trạng & tạo lộ trình gợi ý!');
    });
  }

  // 3. Pricing Period Toggle (Monthly vs Yearly)
  const toggleSwitch = document.getElementById('pricing-toggle');
  const labelMonthly = document.getElementById('label-monthly');
  const labelYearly = document.getElementById('label-yearly');
  const priceValues = document.querySelectorAll('.price-val');
  const periodValues = document.querySelectorAll('.price-period');

  const pricingData = {
    monthly: [
      { price: '599.000', period: '/tháng' },
      { price: '1.299.000', period: '/tháng' },
      { price: '2.499.000', period: '/tháng' }
    ],
    yearly: [
      { price: '479.000', period: '/tháng (Tiết kiệm 20%)' },
      { price: '1.039.000', period: '/tháng (Tiết kiệm 20%)' },
      { price: '1.999.000', period: '/tháng (Tiết kiệm 20%)' }
    ]
  };

  let isYearly = false;

  function updatePricing() {
    const data = isYearly ? pricingData.yearly : pricingData.monthly;
    priceValues.forEach((el, idx) => {
      if (data[idx]) {
        el.style.opacity = '0';
        setTimeout(() => {
          el.textContent = data[idx].price;
          el.style.opacity = '1';
        }, 150);
      }
    });

    periodValues.forEach((el, idx) => {
      if (data[idx]) {
        el.textContent = data[idx].period;
      }
    });

    if (isYearly) {
      toggleSwitch.classList.add('yearly');
      labelYearly.classList.add('active');
      labelMonthly.classList.remove('active');
    } else {
      toggleSwitch.classList.remove('yearly');
      labelMonthly.classList.add('active');
      labelYearly.classList.remove('active');
    }
  }

  if (toggleSwitch) {
    toggleSwitch.addEventListener('click', () => {
      isYearly = !isYearly;
      updatePricing();
    });
  }

  if (labelMonthly) {
    labelMonthly.addEventListener('click', () => {
      isYearly = false;
      updatePricing();
    });
  }

  if (labelYearly) {
    labelYearly.addEventListener('click', () => {
      isYearly = true;
      updatePricing();
    });
  }

  // 4. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 5. Booking Modal & Trainer Selection
  const modalOverlay = document.getElementById('booking-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const trainerSelect = document.getElementById('modal-trainer-select');
  const bookTrainerBtns = document.querySelectorAll('.btn-book-trainer');

  bookTrainerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const trainerName = btn.getAttribute('data-trainer') || 'Bất kỳ HLV phù hợp';
      if (trainerSelect) {
        trainerSelect.value = trainerName;
      }
      if (modalOverlay) {
        modalOverlay.classList.add('active');
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  // 6. Free Pass & Form Submissions with Toast Notice
  const freePassForm = document.getElementById('free-pass-form');
  const modalBookingForm = document.getElementById('modal-booking-form');
  const toast = document.getElementById('toast-notice');
  const toastMsg = document.getElementById('toast-message');

  function showToast(message) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  if (freePassForm) {
    freePassForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = freePassForm.querySelector('input[type="text"]');
      const name = nameInput?.value || 'Bạn';
      showToast(`Chúc mừng ${name}! Đăng ký thẻ tập 7 ngày thành công. Chuyên viên sẽ gọi trong 15 phút!`);
      freePassForm.reset();
    });
  }

  if (modalBookingForm) {
    modalBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modalOverlay.classList.remove('active');
      showToast('Đã đặt lịch hẹn tư vấn cùng HLV thành công!');
      modalBookingForm.reset();
    });
  }

  // Smooth scroll for all anchor tags with #
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
