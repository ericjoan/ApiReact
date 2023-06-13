import { Link, useParams, useNavigate } from "react-router-dom";
import  { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

function Update() {
    // se usa para obtener el parametro id de la URL.
    const{id} = useParams();
    const navigate = useNavigate();
    // useState define el estado inicial de las entradas del formulario
    // setValues actualiza el estado
    const [values, setValues] = useState({
      name: '',
      lastName: '',
      dni: '',
      age: '',
      rol: ''
      
    });

    const mostrarAlerta = () =>{

        Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'The user has been Updated',
                showConfirmButton: false,
                timer: 2000
              })
      }

    useEffect(()=>{
        axios.get('http://localhost:3000/posts/'+ id)
            .then(res => {
              setValues(res.data);
        })
        .catch(err => console.log(err));              
    }, [])
    // handleUpdate  maneja el envío del formulario
    
    const handleUpdate = (event) => {
      event.preventDefault();
      axios.put('http://localhost:3000/posts/'+id, values)
            .then(res =>{
                console.log(res);
                // navega de regreso a la pagina e incio
                mostrarAlerta();
                setTimeout(() => {
                  navigate('/')
                }, "3000");
                
            })
            .catch(err => console.log(err));
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className="w-50 border gb-white shadow px-5 pt-3 pb-5 rouded">
        <h1>Update a User</h1>
        <form onSubmit={handleUpdate}>
            <div className="mb-2">
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' className="form-control" placeholder="Enter Name"
                value={values.name} onChange={e=> setValues({...values, name: e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="lastName">LastName:</label>
                {/* los controladores de eventos onChange actualizan el estado mediante la función setValues ​​y la sintaxis de propagación (...valores). 
                Esto asegura que el estado se actualice correctamente sin sobrescribir las otras propiedades del objeto de valores                 */}
                <input type="text" name='lastName' className="form-control" placeholder="Enter LastName"
                value={values.lastName} onChange={e=> setValues({...values, lastName: e.target.value})}/>
            </div>
            <div className="mb-2">
                <label htmlFor="title">DNI:</label>
                <input type="text" name='dni' className="form-control" placeholder="Enter DNI"
                value={values.dni} onChange={e=> setValues({...values, dni: e.target.value})}/>
            </div>
            <div className="mb-2">
                <label htmlFor="title">Age:</label>
                <input type="text" name='age' className="form-control" placeholder="Enter Age"
                value={values.age} onChange={e=> setValues({...values, age: e.target.value})}/>
            </div>
            <div className="mb-2">
                <label htmlFor="title">Rol:</label>
                <input type="text" name='rol' className="form-control" placeholder="Enter Rol"
                value={values.rol} onChange={e=> setValues({...values, rol: e.target.value})}/>
            </div>
                {/* Boton de envio para activar la actualizacion */}
              <button className="btn btn-success" >Update</button>
              {/* otra forma de hacer el boton Update :
              <button onClick={handleUpdate} className="btn btn-success">Update</button> */}
              
              <Link to="/" className='btn btn-primary ms-3'>Back</Link>
            </form> 
      </div>
    </div>
  )
}

export default Update