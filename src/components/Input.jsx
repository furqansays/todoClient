import React, { useState } from "react";
import { addTask } from "../services/task";

const Input = ({ fetchTasks }) => {
    const [input, setInput] = useState("");
    const [checkbox, setCheckBox] = useState(false);

    const onFormSubmit = async (e) => {
        e.preventDefault();

        if (!input) return;

        await addTask(input, checkbox);
        setInput("");
        fetchTasks();
    };
    return (
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
                add
            </button>
        </form>
    );
};
export default Input;
