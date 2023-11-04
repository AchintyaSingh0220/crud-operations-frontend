import Axios from "axios";
import {Link} from "react-router-dom";

function ListItem(props)
{
    const {_id, name, email, rollNo} = props.obj;
    const handleClick = () => {
        Axios.delete("https://crud-deployment-backend-0mpc.onrender.com/studentRoute/delete-student/" + _id)
        .then((res) => {
            if(res.status === 200) {
                alert("Student details deleted successfully");
                window.location.reload();
            }
        })
        .catch(err => alert(err));
    }
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td class="d-flex justify-content-center">
            <Link class="me-5" to={"/update-student/" + _id}><button class="btn btn-success px-4">Edit</button></Link>
                <button class="btn btn-danger" onClick={handleClick}>Delete</button>
            </td>
        </tr>
    );
}

export default ListItem;