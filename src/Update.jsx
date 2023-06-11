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
      title: '',
      author: ''
    });

    const mostrarAlerta = () =>{

        Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'The user has been Updated',
                showConfirmButton: false,
                timer: 3000
              })
      }

    useEffect(()=>{
        axios.get('http://localhost:3000/posts/'+id)
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
                mostrarAlerta();
                // navega de regreso a la pagina e incio
                navigate('/')
            })
            .catch(err => console.log(err));
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className="w-50 border gb-white shadow px-5 pt-3 pb-5 rouded">
        <h1>Update a User</h1>
        <form onSubmit={handleUpdate}>
            <div className="mb-2">
                <label htmlFor="title">Title:</label>
                <input type="text" name='title' className="form-control" placeholder="Enter Title"
                value={values.title} onChange={e=> setValues({...values, title: e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="author">Author:</label>
                {/* los controladores de eventos onChange actualizan el estado mediante la función setValues ​​y la sintaxis de propagación (...valores). 
                Esto asegura que el estado se actualice correctamente sin sobrescribir las otras propiedades del objeto de valores                 */}
                <input type="text" name='author' className="form-control" placeholder="Enter Author"
                value={values.author} onChange={e=> setValues({...values, author: e.target.value})}/>
            </div>
                {/* Boton de envio para activar la actualizacion */}
              <button className="btn btn-success">Update</button>
              {/* otra forma de hacer el boton Update :
              <button onClick={handleUpdate} className="btn btn-success">Update</button> */}
              <Link to="/" className='btn btn-primary ms-3'>Back</Link>
            </form> 
      </div>
    </div>
  )
}

export default Update