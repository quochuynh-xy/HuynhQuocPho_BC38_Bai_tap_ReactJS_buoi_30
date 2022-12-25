import { Component } from "react";
import "./Header.css"
class Header extends Component {
    render(){
        return (
<section className="bg-dark">
    <nav className="container navbar navbar-expand-lg ">
        <div className="container-fluid">
        <a className="navbar-brand text-white" href="#url">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#url">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#url">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#url">Services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#url">Contact</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
</section>
        )
    }
}
export default Header;