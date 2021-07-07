import React, {useState} from 'react';
import './App.css';
import Form from "./Form";
import Member from "./Member";

function App() {
  const [members, setMembers] = useState([]);

  const addNewMember = newMember => {
    setMembers([...members, newMember]);
    console.log("members = ", members);
  }

  return (
    <div className="app">
      <Form addNewMember={addNewMember}/>
      {members.map((mem, idx) => {
        return <Member key={idx} name={mem.name} role={mem.role} email={mem.email}/>;
      })}
    </div>
  );
}

export default App;
