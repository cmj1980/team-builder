import React, { useState } from 'react';

import './App.css';
import data from './componets/Data/Data'
import Form from "./componets/Form"



function App() {
   const [team, updateTeam] = useState(data);
   const [memberToEdit, updateMemberToEdit] = useState({ name: ""});

   const handleSubmit = (evt, member) => {
     evt.preventDefault();
     updateTeam([ ...team,member]);
   };
   const editMember = member => {
    console.log("Edit this member: ", member);
  };

  return (
    <>
    <table className="content-table">
    <thead className="team-list">
      <tr>
        <th className='name'>Name</th>
        <th className='email'>Email</th>
        <th className='phone'>Phone</th>
        <th className='role'>Role</th>
      </tr>
      {team.map(member => {
        return (
          <tr
           key={member.email}
           onClick={evt => updateMemberToEdit(member)} >
             <td>{member.name}</td>
             <td>{member.email}</td>
             <td>{member.phone}</td>
             <td>{member.role}</td>
           </tr>
        );
      })}
    </thead>
    </table>
    <Form
    teamList={team}
    handleSubmit={handleSubmit}
    memberToEdit={memberToEdit}
    editMember={editMember}
    />
    </>
    
  );
}

export default App;
