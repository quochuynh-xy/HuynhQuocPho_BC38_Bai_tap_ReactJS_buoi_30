import { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Item from "./Item";
import Footer from "./Footer";
import "./main.css";
class BaiTapLayout extends Component {
    render() {
        return(
    <div>
      <Header />
      <Banner />
      <section className="container card-items">
        <div className="row">
          <div className="col-3"> <Item/> </div>
          <div className="col-3"> <Item/> </div>
          <div className="col-3"> <Item/> </div>
          <div className="col-3"> <Item/> </div>
        </div>
      </section>
      <Footer/>
    </div>
        )
    }
};
export {BaiTapLayout};