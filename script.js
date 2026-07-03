const tabs = document.querySelectorAll(".tabs span");
const forms = document.querySelectorAll(".form-content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        forms.forEach(f => f.classList.remove("active"));

        tab.classList.add("active");
        forms[index].classList.add("active");

    });
});

function showOtp() {
    document.getElementById("otp-section").style.display = "block";
}