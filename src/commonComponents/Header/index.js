import { Link } from "react-router-dom";
import startCase from "lodash/startCase";
import { useLocation } from "react-router-dom";

import { ROUTE_NAMES } from "../../routes/routeNames";

import styles from "./styles.module.scss";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.wrapper}>
      {Object.entries(ROUTE_NAMES).map(([routeName, path]) => (
        <Link
          key={path}
          to={path}
          className={styles.navLink}
          style={{ backgroundColor: path === pathname ? " brown" : "#440778" }}
        >
          {startCase(routeName)}
        </Link>
      ))}
    </div>
  );
};

export default Header;
