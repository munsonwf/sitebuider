import React from "react";

export default class Experience extends React.Component {
  render() {
    return (
      <div class="card border-dark resumeCard">
        <div class="card-body">
          <h4 className="sectionHeaderDiv">Experience</h4>
          <GenerateExperience />
        </div>
      </div>
    );
  }
}

const GenerateExperience = props => {
  return jobList.map(item => (
    <div className="expItemDiv">
      <h5>{item.title}</h5>
      <p>
        <b>{item.company}</b>
      </p>
      <p>{item.dateRange}</p>
      <ul className="cardList">
        {item.tasks.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  ));
};

const jobList = [
  {
    title: "Full Stack Engineer",
    dateRange: "May 2018 - Present",
    company: "North Aeropsace",
    tasks: [
      "Lead front end development of new product in React/Redux, created architecture, and designed user experience",
      "Lead site-wide frontend migration of existing application from Polymer 1.0 to React/Redux",
      "Built API in Node.js/Express to handle user authentication and authorization and JWT creation and validation",
      "Managed build and deployment pipeline via Jenkins to DC/OS Mesos cluster"
    ]
  },
  {
    title: "Lead Frontend Engineer",
    dateRange: "February 2017 - May 2018",
    company: "North Aerospace",
    tasks: [
      "Built and designed greenfield project in React/Redux. Retired existing app and delivered GA release in 6 months.",
      "Create mobile responsive application for sea-to-air weapons platform system",
      "Lead team of three frontend developers, assigned user stories, pair programmed, and trained",
      "Ensured cross browser compatibility, app performance and render speed, and accessibility considerations",
      "Automated build and deployment pipeline with custom Jenkins server"
    ]
  },
  {
    title: "Frontend Engineer",
    dateRange: "July 2016 - February 2017",
    company: "North Aerospace",
    tasks: [
      "Developed a data visualization and decision support tool for manufacturing plants in 50 sites worldwide",
      "Created dashboard tool in React to monitor data ingestion processes and re-trigger failed ingestions",
      "Automated testing scripts for regression and acceptance testing",
      "Created and maintained 30 Jenkins pipelines to support CI/CD, integrate with GitHub, and automate testing"
    ]
  },
  {
    title: "Software Engineer",
    dateRange: "December 2014 - June 2016",
    company: "Extendicorp",
    tasks: [
      "Oversaw integration of high value extension cords to Extendicor portofolio",
      "Streamlined CI/CD pipeling by replacing Jenkins with in-house extension cord-based pipeline",
      "Designed, lead, and implemented a site-wide UI overhaul for externally facing application",
      "Scrum master: managed projects in TFS and lead standup, sprint planning, backlog grooming, and retrospective",
      "Created robotic process automation tools to discover $500,000 in billable payments"
    ]
  }
];
