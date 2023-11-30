async function getAllPerson(){
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .catch(error => error)
    return response
}

async function showAllPerson(){
    const showPersons = await getAllPerson()
    
    showPersons.results.map(data =>{
        const container = document.querySelector("#container")
        const name = document.createElement('h2')
        const species = document.createElement('h3')
        const status = document.createElement('p')
        const image = document.createElement('img')

        image.classList.add("card")
        name.classList.add("h2-name")
        species.classList.add("h3-species")
        status.classList.add("p-status")

        image.src = data['image']
        name.innerHTML = data['name']
        species.innerHTML = data['species']
        status.innerHTML = data['status']

        container.appendChild(name)
        container.appendChild(image)
        container.appendChild(species)
        container.appendChild(status)
    })

    return showPersons
}

showAllPerson()