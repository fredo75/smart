import "bootstrap";

import {iconAnimation} from '../components/home';
iconAnimation();

// import {textAnimation} from '../components/home';
// textAnimation();

import {selectCategory} from '../components/eco_action';

selectCategory()



// import {testChart} from '../components/chart';
// testChart();

import{formSlider} from '../components/form_slider';
 if (document.getElementById('step_1')){
  formSlider();
 }


import {testChart} from '../components/chart';
testChart();


import {calculEcoAction} from '../components/eco_action';

calculEcoAction();
