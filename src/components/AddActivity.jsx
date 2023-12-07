import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
const AddActivity = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        duration: "",
    });
    const handleChange = (e) => {
        e.persist();
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const addActivity = () => {
        dispatch({
            type: "CREATE_ACTIVITY",
            payload: {
                name: data.name,
                duration: data.duration,
            },
        })
    }
    return (
        <div className='flex flex-col justify-center items-center '>
            <label className="form-control w-full max-w-xs my-1">
                <div className="label">
                    <span className="label-text">Activity Name?</span>
                </div>
                <input type="text" name="name" placeholder="Enter Name..."
                    className="input input-bordered w-full max-w-xs focus:bg-base-200 focus:outline-0"
                    onChange={(e) => handleChange(e)} />
                <div className="label">
                    <span className="label-text">Activity Duration?</span>
                </div>
                <input type="text" name="duration" placeholder="Enter Duration..."
                    className="input input-bordered w-full max-w-xs focus:bg-base-200 focus:outline-0"
                    onChange={(e) => handleChange(e)} />
            </label>
            <button className="btn btn-success mt-3 w-32" onClick={addActivity}>Add Activity</button>
        </div>
    )
}

export default AddActivity