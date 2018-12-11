import React from "react";

export default class Header extends React.Component {
  render() {
    return headerList.map(item => (
      <div>
        <div className="row">
          <div className="col">
            <h4>{item.name}</h4>
            <h6>
              {item.title} at {item.company}
            </h6>
            <p>
              <i className="fas fa-map-marker-alt" /> {item.location}
            </p>
          </div>
          <div className="col">
            <ul>
              <li>
                <i className="far fa-envelope" /> {item.email}
              </li>
              <li>
                <i className="fab fa-github-square" />{" "}
                <a href={`http://github.com/${item.github}`}>{item.github}</a>
              </li>
              <li>
                <i class="fas fa-globe-americas" /> {item.website}
              </li>
              <li>
                <i className="fab fa-twitter-square" /> {item.email}
              </li>
            </ul>
          </div>
        </div>
      </div>
    ));
  }
}

const headerList = [
  {
    name: "Greg Benish",
    location: "SF Bay Area",
    phoneNumber: "",
    email: "greg@benish.com",
    website: "http://gregbenish.com",
    linkedin: "linkedin.com",
    twitter: "",
    github: "greg",
    title: "Software Engineer",
    company: "North Aerospace"
  }
];
