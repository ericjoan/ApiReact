import axios from "axios";
import  { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
        const [data, setData] = useState([]);
        const navigate = useNavigate();

            useEffect(()=>{
                const fetchData = async () =>{
                    try{
                        const res = await axios.get('http://localhost:3000/posts');
                        setData(res.data);
                    }catch(error){
                        console.error(error);
                    }
                }; 
                fetchData();
        },[])

        const handleDelete = (id) =>{
            const confirm = window.confirm(" Woukd you like to Delete?");
            if(confirm) {
                axios.delete('http://localhost:3000/posts/' +id)
                .then(res =>{
                    location.reload();
                }).catch(err => console.log(err));
            }
        }
    return(
      
            <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
                <h1>List of Users</h1>
                <div className='w-75 rounded bg-white border shadow p-4'>
                <div className="d-flex justify-content-end">
                    <Link to="/create" className='btn btn-success'>Add +</Link>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>author</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, i) =>(
                                <tr key={i}>
                                    <td>{d.id}</td>
                                    <td>{d.title}</td>
                                    <td>{d.author}</td>
                                    <td>
                                        <Link to={`/read/${d.id}`} className="btn btn-sm btn-info me-2">Read</Link>
                                        <Link to ={`/update/${d.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                        <button onClick={e => handleDelete(d.id)} className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>  
    )   

}

export default Home