import StudentForm from "./StudentForm";
import {useState} from "react";
import axios from "axios";

function CreateStudent()
{
    const [arr, setArr] = useState([]);
    const getState = (childData) =>
    {
        setArr(childData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {name: arr[0], email: arr[1], rollNo: arr[2]};
        console.log(data);
        axios.post("https://crud-deployment-backend-0mpc.onrender.com/studentRoute/create-student", data)
        .then((res) => {
            if(res.status === 200) alert("Record created successfully");
            else Promise.reject();
        })
        .catch(res => alert(res));
        event.target.reset();
    };
    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} nameValue="" emailValue="" rollNoValue="">Create Student</StudentForm>
        </form>
    );
}

export default CreateStudent;