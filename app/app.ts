/// <reference path="../typings/tsd.d.ts" />

import {components} from './components/components';
import {services} from './services/services';

let app = angular.module('app', [
  'ngNewRouter',
  components.name,
  services.name
]);

let appRoutes = [
  { path: '/', component: 'home' },
  { path: '/about', component: 'about' }
];

class AppController {
  static $inject = ['$router'];

  constructor($router) {
    $router.config(appRoutes);
  }
}

app.directive('app', () => {
  return {
    restrict: 'E',
    templateUrl: 'app.html?v=<%= VERSION %>',
    controller: AppController
  };
});


export {app}

angular.element(document)
  .ready(() => angular.bootstrap(document.body, [app.name]));
