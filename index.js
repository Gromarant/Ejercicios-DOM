const body = document.querySelector('body');

//---> Constructor function
const createItem = (name, father, nameOfClasses, listItems, nameClass, content, attributeName='', attibuteValue='') => {

  if ((name === 'main' || name === 'section') && nameOfClasses !== []) {

    for (let i=0; i<nameOfClasses.length; i++) {
      const section = document.createElement(name);
      section.className = nameOfClasses[i];
      father.appendChild(section)
    
    }
  } else if (name === 'ul' && listItems !== []) {
      const list = document.createElement(name);

      for (let i=0; i<listItems.length; i++) {
        const item = document.createElement('li');
        item.innerHTML = listItems[i];
        list.appendChild(item);
      }
      father.appendChild(list);

    } else if (name === 'button') {
      const item = document.createElement(name);
      item.innerHTML = content;
      father.appendChild(item);

    } else if (name === 'img') {
      const item = document.createElement(name);
      item.setAttibute(attributeName, attibuteValue)
      father.appendChild(item);

    } else {
      const item = document.createElement(name);
      item.innerHTML = content;
      item.className = nameClass;
      father.appendChild(item);
    }
}

//---Set Html elements const createItem(name, father, nameOfClasses, listItems, nameClass, content='', attributeName='', attibuteValue='')
let mainClassName = ['container'];
let sectionsClassName = ['list', 'toggleText', 'imageEfect'];
let twoItems = ['hacer katas sin parar', 'Seguir aprendiendo']

const button = document.querySelector('button');
//main container and sections
createItem('main', body, mainClassName);
createItem('section', document.querySelector('.container'), sectionsClassName);

//---> First assignment: 1 <ul></ul> with 2 <li></li>
createItem('h1', document.querySelector('.list'), [], [], '', 'Lista de tareas: ');
createItem('ul', document.querySelector('.list'), [], twoItems);

//---> Second assignment: 1 button, 1 text and a click event that show or hide the text
createItem('button', document.querySelector('.toggleText'), [], [], '', 'Click me');
createItem('p', document.querySelector('.toggleText'), [], [], 'parag', 'El cerebro humano es asombroso, Funciona 24/7 desde que naces y sólo se detiene cuando vas a escribir código.');
const btn = document.querySelector('button');
const parag = document.querySelector('.parag');

const handlerClick = () => parag.classList.toggle('hidden');
btn.addEventListener('click', handlerClick);