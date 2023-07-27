/* Validate Contact-Us Form */

function valid()
{
    var RE_NAME = /^[A-Za-z]+(\S)+[A-Za-z]+$/;
    var RE_EMAIL = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
    var RE_CONTACT = /^(\d){10,11}$/;
    RE_MSG = /^(\w)+$/;

    var name = document.getElementById("nm").value;
    if( name=="" )
    {
        alert("Name can't be left Blank");
        return false;
    }

    if(!RE_NAME.test(name))
    {
        alert("Name has been a combination of fname & lname");
        return false;
    }

    var email = document.getElementById("em").value;
    if(email=="")
    {
        alert("Email can't be left Blank");
        return false;
    }

    if(RE_EMAIL.test(email))
    {
        alert("Email should have a proper validation");
        return false;
    }

    var cont= document.getElementById("ct").value;
    if(msg="")
    {
        alert("Message can't be Blank");
        return false;
    }

    if(RE_MSG.test(msg))
    {
        alert("Message has to be Alphanumeric");
        return false;
    }

}



/* Validate Newsletter Sign-up Form*/

function validateForm() {
    
    // Fetching form inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validating name field
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return false;
    }

    // Validating email field
    if (emailInput.value.trim() === '') {
        alert('Please enter your email address.');
        emailInput.focus();
        return false;
    } else if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return false;
    }

    // Form is valid, allow submission
    return true;
}
