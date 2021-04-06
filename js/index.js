// store the form in a variable
let emailCollectorForm = document.querySelector("#Email-Collector")

// add an event listener to the submit button INSIDE of the form 
emailCollectorForm.addEventListener("submit", event => {
    // stop the default event behavior
    event.preventDefault()

    let ourFormData = new FormData(event.target)

    // store input name="firstName"
    let userFirstName = ourFormData.get("firstName")

    // store input name="emailAddress"
    let userEmailAddress = ourFormData.get("emailAddress")

    let updatedHTMLContent = `
            <h2>Congratulations, ${userFirstName}!</h2>
            <p>You‘re on your way to becoming a BBQ Master!</p>
            <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
    `

    let ourMainContent = document.querySelector("#Main-Content")
    ourMainContent.innerHTML = updatedHTMLContent;
})