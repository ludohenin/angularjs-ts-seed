import {NamesList} from '../../services/names-list';

export class AboutController {
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