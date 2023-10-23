import React, { Component } from 'react';
import css from './Section.module.css';

export default class Section extends Component {
  render() {
    return (
      <section className={css.section}>
        <h2 className={css.sectionTitle}>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}
