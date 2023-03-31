import { memo } from "react";
import * as PropTypes from "prop-types";

import styles from "./styles.module.scss";

const UserCard = ({ id, name, age, image, isBlocked, onDelete, onBlock }) => {
  //console.log("Card rerendered");

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: isBlocked ? "red" : "white" }}
    >
      <img src={image} alt="user_photo" width={150} height={150}></img>
      <h3 className={styles.id}>ID {id}</h3>
      <h1 className={styles.name}> User name {name}</h1>
      <h2 className={styles.age}>Age {age}</h2>

      <button onClick={() => onDelete(id)}> Delete</button>
      <button onClick={() => onBlock(id)}> Block user</button>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  image: PropTypes.string,
  isBlocked: PropTypes.bool.isRequired,
  onDelete: PropTypes.func,
  onBlock: PropTypes.func,
};

export default memo(UserCard);
