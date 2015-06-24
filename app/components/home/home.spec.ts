/// <reference path="../../../typings/tsd.d.ts" />

import {HomeController} from './home';

let module = angular.mock.module;
let inject = angular.mock.inject;

describe('# Home Controller', () => {
  let $controller, $scope, controller;

  beforeEach(() => {
    module('app');

    inject(_$controller_ => {
      $controller = _$controller_;
    });

    controller = $controller('HomeController', { $scope: {} });
  });

  it('should be an instance of HomeController', () => {
    expect(controller).to.be.an.instanceof(HomeController);
  });
});