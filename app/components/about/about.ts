import {NamesList, namesListModule} from '../../services/NameList';

class AboutController {
  static $inject = ['NamesList'];
  names: Array<string>;
  list: NamesList;

  constructor(list) {
    this.list = list;
    this.names = list.get();
  }

  addName(newname) {
    this.list.add(newname);
    newname = '';
  }
}

export default angular.module('app.about', [namesListModule.name])
  .controller('AboutController', AboutController);