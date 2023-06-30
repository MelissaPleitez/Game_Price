const form = document.querySelector('#form')

function Brands(brands, year, type){
this.brands= brands
this.year=year
this.type=type
}


function UI (){}

UI.prototype.creating_year=function(){

let max = 2023
let min = max -10

for(let i= max; i>min; i--){
    const select = document.querySelector('#year')
    const years= document.createElement('option')
    years.value= i
    years.innerHTML= i

    select.appendChild(years)

}


}

UI.prototype.adding_html=function(brand, year, type){
let brand_info
    switch(brand){
        case '1':
            brand_info= 'Nintendo'
            break
        case '2':
            brand_info= 'Sony'
            break
        case '3':
            brand_info= 'Electronic Arts'
            break
        default:
            break        
    }
const container = document.querySelector('#result')
const div = document.createElement('div')

div.innerHTML= ` 
<h4>${brand_info}</h4>
<h4>${year}</h4>
<h4>${type}</h4>
` 

container.appendChild(div)
console.log(brand, year, type)

}

UI.prototype.alerts= function (message, type_m){
    const dev= document.createElement('p')

    if(type_m ==='error'){
       
        dev.innerHTML= message
        form.insertBefore(dev, document.querySelector('#result'))
        console.log(message, type_m)
        return
    }
   
    dev.innerHTML= message
    setTimeout(() => {
        dev.remove()
        form.insertBefore(dev, document.querySelector('#result'))
    }, 3000);
    
    }


const ui = new UI()

document.addEventListener('DOMContentLoaded', ()=>{
    ui.creating_year()
})

form.addEventListener('submit', getting_info)

function getting_info(e){
e.preventDefault()

const brans_type= document.querySelector('#brands').value
const year_type= document.querySelector('#year').value
const types = document.querySelector('input[name="type"]:checked').value

if(brans_type === '' || year_type=== '' || types===''){
  ui.alerts('empty', 'error')
    return 
}



// console.log('inputs:', brans_type, year_type, types)
ui.adding_html(brans_type, year_type, types)

}

