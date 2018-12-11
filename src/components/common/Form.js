import React from "react";

export const Input = props => {
  const onCx = e => {
    props.changeCallback(e);
  };
  return (
    <div className="form-group">
      <label for="exampleInputEmail1">{props.title}</label>
      <input
        type="text"
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
        onChange={onCx}
      />
    </div>
  );
};

export const Select = props => {
  const onCx = e => {
    props.changeCallback(e);
  };
  return (
    <div className="form-group">
      <label for="exampleFormControlSelect1">{props.title}</label>
      <select className="form-control" id={props.id} onChange={onCx}>
        <option>Select one...</option>
        {props.values.map(item => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  );
};

export const StartAndEndDate = props => {
  const onCx = e => {
    props.changeCallback(e);
  };

  return (
    <div class="form-row">
      {/* START DATE */}
      <div class="form-group col-md-6">
        <label for="exampleInputEmail1">Start Date</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          onChange={onCx}
        />
      </div>
      {/* END DATE */}
      <div class="form-group col-md-6">
        <label for="exampleInputEmail1">End Date</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          onChange={onCx}
        />
      </div>
    </div>
  );
};

export const ListAdder = props => {
  const onAdd = e => {
    e.preventDefault();
    e.target.reset();
    let item = {
      id: Math.random(),
      value: text
    };
    props.appendCallback(item);
  };

  let text = "";
  const onChange = e => {
    text = e.target.value;
  };

  return (
    <form onSubmit={onAdd}>
      <label>{props.title}</label>
      <div class="input-group mb-3">
        <input
          type="text"
          id={props.id}
          onChange={onChange}
          class="form-control"
          placeholder={props.placeholder}
          aria-label={props.placeholder}
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            onClick={onAdd}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export const ListView = props => {
  const onDelete = e => {
    //
  };

  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        {props.list.map(item => (
          <li>
            <span onClick={onDelete}>DELETE</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const SubmitButton = props => {
  const onSubmit = e => {
    e.preventDefault();
    props.submitCallback(e);
  };
  return (
    <button onClick={onSubmit} className="btn btn-primary">
      {props.text}
    </button>
  );
};
