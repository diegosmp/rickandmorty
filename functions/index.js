async function getAllPerson(){
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    const persons = await response.json()

    return persons.results.map(createElements)
}

function createElements(person) {
    const div = document.createElement('div')
    div.classList.add('cards-person')

    const name = document.createElement('h2')
    name.textContent = person['name']

    const image = document.createElement('img')
    image.src = person['image']

    const status = document.createElement('p')
    status.textContent = person['status']

    div.append(name, image, status)
    document.querySelector('#container').append(div)
}

getAllPerson()