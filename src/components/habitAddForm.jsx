import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.inputRef.current.value);
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
    // this.formRef.current.reset();
  };
  render() {
    console.log('habitForm');
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.handleSubmit}>
        <input
          ref={this.inputRef}
          type="text" //
          className="add-input"
          placeholder="Habit"
        />
        <button
          name="button"
          type="submit" //
          className="add-button"
        >
          Add
        </button>
      </form>
    );
  }
}

export default HabitAddForm;
