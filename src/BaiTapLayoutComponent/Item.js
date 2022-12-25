import { Component } from "react";
import "./Item.css"
class Item extends Component {
  render() {
    return (
        <div className="card">
          <img src="https://picsum.photos/500/325" className="card-img-top img-fluid" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#url" className="btn btn-primary">
              Find Out More
            </a>
          </div>
        </div>
    );
  }
}
export default Item;