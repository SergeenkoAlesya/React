import { memo } from "react";
import PropTypes, { string } from "prop-types";

import styles from "./styles.module.scss";

const CounterView = ({
  id,
  counterValue,
  handleIncrement,
  handleReset,
  handleDecrement,
  handleRemove,
}) => {
  const isEven = counterValue % 2 === 0;
  return (
    <div
      className={styles.wrapper}
      style={{ background: isEven ? "darkgrey" : "darkorange" }}
    >
      <div className={styles.display}> {counterValue} </div>
      <div className={styles.display}> {isEven ? "Even" : "Odd"} </div>

      <div className={styles.controlButtons}>
        <button
          disabled={counterValue === 0}
          className={styles.controlButton}
          onClick={() => handleDecrement(id)}
        >
          -
        </button>
        <button
          className={styles.controlButton}
          onClick={() => handleReset(id)}
        >
          Reset
        </button>
        <button
          className={styles.controlButton}
          onClick={() => handleIncrement(id)}
        >
          +
        </button>
      </div>
      {handleRemove && (
        <button style={{ background: "red" }} onClick={() => handleRemove(id)}>
          Remove!
        </button>
      )}
    </div>
  );
};

CounterView.propTypes = {
  id: string,
  counterValue: PropTypes.number,
  handleIncrement: PropTypes.func,
  handleReset: PropTypes.func,
  handleRemove: PropTypes.func,
};

export default memo(CounterView);
