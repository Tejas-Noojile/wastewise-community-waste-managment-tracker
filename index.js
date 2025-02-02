import {app,database} from "/firebaseConfig";
import {collection,addDoc} from "/firebase/firestore";
document.addEventListener('DOMContentLoaded', function () {

    // export default function App(){
    //     const collectionRef = collection(database, 'users'); 
    // }
    // Elements
    const form = document.getElementById('request-form');
    const submitButton = document.getElementById('submit-btn');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Form Validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const requestType = document.querySelector('input[name="request-type"]:checked');

        if (name === "" || email === "" || address === "" || !requestType) {
            showError('Please fill out all fields.');
            return;
        }

        // Simulate successful submission after validation
        setTimeout(function () {
            showSuccess();
            form.reset();
        }, 500);
    });

    // Function to show success message
    function showSuccess() {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        setTimeout(function () {
            successMessage.style.display = 'none';
        }, 3000);
    }

    // Function to show error message
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        setTimeout(function () {
            errorMessage.style.display = 'none';
        }, 3000);
    }

    // Validate email format (Simple check)
    document.getElementById('email').addEventListener('input', function () {
        const email = document.getElementById('email').value;
        const emailError = document.getElementById('email-error');

        if (!validateEmail(email)) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    });

    // Simple email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(email);
    }
    addDoc(collectionRef,{
        name:database.name,
        adress:database.address
    })
});