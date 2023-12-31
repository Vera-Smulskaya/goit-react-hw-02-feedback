import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import Button from 'components/Button/Button';

export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={css.options}>
        {options.map(option => (
          <Button
            key={option}
            type="button"
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </Button>
        ))}
      </div>
    );
  }
}
