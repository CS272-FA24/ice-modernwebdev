import { useEffect, useState } from "react"
import Course from "./Course";

export default function CourseListings(props) {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("https://cs272.cs.wisc.edu/rest/f24/ice/courses")
        .then(res => res.json())
        .then(data => {
            setCourses(data);
        })
    }, []);

    return <div style={{textAlign: "center", alignItems: "center"}}>
        <h1>Available Courses</h1>
        <Course/>
        <Course/>
    </div>
}