import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import Axios from "axios";

function StudentList()
{
    const [arr, setArr] = useState([]);
    useEffect(() => {
        Axios.get("https://crud-deployment-backend-0mpc.onrender.com/studentRoute/")
        .then((res) => {
            if(res.status === 200) setArr(res.data);
            else Promise.reject();
        })
        .catch((err) => alert(err));
    }, []);
    const ListStudents = () => {
        return(
            arr.map((val, ind) => {
                return (
                    <ListItem obj={val} />
                )
            })
        );
    };
    return(
        <table style={{maxWidth: "60%", margin: "50px auto"}} class="table table-bordered table-striped">
            <thead>
                <tr>
                    <td class="text-center">Name</td>
                    <td class="text-center">Email</td>
                    <td class="text-center">Roll Number</td>
                    <td class="text-center">Action</td>
                </tr>
            </thead>
            <tbody>
                {ListStudents()}
            </tbody>
        </table>
    );
}

export default StudentList;