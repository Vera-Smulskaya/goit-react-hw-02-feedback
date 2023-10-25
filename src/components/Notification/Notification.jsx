import React, { Component } from 'react';
import css from './Notification.module.css';

export default class Notification extends Component {
  render() {
    return <h2 className={css.notification}>{this.props.text}</h2>;
  }
}
