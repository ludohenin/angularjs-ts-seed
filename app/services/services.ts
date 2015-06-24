import {NamesList} from './names-list';

let services = angular.module('app.services', [])
  .service('NamesList', NamesList);

export {services}