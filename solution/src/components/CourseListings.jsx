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

    console.log(courses);

    return <div style={{textAlign: "center", alignItems: "center"}}>
        <h1>Available Courses</h1>
        <br/>
        <div style={{maxWidth: "40rem", margin: "auto"}}>
            {
                courses.map(c => <Course key={c.id} {...c}/>)
            }
        </div>
    </div>
}