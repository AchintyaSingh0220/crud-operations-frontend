import { useParams } from "react-router-dom";
import StudentForm from "./StudentForm";
import {useEffect, useState} from "react";
import Axios from "axios";


function UpdateStudent()
{
    const {id} = useParams();

    const [initialValue, setInitialValue] = useState({name: "", email: "", rollNo: ""});
    const [newdata, setData] = useState([]);
    const getState = (childData) =>
    {
        setData(childData);
    }

    useEffect(() => {
        Axios.get("https://crud-deployment-backend-0mpc.onrender.com/studentRoute/update-student/" + id)
        .then((res) => {
            if(res.status === 200) {
                const {name, email, rollNo} = res.data;
                setInitialValue({name, email, rollNo});
            } else Promise.reject();
        })
        .catch(err => alert(err));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {name: newdata[0], email: newdata[1], rollNo: newdata[2]};
        Axios.put("https://crud-deployment-backend-0mpc.onrender.com/studentRoute/update-student/" + id, data)
        .then((res) => {
            if(res.status === 200) alert("Record updated successfully");
            else Promise.reject();
        })
        .catch(res => alert(res));        
    };
    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} nameValue={initialValue.name} emailValue={initialValue.email} rollNoValue={initialValue.rollNo}> Update Student </StudentForm>
        </form>
    );
}

export default UpdateStudent;