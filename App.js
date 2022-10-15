import logo from './logo.svg';
import './App.css';

function App() {
  const courses = [
    { id: 1, title: "African History" },
    { id: 2, title: "Greek II" },
    { id: 3, title: "Basic Chemistry" } ];
  return (
    <ol>
      {courses.map(course =>
        <li key={course.id}>
          {course.title}
        </li>)}
    </ol>
  );
}


export default App;
