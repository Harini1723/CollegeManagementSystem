// src/components/StudentData.js
import React, { useState } from 'react';

const StudentData = () => {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState("");

    const addStudent = () => {
        setStudents([...students, newStudent]);
        setNewStudent("");
    };

    return (
        <div>
            <h2>Student Management</h2>
            <input
                type="text"
                value={newStudent}
                onChange={(e) => setNewStudent(e.target.value)}
                placeholder="Enter student name"
            />
            <button onClick={addStudent}>Add Student</button>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>{student}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentData;
