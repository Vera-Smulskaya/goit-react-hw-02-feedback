import React, { Component } from 'react';
import css from './Section.module.css';

export default class Section extends Component {
  render() {
    return <section className={css.section}>{this.props.children}</section>;
  }
}
