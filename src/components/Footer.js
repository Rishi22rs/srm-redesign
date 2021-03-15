import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = ({ setClassName, className }) => {
  return (
    <div>
      <MDBFooter
        className="font-small pt-4 mt-4"
        style={{ backgroundColor: "#FF4655", color: "#ff4655" }}
      >
        <MDBContainer fluid className="text-center text-md-left">
          <div className="container">
            <MDBRow>
              <MDBCol md="3">
                <h5 className="title"></h5>
                <img src="https://www.srmist.edu.in/sites/all/themes/srmuniversity/home_assets/icons/srm-logo.png" />
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Privacy Policy</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Terms & Conditions</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Campus Mail</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Student Portal</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="3">
                <h5 className="title">Get Connected</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">International Alliances</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">International Advisory Board</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Corporate Advisory Board</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Accreditations & Ranking</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Placement</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">International Relation</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="3">
                <h5 className="title">Insights</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Innnovation & Incubation Center</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Student Clubs</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Researgence</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">SRM Video</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Virtual Tour</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Spectrum</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">IQAC</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="3">
                <h5 className="title">Campuses</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Chennai Main Campus - Kattankulathur</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Chennai - Ramapuram</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Chennai - Vadapalani Campus</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Delhi - NCR</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">SRM University AP - Andra Pradesh</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">SRM University - Haryana</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">SRM University - Sikkim</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBContainer>

        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            <a className="copyrighttext" href="https://www.mdbootstrap.com">
              &copy; {new Date().getFullYear()}
              Copyright: , SRM Institute of Science and Technology(formerly
              known as SRM University), All Rights Reserved{" "}
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};
export default Footer;
