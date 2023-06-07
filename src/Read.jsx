import axios from "axios";
import  { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

  function Read() {
    const [data, setData] = useState([]);
    const{id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:3000/posts/' + id)
          .then(res => setData(res.data))
          .catch(err => console.log(err));              
    }, [])

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border gb-white shadow px-5 pt-3 pb-5 rouded">
                <h3>Detail of User</h3>
                    <div className="mb-2">
                        <strong>title: {data.title}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>author: {data.author}</strong>
                    </div>
                    <Link to={`/update/${id}`} className='btn btn-succes'>Edit</Link>
                    <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                
            </div>
      </div>
  )
}

export default Read