import React from "react";

function Footer() {
    return(
        <footer>
        <div className="container-fluid text-center " style={{backgroundColor: "black"}}>
            <div className="row py-5 text-center align-items-center">
                <div className="col-12">
                    <h4 className="font-weight-normal text-light">Want to reach out ?</h4>
                    <button className="btn btn-outline-light btn-lg">Let's Talk</button>
                </div>    
            </div>
            <div className="row">
                <div className="col-12 col-md-4 py-3">
                    <h5 className="text-info">More Links</h5>
                    <a href="/" className="text-light d-block">Home</a>
                    <a href="/" className="text-light d-block">About</a>
                    <a href="/" className="text-light d-block">Works</a>
                    <a href="/" className="text-light d-block">Contact Me</a>
                    <a href="/" className="text-light">Write a Recommendation
                        <i className="fas fa-heart"></i>
                    </a>
                </div>
                <div className="col-12 col-md-4 text-light text-justify py-3">
                    <p>
                        Hi All. I'm Rohit George, a sophomore at Federal Institute of
              Science and Technology, undergoing the course B.Tech Computer
              Science and Engineering. An upcoming CS Engineering Student aspiring to be an experienced
              Full Stack Developer in the coming years.
                    </p>
                </div>
                <div className="col-12 col-md-4 py-3">
                    <h5 className="text-info">Social</h5>
                    <a href="/">
                        <i className="fab fa-linkedin h1 text-light d-block"></i>
                    </a>
                    <a href="/">
                        <i className="fab fa-github h1 text-light d-block"></i>
                    </a>
                    <a href="/">
                        <i className="fas fa-envelope h1 text-light d-block"></i>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-muted">
                    <p>Copyright @ Rohit George 2021</p>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;