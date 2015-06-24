/// <reference path="../typings/tsd.d.ts" />

import {components} from './components/components';
import {services} from './services/services';

var app = angular.module('app', [
  'ngNewRouter',
  'ngResource',
  components.name,
  services.name
]);

var appRoutes = [
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


angular.element(document)
  .ready(() => angular.bootstrap(document.body, [app.name]));
