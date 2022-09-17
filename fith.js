// Calendar App

const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD CONDITIONAL HERE
  let month = choice
  let days = 31

  if(month === "Janurary" || month === "March" || month === "May" || month === "July"|| month === "August"|| month === "October" || month === "December"){
    days = 31
  }
  else if (month === "Feburary") {
    days = 28
  }
  else{
    days = 30
  }
 



  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');

