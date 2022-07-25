let menuItems = document.querySelectorAll('.menu__link')
let menu = document.querySelector('.menu')
let btn = document.querySelector('.btn')


btn.addEventListener('click',()=> {

    menu.classList.toggle('is-active')
    btn.classList.toggle('is-active')

}) 

console.log(menuItems)

menuItems.forEach((item) => {
    item.addEventListener('click', ()=> {
        menu.classList.toggle('is-active')
        btn.classList.toggle('is-active')
        console.log('click')
    })
})

