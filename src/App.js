import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { examInputs, teacherInputs, userInputs, bookInputs, classInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import TeacherList from "./pages/teacherList/TeacherList";
import SingleTeacher from "./pages/singleteacher/SingleTeacher";
import Attendance from "./pages/Attendance/Attendance";
import Calendar from "./pages/calendar/Calendar";
import ClassList from "./pages/classlist/ClassList";
import ExamList from "./pages/examlist/ExamList";
import ExamForm from "./pages/examform/ExamForm";
import BookList from "./pages/library/BookList";
import Message from "./pages/message/Message";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="teacher">
              <Route index element={<TeacherList />} />
              <Route path=":teacherId" element={<SingleTeacher />} />
              <Route
                path="new"
                element={<New inputs={teacherInputs} title="Add New Teacher" />}
              />
            </Route>
          </Route>
          <Route path="attendance">
              <Route index element={<Attendance />}/>
          </Route>
          <Route path="calendar">
              <Route index element={<Calendar />}/>
          </Route>
          <Route path="message">
              <Route index element={<Message />}/>
          </Route>
          <Route path="class">
              <Route index element={<ClassList/>}/>
              <Route
                path="new"
                element={<ExamForm inputs={classInputs} title="Add New Class" />}
              />
            </Route>
          <Route path="exam">
              <Route index element={<ExamList/>}/>
              <Route
                path="new"
                element={<ExamForm inputs={examInputs} title="Add New Exam" />}
              />
          </Route>
          <Route path="books">
              <Route index element={<BookList/>}/>
              <Route
                path="new"
                element={<ExamForm inputs={bookInputs} title="Add New Book" />}
              />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
