const child__visibleButtons = document.querySelectorAll('.header__visible')

child__visibleButtons.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        event.preventDefault()

        if (event.target.parentElement.nextElementSibling != null) {
            let requiredElement = event.target.parentElement.nextElementSibling
            while (requiredElement != null) {
                console.log(event, event.target.parentElement.nextElementSibling)
                if (requiredElement.classList.contains('display-none')) {
                    requiredElement.classList.remove('display-none')
                    event.target.innerText = '-'
                } else {
                    requiredElement.classList.add('display-none')
                    event.target.innerText = '+'
                }
                requiredElement = requiredElement.nextElementSibling
            }

        } else {
            if (event.target.innerText === '+') {
                event.target.innerText = '-'
            } else {
                event.target.innerText = '+'
            }
        }


    })
})

