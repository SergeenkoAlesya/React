import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const Layout = ({ isActive, handleClick }) => {
  return (
    <div>
      <div
        className={styles.box}
        style={{ backgroundColor: isActive ? "Red" : "#fff" }}
      />
      <button onClick={handleClick}>Click</button>
      {isActive && <div>Hello, I'm Hidden div</div>}
    </div>
  );
};

Layout.propTypes = {
  handleClick: PropTypes.func,
};

export default Layout;
