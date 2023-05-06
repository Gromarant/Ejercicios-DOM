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

//---Set Html elements const createItem = (name, father, nameOfClasses, listItems, nameClass, content='', attributeName='', attibuteValue='')
let mainClassName = ['container'];
let sectionsClassName = ['list', 'toggleText', 'imageEfect'];
let twoItems = ['hacer katas sin parar', 'Seguir aprendiendo']

createItem('main', body, mainClassName);
createItem('section', document.querySelector('.container'), sectionsClassName);
createItem('h1', document.querySelector('.list'), [], [], '', 'Lista de tareas: ');
createItem('ul', document.querySelector('.list'), [], twoItems);
