import { random } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import Layout from "../components/Layout";

/*const usersList = Array.from({ length: 1000 }, () => {
  return {
    id: uuid(),
    name: "Alex",
    age: 25,
    isBlocked: false,
  };
});*/
const ListsContainer = () => {
  const [users, setUsers] = useState([]);
  const [date, setDate] = useState(new Date().getSeconds());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date().getSeconds());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleAddUser = useCallback(() => {
    const newUser = {
      id: uuid(),
      name: "ALex",
      age: random(1, 80, false),
      isBlocked: false,
    };

    setUsers((state) => [...state, newUser]);
  }, []);

  const handleBlockUser = useCallback((id) => {
    setUsers((state) => {
      const usersCopy = structuredClone(state);
      const foundUser = usersCopy.find((user) => user.id === id);
      foundUser.isBlocked = true;
      return usersCopy;
    });
  }, []);
  const handleRemoveUser = useCallback((id) => {
    setUsers((state) => {
      const usersCopy = structuredClone(state);
      const userIndexToRemove = usersCopy.findIndex((user) => user.id === id);
      usersCopy.splice(userIndexToRemove, 1);
      return usersCopy;
    });
  }, []);

  return (
    <Layout
      users={users}
      handleAddUser={handleAddUser}
      handleRemoveUser={handleRemoveUser}
      handleBlockUser={handleBlockUser}
    />
  );
};

export default ListsContainer;
