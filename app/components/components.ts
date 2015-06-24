import {HomeController} from './home/home';
import {AboutController} from './about/about';

let components = angular.module('app.components', [])
  .controller('HomeController', HomeController)
  .controller('AboutController', AboutController);

export {components}