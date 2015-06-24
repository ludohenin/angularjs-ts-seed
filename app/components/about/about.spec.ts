/// <reference path="../../../typings/tsd.d.ts" />

import {AboutController} from './about';

let module = angular.mock.module;
let inject = angular.mock.inject;

describe('# About Controller', () => {
  let $controller, $scope, controller;

  beforeEach(() => {
    module('app');

    inject(_$controller_ => {
      $controller = _$controller_;
    });

    controller = $controller('AboutController', { $scope: {} });
  });

  it('should be an instance of AboutController', () => {
    expect(controller).to.be.an.instanceof(AboutController);
  });
  it('should have propertis list, names', () => {
    expect(controller).to.have.property('names');
    expect(controller).to.have.property('list');
  });
  it('should add() a name and update the names list', () => {
    let lastValue;
    controller.addName('test');
    lastValue = controller.names.pop();
    expect(lastValue).to.equal('test');
  })
});