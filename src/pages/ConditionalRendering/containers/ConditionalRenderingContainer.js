import { Component } from "react";
import Layout from "../components/Layout";

class ConditionalRenderingContainer extends Component {
  state = {
    isActive: false,
  };

  handleActiveToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <Layout
        isActive={this.state.isActive}
        handleClick={this.handleActiveToggle}
      />
    );
  }
}

export default ConditionalRenderingContainer;
