import toggle from "./Toggle.js"

document.querySelectorAll('aside div.img')[0].addEventListener('click', ()=>{
    toggle.preview()
})
document.querySelectorAll('aside div.img')[1].addEventListener('click', ()=>{
    toggle.edit()
})