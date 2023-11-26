function clearForm() {
                 
var form =   document.getElementById('exampleForm');
 form.reset();
  
}

 function validateForm() {
    var FNAInput = document.getElementById('FNA'); 
    var emailInput = document.getElementById('em');
    var phoneInput = document.getElementById('phone');
       
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var phoneError = document.getElementById('phoneError');
    
    var valid = true;

            if (!FNAInput.checkValidity()) {
                nameError.textContent = 'Please enter a valid name.';
                valid = false;
            } else {
                nameError.textContent = '';               
            }
            
       
            if (!emailInput.checkValidity()) {
                emailError.textContent = 'Please enter a valid email address.';
                valid = false;
            } else {
                emailError.textContent = '';
            }
             
            if (!phoneInput.checkValidity()) {
               phoneError.textContent='please enter valid number';
               valid=false;
               }else{
				   phoneError.textContent='';
			   }
    
  
       

}

function target_popup(e) {
    e.preventDefault();
    validateForm();
  
    var FNAInput = document.getElementById('FNA').value; 
    var emailInput = document.getElementById('em').value; 
    var phoneInput = document.getElementById('phone').value; 
    var LNInput = document.getElementById('LN').value; 
    var dobInput = document.getElementById('dob').value; 
    var professionInput = document.getElementById('profession').value; 
    var genInput = document.getElementById('gen').value; 
  
  
    //const wdw = window.open('', 'formpopup', 'width=400,height=400,resizeable,scrollbars');
    
  
      document.getElementById("exampleForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get all form elements
        var formElements = event.target.elements;

        // Create a string to store field-value pairs
        var formData = "";

        // Loop through all form elements
        for (var i = 0; i < formElements.length; i++) {
            if (formElements[i].type !== "submit") {
                formData += formElements[i].name + ": " + formElements[i].value + "\n";
            }
        }

        // Display the form data in a popup
        var popupWindow = window.open("", "Form Data", "width=400,height=300");
        
         popupWindow.document.write("<h2>Form Data</h2>");
        popupWindow.document.write(formData);
    });
   
}






 