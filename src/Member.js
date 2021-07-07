import React from "react"

const Member = ({name, role, email}) => {
    return (
        <div className="member">
            <p>Name: {name}</p>
            <p>Role: {role}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default Member