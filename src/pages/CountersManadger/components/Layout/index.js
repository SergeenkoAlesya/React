import CounterView from "commonComponents/CounterView";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const Layout = ({
  counters,
  handleReset,
  handleCounterCreate,
  handleCounterRemove,
  handleCounterIncrement,
  handleCounterDecrement,
  handleCounterReset,
  handleRemoveAllCounters,
  totalSum,
}) => {
  const average = counters.length > 0 ? totalSum / counters.length : 0;
  return (
    <div>
      <h1> Counter Manadger</h1>
      <div className={styles.stats}>
        <p> TOTAL: {totalSum} </p>
        <p> AVARAGE: {average} </p>
        <p> COUNTERS AMAOUNT: {counters.length} </p>{" "}
      </div>
      <div>
        <button onClick={handleCounterCreate}> Create counter</button>
        <button onClick={handleRemoveAllCounters}> Reset</button>
      </div>
      <div className={styles.counterArea}>
        {counters.map(({ id, countValue }) => (
          <CounterView
            id={id}
            key={id}
            counterValue={countValue}
            handleRemove={handleCounterRemove}
            handleIncrement={handleCounterIncrement}
            handleDecrement={handleCounterDecrement}
            handleReset={handleCounterReset}
          />
        ))}
      </div>
    </div>
  );
};

Layout.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      counValue: PropTypes.number,
    }).isRequired
  ).isRequired,
  handleCounterCreate: PropTypes.func,
  handleReset: PropTypes.func,
};

export default Layout;
