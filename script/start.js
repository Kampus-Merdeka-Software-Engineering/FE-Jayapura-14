const form = document.querySelector('form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(form)
    const obj = Object.fromEntries(fd)
    console.log(obj)

    const json = JSON.stringify(obj)
    localStorage.setItem('user', json)

    document.querySelector('form').reset()
    window.location.href = "test.html" 

    // fetch("url", { //url halaman start
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
    //         localStorage.setItem("user", JSON.stringify(data.data))
    //         form.reset()
    //         window.location.href = "test.html"
    //     }
    // })
    // .catch(error => console.error(error))
}

