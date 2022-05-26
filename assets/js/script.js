function submitGiveawayForm() {
    // Use DOM to do cooool stuff
    const inputFields = document.querySelectorAll("input");
    const rulesCheckbox = document.getElementById("official-rules");
    const rulesAgreementText = document.getElementById("rules-agreement");
    const phoneCarrierSelect = document.getElementById("carrier");
    const selectedCarrier = phoneCarrierSelect.options[phoneCarrierSelect.selectedIndex].value;

    // Grabbing inputs
    let InputFieldsArr = Array.from(inputFields)
    let emptyInputFields = InputFieldsArr.filter( input => input.value === '')
    // Checking to see if there are any empty fields
    if(emptyInputFields.length !== 0) {
        console.log("emptyInputFields", emptyInputFields);
        // Each empty field will be yellow
        for (let i = 0; i < emptyInputFields.length; i++) {
            emptyInputFields[i].style.backgroundColor = "yellow";
        }
        // Checking if checkbox is checked or not, if not/false will highlight/mark the text
    } else if(rulesCheckbox.checked === false) {
        rulesAgreementText.innerHTML = "<mark><u>I agree to the <u>Official Rules</u></mark>";
        // Checking to see if the user has selected a carrier
    } else if(selectedCarrier == "-Select One-") {
        phoneCarrierSelect.style.backgroundColor = "yellow";
    } else {
        // Once all fields are filled will bring us to the next page
        window.location.replace("/thanks/index.html");
    }
};