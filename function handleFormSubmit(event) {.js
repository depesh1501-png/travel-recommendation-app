function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Validation
    if (!name || !email || !subject || !message) {
        showFormMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Success
    showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
    
    // Reset form
    document.getElementById('contactFormElement').reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        document.getElementById('formMessage').style.display = 'none';
    }, 5000);
}