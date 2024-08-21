// src/components/staffData.js
import React, { useState } from 'react';

const staffData = () => {
    const [staff, setStaff] = useState([]);
    const [newStaff, setNewStaff] = useState("");

    const addStaff = () => {
        setStaff([...staff, newStaff]);
        setNewStaff("");
    };

    return (
        <div>
            <h2>Staff Management</h2>
            <input
                type="text"
                value={newStaff}
                onChange={(e) => setNewStaff(e.target.value)}
                placeholder="Enter staff name"
            />
            <button onClick={addStaff}>Add Staff</button>
            <ul>
                {staff.map((member, index) => (
                    <li key={index}>{member}</li>
                ))}
            </ul>
        </div>
    );
};

export default staffData;
