// Interactive button text + color change
const colorTextBtn = document.getElementById('colorTextBtn');
const btnStatus = document.getElementById('btnStatus');
let clicked = false;

colorTextBtn.addEventListener('click', () => {
  clicked = !clicked;
  if (clicked) {
    colorTextBtn.textContent = "Clicked! Safari Awaits 🐘";
    colorTextBtn.style.backgroundColor = "#4caf50";
    colorTextBtn.classList.add('animated');
    btnStatus.textContent = "Button was clicked!";
  } else {
    colorTextBtn.textContent = "Click me to change text & color";
    colorTextBtn.style.backgroundColor = "#ff9800";
    colorTextBtn.classList.remove('animated');
    btnStatus.textContent = "Button not clicked yet.";
  }
});

// Secret double-click action (toggle button text)
colorTextBtn.addEventListener('dblclick', () => {
  alert("🌟 Secret double-click detected! 🌟");
});

// Detect long press (800ms)
let pressTimer;
colorTextBtn.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    alert("🤫 Secret long press action unlocked!");
  }, 800);
});
colorTextBtn.addEventListener('mouseup', () => clearTimeout(pressTimer));
colorTextBtn.addEventListener('mouseleave', () => clearTimeout(pressTimer));

// Hover effect on gallery images + click to swap large image
const galleryImgs = document.querySelectorAll('#gallery img');
const largeImage = document.getElementById('large-image');

galleryImgs.forEach(img => {
  img.addEventListener('click', () => {
    galleryImgs.forEach(i => i.classList.remove('selected'));
    img.classList.add('selected');
    largeImage.src = img.src.replace('w=400', 'w=800');
    largeImage.alt = img.alt;
  });
});

// Tabs functionality
const tabs = document.querySelectorAll('.tab');
const tabContent = document.getElementById('tab-content');

const tabData = {
  1: "Welcome to our Safari Adventures! Explore the wild with expert guides.",
  2: "Our tours include Maasai Mara, Amboseli, and Lake Nakuru - experience the best safaris with us.",
  3: "Contact us at info@safariadventures.com or call +123 456 7890."
};

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const tabId = tab.getAttribute('data-tab');
    tabContent.innerHTML = `<p>${tabData[tabId]}</p>`;
  });
});

// Form validation with real-time feedback
const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

function validateEmail(email) {
  // Simple email regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

emailInput.addEventListener('input', () => {
  if (!emailInput.value) {
    emailError.textContent = "Email is required.";
  } else if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
  } else {
    emailError.textContent = "";
  }
});

passwordInput.addEventListener('input', () => {
  if (!passwordInput.value) {
    passwordError.textContent = "Password is required.";
  } else if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
  } else {
    passwordError.textContent = "";
  }
});

