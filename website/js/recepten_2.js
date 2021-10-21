document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('http://localhost:80/html/recepten/recept-1.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain'
        }
    })
    var data = await response.json()
    console.log(data)

    const title = document.getElementById('title-recept-1')
    const ingredienst = document.getElementById('ingredients-recept-1')
    const steps = document.getElementById('steps-recept-1')

    title.innerText = data.Titel;
    ingredienst.innerText = JSON.stringify(data.Ingrediënten);
    steps.innerText = JSON.stringify(data.steps);
})