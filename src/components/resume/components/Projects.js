import React from "react";

export default class Project extends React.Component {
  render() {
    return (
      <div class="card border-dark resumeCard">
        <div class="card-body">
          <h4 class="sectionHeaderDiv">Projects</h4>
          <GenerateProjects />
        </div>
      </div>
    );
  }
}

const GenerateProjects = () => {
  return projectList.map(item => (
    <div>
      <h5>
        <b>{item.name}</b>
      </h5>
      <p>{item.description}</p>
      <p>
        <a href={item.link}>Go to {item.name}</a>
      </p>
    </div>
  ));
};

const projectList = [
  {
    id: 1,
    name: "greg-auth",
    projectType: "GitHub Repo",
    description: "UAA API built using Node.js",
    link: "http://github.com/xxx"
  }
];
