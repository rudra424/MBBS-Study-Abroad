console.log("Welcome To Our Site !")
// form validation script 
const check = () => {
    document.getElementById("mbbsForm").addEventListener("submit", function(event) {
        let isValid = true;

        // Name validation
        let nameField = document.getElementById("name");
        let nameError = document.getElementById("nameError");
        if (nameField.value.trim().length < 3) {
            nameError.classList.remove("hidden");
            isValid = false;
        } else {
            nameError.classList.add("hidden");
        }

        // Email validation
        let emailField = document.getElementById("email");
        let emailError = document.getElementById("emailError");
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
        if (!emailPattern.test(emailField.value.trim())) {
            emailError.classList.remove("hidden");
            isValid = false;
        } else {
            emailError.classList.add("hidden");
        }

        // Phone validation
        let phoneField = document.getElementById("phone");
        let phoneError = document.getElementById("phoneError");
        let phonePattern = /^[0-9]{10}$/; // Ensuring 10-digit number
        if (!phonePattern.test(phoneField.value.trim())) {
            phoneError.classList.remove("hidden");
            isValid = false;
        } else {
            phoneError.classList.add("hidden");
        }

        // Prevent form submission if any validation fails
        if (!isValid) {
            event.preventDefault();
            alert("Please fill in the required fields correctly.");
        }
    }, { once: true }); // Ensures event listener is added only once
};




    // Scroll to form when clicking "Apply Now"
function scrollToForm() {
        document.getElementById("apply-form").scrollIntoView({ behavior: "smooth" });
    }




    
        // Toggle Mobile Menu
        document.getElementById("menuBtn").addEventListener("click", function () {
            document.getElementById("navMenu").classList.toggle("hidden");
        });
        // Toggle User Dropdown
        document.getElementById("userBtn").addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents it from closing immediately
            document.getElementById("userDropdown").classList.toggle("hidden");
        });

        
 // Close dropdown when clicking outside
 document.addEventListener("click", function (event) {
    let dropdown = document.getElementById("userDropdown");
    let userBtn = document.getElementById("userBtn");

    if (!dropdown.contains(event.target) && !userBtn.contains(event.target)) {
        dropdown.classList.add("hidden");
    }
});


