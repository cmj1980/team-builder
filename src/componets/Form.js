import React, { useState, useEffect } from "react";
import '../App.css'



export default function Form(props) {
    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        role: "",
    });

    useEffect(() =>{
        setInput(props.memberToEdit);
    }, [props.memberToEdit]);

    const handleChanges = evt => {
        setInput({...input, [evt.target.name]: evt.target.value })
    };

    return (
        <form className="submission-form"
        onSubmit={evt => props.handleSubmit(evt, input, props.memberToEdit)} >
            <label>
                Name:
                <input
                type="text"
                name="name"
                value={input.name}
                onChange={evt => handleChanges(evt)}
                placeholder="Your Name Here"
                />
            </label>
            <label>
                Email:
                <input
                type="email"
                name="email"
                value={input.email}
                onChange={evt => handleChanges(evt)}
                placeholder="Enter Email"
                />
            </label>
            <label>
                Phone:
                <input
                type="tel"
                name="phone"
                value={input.phone}
                onChange={evt => handleChanges(evt)}
                placeholder="Enter Phone Number"
                />
            </label>
            <label>
                Role:
                <input
                type="text"
                name="role"
                value={input.role}
                onChange={evt => handleChanges(evt)}
                />
            </label>
            <label>
                <input
                type="submit"
                name="submit"
                value={input.submit}
                />
            </label>

        </form>
    );
}