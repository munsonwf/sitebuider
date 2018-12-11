import React from "react";
import {
  Input,
  Select,
  StartAndEndDate,
  ListAdder,
  ListView,
  SubmitButton
} from "../../common/Form";

export default class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      school: "",
      degree: "",
      degreeType: "",
      startDate: "",
      endDate: "",
      activities: []
    };
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onAdd = input => {
    this.setState({
      activities: [...this.state.activities, input]
    });
  };

  onSubmit = e => {
    console.log("JJJJ");
  };

  render() {
    return (
      <div className="container">
        <h1>Education</h1>
        <Input
          title="School"
          id="school"
          placeholder="Fork U"
          changeCallback={this.onChange}
        />
        <Input
          title="Degree"
          id="degree"
          placeholder="Fork Economics"
          changeCallback={this.onChange}
        />
        <Select
          title="Degree Type"
          id="degreeType"
          values={["BA", "BS"]}
          changeCallback={this.onChange}
        />
        <StartAndEndDate changeCallback={this.onChange} />
        <ListAdder
          title="Activities"
          placeholder="Add activities and honors"
          id="activities"
          appendCallback={this.onAdd}
        />
        {/* <ListView title="Activity List" list={this.state.activities} /> */}
        <SubmitButton text="Add" submitCallback={this.onSubmit} />
      </div>
    );
  }
}
