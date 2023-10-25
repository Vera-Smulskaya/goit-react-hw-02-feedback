import React, { Component } from 'react';
import css from './Statistics.module.css';

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <div className={css.statisticsFeedback}>
          <p>
            Good: <span className={css.statisticsFeedbackMark}>{good}</span>
          </p>
          <p>
            Neutral:{' '}
            <span className={css.statisticsFeedbackMark}>{neutral}</span>
          </p>
          <p>
            Bad: <span className={css.statisticsFeedbackMark}>{bad}</span>
          </p>
        </div>
        <p className={css.statisticsFeedbackTotal}>
          Total: <span className={css.statisticsFeedbackMark}>{total}</span>
        </p>
        <p className={css.statisticsFeedbackPositive}>
          Positive Percentage:{' '}
          <span className={css.statisticsFeedbackMark}>
            {positivePercentage}%
          </span>
        </p>
      </>
    );
  }
}
