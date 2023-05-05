let mainClassName = ['container'];
let sectionsClassName = ['list', 'toggleText', 'imageEfect'];
const body = document.querySelector('body');

const createItem = (name, father, nameOfClass, listItems, content='', attributeName='', attibuteValue='') => {

  if ((name === 'main' || name === 'section') && nameOfClass.length > 0 ) {

      for (let i=0; i<nameOfClass.length; i++) {
          const section = document.createElement(name);
          section.className = nameOfClass[i];
          father.appendChild(section)
      }
  }
}
createItem('main', body, mainClassName);