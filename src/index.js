// import _ from 'lodash';
import { sum } from './sum';
import './styles/index.css';

const component = () => {
  const oDiv = document.createElement('div');
  // oDiv.innerHTML = _.join(['Hello', 'Joe'], ' ');
  oDiv.innerHTML = `The total of 1, 2, 9, 10 is ${sum(1, 2, 9, 10)}`;
  oDiv.classList.add('color');
  return oDiv;
};

document.body.appendChild(component());