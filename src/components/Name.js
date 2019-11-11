import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NameChange } from "../reducers/name/actions";

function Name() {
  const name = useSelector(state => state.name.value);
  const dispatch = useDispatch();
  const [value, setValue] = useState(name);
  const handleChangeInput = e => setValue(e.target.value);
  const handleDispatchChange = () => dispatch(NameChange(value));
  return (
    <>
      <div>
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input
            id="icon_prefix"
            type="text"
            className="validate"
            value={value}
            onChange={handleChangeInput}
          />
          <label htmlFor="icon_prefix">Name</label>
        </div>
      </div>
      <div>
        <button
          className="waves-effect waves-light btn-small"
          onClick={handleDispatchChange}
        >
          Change
        </button>
      </div>
    </>
  );
}

export default Name;
