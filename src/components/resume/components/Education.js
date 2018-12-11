import React from "react";

export default class Education extends React.Component {
  render() {
    return (
      <div class="card border-dark resumeCard">
        <div class="card-body">
          <h4 className="sectionHeaderDiv">Education</h4>
          <GenerateEducation />
        </div>
      </div>
    );
  }
}

const GenerateEducation = () => {
  return educationList.map(item => (
    <div className="expItemDiv">
      <h5>
        <b>{item.schoolName}</b>
      </h5>
      <p>
        {item.degreeType}, {item.degreeName}{" "}
        <span className="badge badge-secondary">{item.lauditory}</span>
      </p>
      <p>
        {item.yearStart} - {item.yearEnd}
      </p>
      <ul className="cardList">
        {item.activities.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  ));
};

const educationList = [
  {
    id: "1",
    schoolName: "North University",
    yearStart: "2015",
    yearEnd: "2017",
    degreeType: "M.S.",
    degreeName: "Computer Science",
    lauditory: "Cum Laude",
    activities: [
      "Tri Fork Fraternity",
      "Student Government Association",
      "Cat Club"
    ]
  },
  {
    id: "2",
    schoolName: "North Watersport and Motorboating Academy",
    yearStart: "2013",
    yearEnd: "2017",
    degreeType: "B.A.",
    degreeName: "Jetski Operation",
    lauditory: "Cum Laude",
    activities: ["Lifeguard Club", "Martini Club"]
  }
];
