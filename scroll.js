

document.getElementById('sale').addEventListener('click' , function(){
    let display = document.getElementById('salePage')
    window.scrollTo({
        top: display.offsetTop,
        behavior: 'smooth'
    })
})