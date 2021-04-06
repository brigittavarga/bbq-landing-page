let emailCollectorForm = document.querySelector("#Email-Collector")

emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault()

    let ourFormData = new FormData(event.target)

    let userFirstName = ourFormData.get("firstName")

    let updatedHTMLContent = `
            <h2>Congratulations ${userFirstName}!</h2>
            <p>You‘re on your way to becoming a BBQ Master!</p>
            <p class="fine-print">We'll never share your information without your permission</p>
    `

    let ourMainContent = document.querySelector("#Main-Content")
    ourMainContent.innerHTML = updatedHTMLContent;
})
