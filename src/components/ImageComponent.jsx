import { Component } from "react";

class ImageComponent extends Component {
  render() {
    const { link, name } = this.props;

    return (
      <div className="container">
        {/* <img src={this.props.link} alt={this.props.name} /> */}
        <img src={link} alt={name} />
      </div>
    );
  }
}

export default ImageComponent;
