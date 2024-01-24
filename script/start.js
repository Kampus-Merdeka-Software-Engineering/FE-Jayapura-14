const form = document.querySelector('form')

form.addEventListener('submit', handleSubmit)

//function to handle submit
function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(form)
    const obj = Object.fromEntries(fd)
    console.log(obj)

    const json = JSON.stringify(obj)
    localStorage.setItem('Forms', json)
    window.location.replace("test.html")

    // //fetch API form 
    // fetch("https://be-jayapura-14-production.up.railway.app/form", {
    //     method: "POST",
    //     headers: {
    //         'Content-Type' : "application/json",
    //     },
    //     body: JSON.stringify(obj),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         alert("Terimakasih, Selamat Mengerjakan 🙌")
    //         form.reset()
    //         window.location.replace("test.html")
    //     }
    // })
    // .catch(error => console.error(error))
}

