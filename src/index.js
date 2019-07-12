// import _ from 'lodash';
import { sum } from './sum';
import './styles/index.css';
import girl from './images/720*880_01.png';

const component = () => {
  const oDiv = document.createElement('div');
  const oBgImg = document.createElement('div');
  const oFragment = document.createDocumentFragment();
  const oImg = new Image();
  // oDiv.innerHTML = _.join(['Hello', 'Joe'], ' ');
  oDiv.innerHTML = `The total of 1, 2, 9, 10 is ${sum(1, 2, 9, 10)}`;
  oDiv.classList.add('color');
  oImg.src = girl;
  oImg.width = 100;
  oImg.height = 100;
  oBgImg.classList.add('bgImg');
  oFragment.appendChild(oImg);
  oFragment.appendChild(oBgImg);
  oFragment.appendChild(oDiv);
  return oFragment;
};

document.body.appendChild(component());