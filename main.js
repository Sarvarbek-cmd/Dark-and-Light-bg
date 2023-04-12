let dark=document.querySelector('.dark')
let light=document.querySelector('.light')
let body=document.querySelector('body')
let con=document.querySelector('.container')

dark.addEventListener('click',()=>{
        body.style.background='black',color='white'
        con.style.border='1px solid white'
        dark.style.display='none'
        light.style.display='block'
})
light.addEventListener('click',()=>{
        body.style.background='white',color='white'
        con.style.border='1px solid black'
        dark.style.display='block'
        light.style.display='none',background='black'
})