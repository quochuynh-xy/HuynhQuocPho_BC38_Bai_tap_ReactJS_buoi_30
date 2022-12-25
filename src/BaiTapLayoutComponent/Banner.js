import { Component } from "react";
import "./Banner.css"
class Banner extends Component {
  render() {
    return (
      <section className="container banner">
        <h1 className="text-capitalize">A warm welcome!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          blanditiis reprehenderit ut voluptatibus error, voluptates recusandae
          expedita dolore officia nihil molestias veritatis consectetur deserunt
          ratione quasi velit facilis nam praesentium.
        </p>
        <button className="btn btn-primary">Call to action</button>
      </section>
    );
  }
}
export default Banner;