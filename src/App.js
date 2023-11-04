import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./componenets/NavigationTab"
import CreateStudent from './componenets/CreateStudent';
import StudentList from "./componenets/StudentList"
import UpdateStudent from './componenets/UpdateStudent';

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CreateStudent/>}/>
          <Route path="/create-student" element={<CreateStudent/>}/>
          <Route path="/student-list" element={<StudentList/>}/>
          <Route path="/update-student/:id" element={<UpdateStudent/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
