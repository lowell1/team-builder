import React, {useState} from "react";

const Form = ({addNewMember}) => {

    const [member, setMember] = useState({name: "", email: "", role: ""});

    const HandleSubmit = e => {
        e.preventDefault();
        addNewMember(member);
        setMember({name: "", email: "", role: ""});
    }

    const HandleChange = e => {
        setMember({...member, [e.target.name]: e.target.value});
    }

    return (
        <form className="memberForm" onSubmit={e => HandleSubmit(e)}>
            <label>
                Enter name:
                <input name="name" type="text" value={member.name} onChange={e => HandleChange(e)}/>
            </label>
            <label>
                Enter email:
                <input name="email" type="email" value={member.email} onChange={e => HandleChange(e)}/>
            </label>
            <label>
                Enter role:
                <input name="role" type="text" value={member.role } onChange={e => HandleChange(e)}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default Form;