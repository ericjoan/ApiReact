import React from 'react'
import { Link } from "react-router-dom";

function Create(){
    return(
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className="w-50 border gb-white shadow px-5 pt-3 pb-5 rouded">
                <h1>Add a User</h1>
                <form>
                    <div className="mb-2">
                        <label htmlFor="title">Title:</label>
                        <input type="text" name='title' className="form-control" placeholder="Enter Title"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="author">Autor:</label>
                        <input type="text" name='author' className="form-control" placeholder="Enter Author"/>
                    </div>
                    <button className="btn btn-success">Submit</button>
                    <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                </form> 
            </div>
        </div>
    )
}


export default Create