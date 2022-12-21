// Selector variables
let button = document.getElementById('enter');
let input = document.getElementById('userinput');
let ul = document.querySelector('ul');
let child = document.querySelectorAll('li')
let erase = document.querySelectorAll('.fin');

// Get input length from text field
let inputLength = () => {
    return input.value.length
}

// function to create new list items
let createListElement = () => {
    // variables to create li and button
    let createli = document.createElement('li')
    let createbut = document.createElement('button')

    createli.appendChild(document.createTextNode(input.value))
    createli.classList.add('list')
    createbut.classList.add('fin')
    createbut.innerHTML = "remove"

    let newli = ul.appendChild(createli)
    let newbut = createli.appendChild(createbut)

    input.value = ""

    newli.addEventListener('click', () => {
        newli.classList.toggle('done')
    })

    newbut.addEventListener('click', () => {
        ul.removeChild(newli)
    })
}

let addListAfterClick = () => {
    if (inputLength() > 0 ) {
        createListElement()
      } 
}

let addListAfterEnter = (e) => {
    if (e.key === 'Enter') {
        if (inputLength() > 0) {
            createListElement()
        }
    }
}

child.forEach(li => {
    li.addEventListener('click', () => {
        li.classList.toggle('done')
    })
})

erase.forEach((li,i) => {
    li.addEventListener('click', () => {
        ul.removeChild(child[i])
    })
})


button.addEventListener('click', addListAfterClick)

input.addEventListener('keypress', addListAfterEnter)






