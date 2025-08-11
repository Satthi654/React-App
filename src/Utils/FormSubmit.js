import React, { useState } from "react";

export default function FormSubmit() {
    const [enteredName, setEnteredName] = useState("");

    const data = (event) => {
        event.preventDefault();
        alert("Entered Name is: " + enteredName);
    };

    return (
        <form onSubmit={data}>
            <label>
                Enter Your Name:
                <input
                    type="text"
                    value={enteredName}
                    onChange={(event) => setEnteredName(event.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
            <p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/><p>Hello</p><br/>
        </form>
    );
}