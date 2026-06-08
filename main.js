async function getData(params) {
    let apiUrl = "https://rickandmortyapi.com/api/character?nam=rick"
    if(params){
      apiUrl = `https://rickandmortyapi.com/api/character?name=${params}`
    }
    const req = await fetch(apiUrl)
    const data = await req.json()
    return data
}

const listSet = document.querySelector(".data-wrapper > .data-list")

async function createCard (query){
    const data = await getData(query)
    if(query){
        const listData = document.querySelectorAll(".data-wrapper > .data-list > div")
        listData.forEach((item) => {
            item.remove()
        })
    }
    data.results.forEach((item) => {
        const card = document.createElement("div")
        const img = document.createElement("img")
        img.setAttribute("src", item.image)
        const desc = document.createElement("div")
        const name = document.createElement("h5")
        name.innerText = item.name
        const status = document.createElement("p")
        status.innerText = item.status
        const spesies = document.createElement("p")
        spesies.innerText = item.species
        const gender = document.createElement("p")
        gender.innerText = item.gender
        desc.appendChild(name)
     
        card.appendChild(img)
        card.appendChild(desc)
        listSet.appendChild(card)
    })
}

const inputForm = document.querySelector(".input-search-form")
inputForm.addEventListener("submit", function(element) {
    element.preventDefault()
    const inputValue = document.querySelector(".input-name")
    const query = inputValue.value
    createCard(query)
})

createCard()
