import { HasFormatter } from './interfaces/HasFormatter.js';
import { Payment } from './classes/payment.js';
import {Invoice} from './classes/invoice.js'
import { ListTemplate } from './classes/listTemplate.js';



const form = document.querySelector('.new-item-form') as HTMLFormElement ;
const type = document.querySelector('#type') as HTMLSelectElement ;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement ;
const details = document.querySelector('#details') as HTMLInputElement ;
const amount = document.querySelector('#amount') as HTMLInputElement ;

const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit',(e: Event) =>{
  e.preventDefault();

  let doc : HasFormatter;
  if(type.value === 'invoice'){
    doc = new Invoice (toFrom.value, details.value, amount.valueAsNumber)
  } else{
    doc = new Payment (toFrom.value, details.value, amount.valueAsNumber)
  }
  list.render(doc,type.value,'end');
})