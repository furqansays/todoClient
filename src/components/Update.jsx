import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { updateTasks } from "../services/task";

const Update = ({ update, fetchTasks }) => {
  const [checkbox, setCheckBox] = useState(update.completed);

  const [input, setInput] = useState(update.description);
  const [redirect, setRedirect] = useState(false);

  console.log(checkbox);
  const onFormSubmit = async (e) => {
    e.preventDefault();
    await updateTasks({
      id: update._id,
      description: input,
      completed: checkbox,
    });
    fetchTasks();
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <div className="ui container">
      <form class="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </div>
        <div className="field">
          <div class="ui toggle checkbox">
            <input
              type="checkbox"
              name="public"
              value={checkbox}
              onClick={() => {
                setCheckBox(!checkbox);
              }}
            />
            <label>Compeleted</label>
          </div>
        </div>
        <button class="ui teal button" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
