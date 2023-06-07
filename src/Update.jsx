import { Link, useParams, useNavigate } from "react-router-dom";
import  { useEffect, useState } from "react";
import axios from "axios";

function Update() {
    //const [data, setData] = useState([]);
    const{id} = useParams();

    const [values, setValues] = useState({
      title: '',
      author: ''
    })
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:3000/posts/' + id)
            .then(res => {
              setValues(res.data);
        })
        .catch(err => console.log(err));              
    }, [id])

    const handleUpdate = (event) => {
      event.prevendDefault();
      axios.put('http://localhost:3000/posts/'+id, values)
            .then(res =>{
                console.log(res);
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
                <input type="text" name='author' className="form-control" placeholder="Enter Author"
                value={values.author} onChange={e=> setValues({...values, author: e.target.value})}/>
            </div>
              <button className="btn btn-success">Update</button>
              <Link to="/" className='btn btn-primary ms-3'>Back</Link>
            </form> 
      </div>
    </div>
  )
}

export default Update