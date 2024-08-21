// src/components/courseData.js

import React, { useState } from 'react';

const courseData = () => {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState("");

    const addCourse = () => {
        setCourses([...courses, newCourse]);
        setNewCourse("");
    };

    return (
        <div>
            <h2>Course Management</h2>
            <input
                type="text"
                value={newCourse}
                onChange={(e) => setNewCourse(e.target.value)}
                placeholder="Enter course name"
            />
            <button onClick={addCourse}>Add Course</button>
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                ))}
            </ul>
        </div>
    );
};

export default courseData;
