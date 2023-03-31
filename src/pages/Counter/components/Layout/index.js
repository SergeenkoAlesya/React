import CounterView from "../../../../commonComponents/CounterView";
import UserCard from "../../../../commonComponents/UserCard";

const Layout = ({
  counterValue,
  handleIncrement,
  handleReset,
  handleDecrement,
  isEven,
}) => {
  return (
    <div>
      <CounterView
        counterValue={counterValue}
        handleIncrement={handleIncrement}
        handleReset={handleReset}
        handleDecrement={handleDecrement}
        isEven={isEven}
      />

      <UserCard name="Alex" age={25} />
    </div>
  );
};

export default Layout;
