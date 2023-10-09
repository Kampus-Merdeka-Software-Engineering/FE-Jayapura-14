// Fetch API step
function fetchStepData() {
    fetch('https://be-jayapura-14-production.up.railway.app/step')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const step = document.querySelector('section .step-details');
            step.innerHTML =""
            const dataImage = ["assets/img/image11.png","assets/img/image12.png","assets/img/image13.png"]
            data.forEach((element, index) => {
                step.innerHTML += `
                <li>
                    <img src=${dataImage[index]} alt="" class="pict">
                    <p>${element.title}</p>
                    <span>${element.description}</span>
                </li>`;
            });
            
        })
        .catch(error => console.error('Error fetching step data:', error));
}

// call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchStepData);