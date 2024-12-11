
import { createRoot } from 'react-dom/client'
import CourseListings from './components/CourseListings.jsx';

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';



createRoot(document.getElementById('root')).render(
    <CourseListings />
)
