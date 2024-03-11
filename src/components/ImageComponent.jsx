import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div className="container">
        <img src={this.props.link} alt={this.props.name} />
      </div>
    );
  }
}

export default ImageComponent;
