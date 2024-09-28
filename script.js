const todoArray= JSON.parse(localStorage.getItem('element')) || [
  {
    name:'',
    date:'',
    start:'',
    end:'',
  },
];

let totalEventAdd='';
function renderEvent(){
   totalEventAdd='';
  for(let index=0;index<todoArray.length;index++){
    let work=todoArray[index].name;
    let time=todoArray[index].date;
    let {start}=todoArray[index];
    let {end}=todoArray[index];
    const html=`
         <div>${work}</div>
         <div>${time}</div>
         <div>${start}</div>
         <div>${end}</div>
            <button onclick ="todoArray.splice(${index},1);
            updateLocalStorage();
                renderEvent();
             " class="delete-button">
               DELETE
            </button>
         `;
    totalEventAdd+=html;
  }

  document.querySelector('.js-display').innerHTML=totalEventAdd;
}

function addEvent(){
  let inputElement=document.querySelector('.event');
  let date=document.querySelector('.enter-date');
  let startTime=document.querySelector('.start-time');
  let endTime=document.querySelector('.end-time');
  todoArray.push({
        name:inputElement.value,
        date:date.value,
        start:startTime.value,
        end:endTime.value,
  });
   updateLocalStorage();
  inputElement.value='';
  renderEvent();
}

function updateLocalStorage(){
  localStorage.setItem('element',JSON.stringify(todoArray));
}

renderEvent();
