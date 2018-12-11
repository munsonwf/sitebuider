import React from "react";
import { Input, DateRangeQuickPicker } from "zent";
import resumeData from "./mock.json";

var FileSaver = require("file-saver");

export default class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      location: "",
      note: "",
      notes: [],
      resumeData: resumeData
    };
  }

  onInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onWriteToFile = () => {
    const { resumeData } = this.state;
    var blob = new Blob(resumeData, { type: "text/json;charset=utf-8" });
    FileSaver.saveAs(blob, "test.txt");
  };

  onAdd = () => {
    this.setState({
      notes: [...this.state.notes, this.state.note]
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let newPayload = {
      title: this.state.title,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      company: this.state.company,
      tasks: this.state.notes
    };
    this.setState({
      resumeData: [...this.state.resumeData, newPayload]
    });
  };

  render() {
    const { value, chooseDays, value1, chooseDays1 } = this.state;
    console.log("RESUME DATA", resumeData);
    return (
      <div className="editDiv container">
        <h1>Edit page</h1>
        <h2>Experience</h2>
        <form>
          {/* TITLE */}
          <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Principal Sandwitch Architect"
              onChange={this.onInput}
            />
          </div>
          {/* COMPANY */}
          <div className="form-row">
            <div class="form-group col-md-6">
              <label for="exampleInputEmail1">Company</label>
              <input
                type="text"
                className="form-control"
                id="company"
                placeholder="North Aerospace"
                onChange={this.onInput}
              />
            </div>

            {/* LOCAITON */}
            <div class="form-group col-md-6">
              <label for="exampleInputEmail1">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Sunnyvale"
                onChange={this.onInput}
              />
            </div>
          </div>
          {/* DATE RANGE */}
          <div class="form-row">
            {/* START DATE */}
            <div class="form-group col-md-6">
              <label for="exampleInputEmail1">Start Date</label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                placeholder="Sunnyvale"
                onChange={this.onInput}
              />
            </div>
            {/* END DATE */}
            <div class="form-group col-md-6">
              <label for="exampleInputEmail1">End Date</label>
              <input
                type="date"
                className="form-control"
                id="endDate"
                placeholder="Sunnyvale"
                onChange={this.onInput}
              />
            </div>
          </div>
          {/* ADD NOTES */}
          <label for="exampleInputEmail1">Notes</label>
          <div class="input-group mb-3">
            <input
              type="text"
              id="note"
              onChange={this.onInput}
              class="form-control"
              placeholder="Saved $1,000,000 in costs per day"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={this.onAdd}
              >
                Add
              </button>
            </div>
          </div>
          Notes: {this.state.notes}
          <button onClick={this.onSubmit} class="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.onWriteToFile}
          >
            Write To File
          </button>
        </form>

        {/* CURRENT ENTRIES */}
        <div>
          {this.state.resumeData.map(item => (
            <div>
              <p>ENTRY</p>
              <p>Title: {item.title}</p>
              <p>Start Date: {item.startDate}</p>
              <p>End Date: {item.endDate}</p>
              <p>Comapny: {item.company}</p>
              <p>Tasks: {item.tasks}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
