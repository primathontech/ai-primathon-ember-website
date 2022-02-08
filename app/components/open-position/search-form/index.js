import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class OpenPositionSearchFormIndexComponent extends Component {
  @tracked form = {
    keyword: null,
    department: null,
    jobType: null,
  };

  @action
  onSubmit(evt) {
    evt.preventDefault();
    console.log(this.form);
    this.args.setQuery(this.form);
  }

  @action
  setDepartment(evt) {
    this.form.department = evt.target.value;
  }

  @action
  setJobType(evt) {
    this.form.jobType = evt.target.value;
  }
}
