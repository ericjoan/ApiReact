import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'

function Create(){
    const [values, setValues] = useState({
        title: '',
        author: ''
    })
        const navigate = useNavigate();
        //const Swal = require('sweetalert2')

        const mostrarAlerta = () =>{

            Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'The user has been created',
                    showConfirmButton: false,
                    timer: 3000
                  })
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            axios.post('http://localhost:3000/posts', values)
            .then(res =>{
                console.log(res);
                mostrarAlerta()
                navigate('/')
            })
            .catch(err => console.log(err));
        }
    return(
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className="w-50 border gb-white shadow px-5 pt-3 pb-5 rouded">
                <h1>Add a User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="title">Title:</label>
                        <input type="text" name='title' className="form-control" placeholder="Enter Title"
                        onChange={e=> setValues({...values, title: e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="author">Author:</label>
                        <input type="text" name='author' className="form-control" placeholder="Enter Author"
                        onChange={e=> setValues({...values, author: e.target.value})}/>
                    </div>
                    <button className="btn btn-success">Submit</button>
                    <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                </form> 
            </div>
        </div>
    )
}


export default Create