let currentSlide = 0;
const passwords = ["555", "22"];

function checkPassword() {
    const inputPassword = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    if (passwords.includes(inputPassword)) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("presentation-container").classList.remove("hidden");
    } else {
        errorMessage.textContent = "รหัสผ่านไม่ถูกต้อง!";
        errorMessage.style.color = "red";
    }
}

function nextSlide() {
    let slides = document.querySelectorAll(".slide");
    slides[currentSlide].classList.remove("active");
    currentSlide++;

    if (currentSlide < slides.length) {
        slides[currentSlide].classList.add("active");

        if (currentSlide === slides.length - 1) {
            document.getElementById("next-button").style.display = "none";
            startCountdown();
        }
    } else {
        currentSlide = slides.length - 1;
    }
}

function startCountdown() {
    let countdownElement = document.getElementById("countdown");
    let countdownText = document.getElementById("countdown-text");
    let count = 5;

    let countdownInterval = setInterval(() => {
        count--;
        countdownElement.textContent = count;

        if (count <= 0) {
            clearInterval(countdownInterval);
            document.body.style.background = "black";
            document.getElementById("end-text").style.color = "white";
            countdownText.style.display = "none";
        }
    }, 1000);
}

function toggleDetail(index) {
    let details = document.querySelectorAll(".detail");
    details[index].classList.toggle("hidden");
}

function toggleSubDetail(slideIndex, subIndex) {

    let allSubDetails = document.querySelectorAll(`#slide-${slideIndex} .sub-detail`);
    allSubDetails.forEach(subDetail => subDetail.classList.add("hidden"));
    
    let allListItems = document.querySelectorAll(`#slide-${slideIndex} ul li`);
    allListItems.forEach(listItem => listItem.classList.remove("active"));

    let subDetail = document.getElementById(`sub-${slideIndex}-${subIndex}`);
    subDetail.classList.toggle("hidden");
    
    let listItem = document.querySelectorAll(`#slide-${slideIndex} ul li`)[subIndex];
    listItem.classList.toggle("active");
}

