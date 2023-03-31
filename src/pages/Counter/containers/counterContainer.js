import { Component } from "react";
import Layout from "../components/Layout";

class CounterConteiner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      isEven: true,
    };
  }

  componentDidUpdate(currentState, prevState) {
    const currentValue = this.state.countValue;

    if (!(prevState.countValue === this.state.countValue)) {
      this.setState({ isEven: currentValue % 2 === 0 });
    }
  }

  handleIncrement = () => {
    this.setState({ countValue: this.state.countValue + 1 });
    //this.setState((state) => ({ countValue: state.countValue + 1 }));
  };

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState({ countValue: this.state.countValue - 1 });
    }
  };

  handleReset = () => {
    this.setState({ countValue: 0 });
  };
  render() {
    const { state, handleIncrement, handleReset, handleDecrement } = this;
    const { countValue, isEven } = state;

    return (
      <Layout
        counterValue={countValue}
        handleIncrement={handleIncrement}
        handleReset={handleReset}
        handleDecrement={handleDecrement}
        isEven={isEven}
      />
    );
  }
}

export default CounterConteiner;
