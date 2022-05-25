function submitGiveawayForm() {
    const inputFields = document.querySelectorAll("input");
    const rulesCheckbox = document.getElementById("official-rules");
    const rulesAgreementText = document.getElementById("rules-agreement");
    const phoneCarrierSelect = document.getElementById("carrier");
    const selectedCarrier = phoneCarrierSelect.options[phoneCarrierSelect.selectedIndex].value;

    let InputFieldsArr = Array.from(inputFields)
    let emptyInputFields = InputFieldsArr.filter( input => input.value === '')
    // If there are empty fields the loop through and highlight those empty fields yellow
    if(emptyInputFields.length !== 0) {
        console.log("emptyInputFields", emptyInputFields);
        for (let i = 0; i < emptyInputFields.length; i++) {
            emptyInputFields[i].style.backgroundColor = "yellow";
        }
    } else if(rulesCheckbox.checked === false) {
        rulesAgreementText.innerHTML = "<mark><u>I agree to the <u>Official Rules</u></mark>";
    } else if(selectedCarrier == "-Select One-") {
        phoneCarrierSelect.style.backgroundColor = "yellow";
    } else {
        window.location.replace("/thanks/index.html");
    }
};