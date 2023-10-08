// Fetch data untuk step
function fetchStepData() {
    fetch('be-jayapura-14-production.up.railway.app/step')//ganti url api 
        .then(response => response.json())
        .then(data => {
            const step = document.querySelector('section .step-details');
            step.querySelector('p').textContent = data.title;
            step.querySelector('span').textContent = data.description;
        })
        .catch(error => console.error('Error fetching step data:', error));
}

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', fetchStepData);