import React from "react";
import css from './Counter.module.css';

const FeedbackOptions = ({ onIandleGood, onHandleNeutral, onHandleBad }) => (
  <ul className={css.FeedbackOptions_buttonList}>
    <li className={css.FeedbackOptions_button_li}>
      <button
        className={css.FeedbackOptions_button}
        type="button"
        name="good"
        onClick={onIandleGood}
      >
        good
      </button>
    </li>
    <li className={css.FeedbackOptions_button_li}>
      <button
        className={css.FeedbackOptions_button}
        type="button"
        name="neutral"
        onClick={onHandleNeutral}
      >
        neutral
      </button>
    </li>
    <li className={css.FeedbackOptions_button_li}>
      <button
        className={css.FeedbackOptions_button}
        type="button"
        name="bad"
        onClick={onHandleBad}
      >
        bad
      </button>
    </li>
  </ul>
);


export default FeedbackOptions;
