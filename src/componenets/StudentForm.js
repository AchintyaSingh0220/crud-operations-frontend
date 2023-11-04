import {useEffect, useState} from "react";

function StudentForm(props)
{
    const [name, setName] = useState(props.nameValue);
    const [email, setEmail] = useState(props.emailValue);
    const [rollNo, setRollNo] = useState(props.rollNoValue);

    useEffect(() => {
        setName(props.nameValue);
        setEmail(props.emailValue);
        setRollNo(props.rollNoValue);
    }, [props.nameValue, props.emailValue, props.rollNoValue]);
    
    function handleClick()
    {
        props.getState([name, email, rollNo]);
    }
    return(
        <div style={{maxWidth: "40%", margin: "0 auto"}}>
            <input defaultValue={props.nameValue} class="form-control my-3" onChange={(event) => setName(event.target.value)} placeholder="Enter your name" name />
            <input defaultValue={props.emailValue} class="form-control my-3" onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" name />
            <input defaultValue={props.rollNoValue} class="form-control my-3" onChange={(event) => setRollNo(event.target.value)} placeholder="Enter your Roll number" name />
            <button class="btn btn-success my-3 d-block mx-auto" onClick={handleClick} type="submit">{props.children}</button>
        </div>
    );
}

export default StudentForm;