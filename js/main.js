const form = document.querySelector('#form')

function Brands(brands, year, type){
this.brands= brands
this.year=year
this.type=type
}

Brands.prototype.prices= function(){

let price;
const base = 100
switch(this.brands){
    case '1':
    price= base* 1.35
    break
    case '2':
        price= base* 1.15
    break
    case '3':
        price= base* 1.05
    break

    default:

    break
}

return price

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

UI.prototype.adding_html=function(total, brand){
let brand_info
    switch(brand.brands){
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
<p class="header">RESULTS:</p>
<h4 class="info_bold">Brand:  <span class="info_normal">${brand_info}</span></h4>
<h4 class="info_bold">Year:  <span class="info_normal">${brand.year}</span></h4>
<h4 class="info_bold">Type:  <span class="info_normal">${brand.type}</span></h4>
<h4 class="info_bold">Price: <span class="info_normal">$${total}</span></h4>
` 

const spinner= document.querySelector('.loader')
spinner.style.display='block'

setTimeout(() => {
    spinner.style.display='none'
    container.appendChild(div)
}, 3000);



}

UI.prototype.alerts= function (message, type_m){
    const dev= document.createElement('div')

    if(type_m ==='error'){
       
     dev.classList.add('error')
    }else{
        dev.classList.add('good')
    }
   
    dev.textContent= message
    form.insertBefore(dev, document.querySelector('#result'))
    setTimeout(() => {
        dev.remove()
        
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
  ui.alerts('One of the inputs is empty', 'error')
    return 
}

ui.alerts('Getting info..', 'good')
const result = document.querySelector('#result div')

if(result != null){
    result.remove()
}

const brands= new Brands(brans_type, year_type, types)
const total= brands.prices();

ui.adding_html(total, brands)

}

