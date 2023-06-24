import React from "react";
import "./CompetitiveSites.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className="competitive-sites-main-div">
        <ul className="competitive-sites-dev-icons">
          {this.props.logos.map((logo) => {
            return (
              // <OverlayTrigger
              //   key={logo.siteName}
              //   placement={"top"}
              //   style={{ marginBottom: "5px" }}
              //   overlay={
              //     <Tooltip id={`tooltip-top`}>
              //       <strong>{logo.siteName}</strong>
              //     </Tooltip>
              //   }
              // >
              <li className="competitive-sites-inline" name={logo.siteName}>
                <a
                  href={logo.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {logo.small && (
                    <img
                      className="small-school-image"
                      style={logo.style}
                      src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                      alt={logo.skillName}
                    />
                  )}
                  {!logo.small && logo.imageSrc && (
                    <img
                      className="school-image"
                      style={logo.style}
                      src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                      alt={logo.skillName}
                    />
                  )}
                </a>
              </li>
              // </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CompetitiveSites;
