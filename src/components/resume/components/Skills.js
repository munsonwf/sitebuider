import React from "react";

export default class Skills extends React.Component {
  render() {
    return (
      <div className="card border-dark resumeCard">
        <div className="card-body">
          <h4 className="sectionHeaderDiv">Skills</h4>
          <GenerateSkills />
        </div>
      </div>
    );
  }
}

const GenerateSkills = () => {
  return skillList.map(item => (
    <div>
      <h6>{item.type}</h6>
      {item.skills.map(item => (
        <span className="badge badge-secondary">{item}</span>
      ))}
    </div>
  ));
};

const skillList = [
  {
    type: "Javscript",
    skills: ["React", "Redux", "Node.js", "NPM"]
  },
  {
    type: "Backend",
    skills: ["JSON APIs", "Node.js"]
  },
  {
    type: "Design",
    skills: ["Mockups", "User Interviews"]
  }
];
