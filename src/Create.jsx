import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'

function Create(){
    const [values, setValues] = useState({
        name: '',
        lastName: '',
        dni: '',
        age: '',
        rol: ''
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
                mostrarAlerta();
                setTimeout(() => {
                  navigate('/')
                }, "3000");
            })
            .catch(err => console.log(err));
        }
    return(
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className="w-50 border gb-white shadow px-5 pt-3 pb-5 rouded">
                <h1>Add a User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' className="form-control" placeholder="Enter Name"
                        onChange={e=> setValues({...values, name: e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="author">LastName:</label>
                        <input type="text" name='lastName' className="form-control" placeholder="Enter LastName"
                        onChange={e=> setValues({...values, lastName: e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="author">DNI:</label>
                        <input type="text" name='dni' className="form-control" placeholder="Enter Dni"
                        onChange={e=> setValues({...values, dni: e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="author">Age:</label>
                        <input type="text" name='age' className="form-control" placeholder="Enter Age"
                        onChange={e=> setValues({...values, age: e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="author">Rol:</label>
                        <input type="text" name='rol' className="form-control" placeholder="Enter Rol"
                        onChange={e=> setValues({...values, rol: e.target.value})}/>
                    </div>
                    <button className="btn btn-success">Submit</button>
                    <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                </form> 
            </div>
        </div>
    )
}


export default Create