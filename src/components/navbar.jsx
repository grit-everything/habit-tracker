import React, { Component } from 'react';

class Navbar extends Component {
  state = {
    habits: this.props.habits,
  };
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };
  render() {
    console.log('Navbar');

    return (
      <nav>
        <i className="navbar-logo fas fa-leaf"></i>
        <span className="navbar">Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
