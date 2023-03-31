import { useEffect, useMemo } from "react";
import UserCard from "../../../../commonComponents/UserCard";

import PropTypes from "prop-types";

import styles from "./styles.module.scss";
import calcAverage from "utils/calcAverage";
import { collectUserIds } from "utils/collectUserIds";

const Layout = ({
  users,
  handleAddUser,
  handleRemoveUser,
  handleBlockUser,
}) => {
  const averageUserAge = calcAverage(users);
  const userIds = useMemo(() => {
    return collectUserIds(users);
  }, [users]);

  useEffect(() => {
    console.log(userIds);
  }, [userIds]);

  return (
    <div>
      <h1>Lists</h1>
      <h2>Average Age: {averageUserAge}</h2>

      <div></div>
      <button onClick={handleAddUser}>Add User</button>

      <div className={styles.cardsArea}>
        {users.map(({ id, name, age, isBlocked }, index) => (
          <UserCard
            key={id}
            name={name}
            age={age}
            id={id}
            isBlocked={isBlocked}
            onDelete={handleRemoveUser}
            onBlock={handleBlockUser}
          />
        ))}
      </div>
    </div>
  );
};

Layout.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ),
};
export default Layout;
