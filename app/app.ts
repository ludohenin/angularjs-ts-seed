/// <reference path="../typings/tsd.d.ts" />

import homeModule from './components/home/home';
import aboutModule from './components/about/about';

var app = angular.module('app', [
  'ngNewRouter',
  'ngResource',
  homeModule.name,
  aboutModule.name
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


angular.element(document).ready(() => angular.bootstrap(document.body,
  [app.name], { strictDi: true }));
