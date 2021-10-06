
//document.addEventListener('DOMContentLoaded',UI.dis);
let form=document.querySelector('#form-book');
form.addEventListener('submit',add)
let list = document.querySelector('#book-list')
list.addEventListener('click',removee);
function add(e){
    e.preventDefault();
    const title=document.querySelector('#Title').value;
    const type =document.getElementById('Type').value;
    const aurtor = document.querySelector('#Aurtor').value;
    
   let row =document.createElement('tr');
   row.innerHTML=`
   <td>${title}</td>
   <td>${type}</td>
   <td>${aurtor}</td>
   <td><button class='btn btn-danger btn-sm delete'>X</button></td>`;
   list.appendChild(row);
   document.querySelector('#Title').value='';
   document.getElementById('Type').value='';
    document.querySelector('#Aurtor').value='';
}
function removee(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    }
}
