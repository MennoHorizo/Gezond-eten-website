var pages = document.getElementsByClassName('page');
for (var i = 0; i < pages.length; i++) {
  var page = pages[i];
  if (i % 2 === 0) {
    page.style.zIndex = (pages.length - i);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  for (var i = 0; i < pages.length; i++) {
    pages[i].pageNum = i + 1;
    console.log(pageNum)
    var pageNum = pages[i].pageNum;
    pages[i].onclick = function () {
      if (this.pageNum == 9) {
        return
      } else {
        if (this.pageNum % 2 === 0) {
          this.classList.remove('flipped');
          this.previousElementSibling.classList.remove('flipped');
        } else {
          this.classList.add('flipped');
          this.nextElementSibling.classList.add('flipped');
        }
      }
    }
  }
})

document.addEventListener('DOMContentLoaded', async function () {
  //recept 1
  const response_1 = await fetch('http://localhost:81/html/recepten/recept-1.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain'
    }
  })
  var data_1 = await response_1.json()
  console.log(data_1)

  const title_1 = document.getElementById('title-recept-1')
  const ingredienst_1 = document.getElementById('ingredients-recept-1')
  const steps_1 = document.getElementById('steps-recept-1')
  console.log(title_1)
  title_1.innerText = data_1.Titel;
  ingredienst_1.innerHTML = `
    <div id="Title-div">
        <p id="Ingredienten-title">Ingrediënten:</p>
    </div>
    <div id="Ingredienten">
        1. Venkelknol: ${data_1.Ingrediënten.venkelknol}<br>
        2. Teenknoflook: ${data_1.Ingrediënten.teenknoflook}<br>
        3. Arachide olie: ${data_1.Ingrediënten.arachideolie}<br>
        4. Citroen: ${data_1.Ingrediënten.citroen}<br>
        5. Zuivelspread naturel light: ${data_1.Ingrediënten.zuivelspreadnaturellight}<br>
        6. Heet water: ${data_1.Ingrediënten.heetwater}<br>
        7. Kipfiletreepjes: ${data_1.Ingrediënten.kipfiletreepjes}<br>
        8. Biologische volkoren fusilli: ${data_1.Ingrediënten.biologischevolkorenfusilli}<br>
        9. Glucola: ${data_1.Ingrediënten.glucola}
    </div>
    `
  steps_1.innerHTML = `
    <div id="steps-div">
        <p id="steps-title">Steps: </p>
    </div>
    <div id="steps">
        Step 1: ${data_1.steps._1}<br><br>
        Step 2: ${data_1.steps._2}<br><br>
        Step 3: ${data_1.steps._3}<br><br>
        Step 4: Go eat!
    </div>
    `;

  //recept 2
  const response_2 = await fetch('http://localhost:81/html/recepten/recept-2.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain'
    }
  })
  var data_2 = await response_2.json()
  console.log(data_2)

  const title_2 = document.getElementById('title-recept-2')
  const ingredienst_2 = document.getElementById('ingredients-recept-2')
  const steps_2 = document.getElementById('steps-recept-2')

  title_2.innerText = data_2.Titel;
  ingredienst_2.innerHTML = `
    <div id="Title-div">
        <p id="Ingredienten-title">Ingrediënten:</p>
    </div>
    <div id="Ingredienten">
        Babywortels: ${data_2.Ingrediënten.wortels}<br>
        Gele paprika: ${data_2.Ingrediënten.Gelepaprika}<br>
        Komkommer: ${data_2.Ingrediënten.Komkommer}<br>
        Roomkaas: ${data_2.Ingrediënten.Roomkaas}<br>
        Yoghurt: ${data_2.Ingrediënten.Yoghurt}
    </div>
    `
  steps_2.innerHTML = `
    <div id="steps-div">
        <p id="steps-title">Steps: </p>
    </div>
    <div id="steps">
        ${data_2.steps._1}<br><br>
        ${data_2.steps._2}<br><br>
        ${data_2.steps._3}<br><br>
        ${data_2.steps._4}<br><br>
        ${data_2.steps._5}<br><br>
        ${data_2.steps._6}<br>
        ${data_2.steps._7}
    </div>
    `;


  //recept 3
  const response_3 = await fetch('http://localhost:81/html/recepten/recept-3.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain'
    }
  })
  var data_3 = await response_3.json()
  console.log(data_3)

  const title_3 = document.getElementById('title-recept-3')
  const ingredienst_3 = document.getElementById('ingredients-recept-3')
  const steps_3 = document.getElementById('steps-recept-3')

  title_3.innerText = data_3.titel;
  ingredienst_3.innerHTML = `
    <div id="Title-div">
        <p id="Ingredienten-title">Ingrediënten:</p>
    </div>
    <div id="Ingredienten">
        Havemout: ${data_3.Ingrediënten.Havermout}<br>
        Melk: ${data_3.Ingrediënten.Melk}<br>
        Kaneel: ${data_3.Ingrediënten.Kaneel}<br>
        Vanille extract: ${data_3.Ingrediënten.Vanille}<br>
        Yoghurt: ${data_3.Ingrediënten.Yoghurt}<br>
        Banaan: ${data_3.Ingrediënten.Banaan}
    </div>
    `
  steps_3.innerHTML = `
    <div id="steps-div">
        <p id="steps-title">Steps: </p>
    </div>
    <div id="steps">
        ${data_3.Steps._1}<br><br>
        ${data_3.Steps._2}<br><br>
        ${data_3.Steps._3}<br><br>
        ${data_3.Steps._4}<br>
        ${data_3.Steps._5}
    </div>
    `;



      //recept 4
  const response_4 = await fetch('http://localhost:81/html/recepten/recept-4.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain'
    }
  })
  var data_4 = await response_4.json()
  console.log(data_4)

  const title_4 = document.getElementById('title-recept-4')
  const ingredienst_4 = document.getElementById('ingredients-recept-4')
  const steps_4 = document.getElementById('steps-recept-4')

  title_4.innerText = data_4.titel;
  ingredienst_4.innerHTML = `
    <div id="Title-div">
        <p id="Ingredienten-title">Ingrediënten:</p>
    </div>
    <div id="Ingredienten">
          Sojayoghurt: ${data_4.Ingrediënten.Sojayoghurt} <br>
          Kokosolie: ${data_4.Ingrediënten.kokosolie} <br>
          Appelmoes: ${data_4.Ingrediënten.Appelmoes} <br>
          Amandelmeel: ${data_4.Ingrediënten.Amendelmeel} <br>
          Kristalsuiker: ${data_4.Ingrediënten.Kristalsuiker} <br>
          Baking soda: ${data_4.Ingrediënten.Baking_soda} <br>
          Citroensap: ${data_4.Ingrediënten.Citroensap} <br>
          Zout: ${data_4.Ingrediënten.Zout} <br>
          Blauwe bessen: ${data_4.Ingrediënten.Blauwe_bessen} <br>
          Walnoten: ${data_4.Ingrediënten.Walnoten} <br><br>
          Cakeblik: ${data_4.benodigheden.Cakeblik}<br>
    </div>
    `
  steps_4.innerHTML = `
    <div id="steps-div">
        <p id="steps-title">Steps: </p>
    </div>
    <div id="steps">
    ${data_4.steps._1}<br><br>
    ${data_4.steps._2}<br><br>
    ${data_4.steps._3}<br><br>
    ${data_4.steps._4}<br><br>
    ${data_4.steps._5}<br><br>
    ${data_4.steps._6}<br>
    ${data_4.steps._7}<br>
    ${data_4.steps._8}
    </div>
    `;
})