import React from 'react'
import { useDispatch } from 'react-redux'

const Activity = ({ id, name, duration }) => {
    const dispatch = useDispatch();
    const deleteActivity = () => {
        dispatch({
            type: "DELETE_ACTIVITY",
            payload: {
                id: id,
            }
        })
    };
    return (
        <div className='my-1'>
            <div className='flex flex-col my-4'>
                <div>
                    <span className='font-bold '>Activity: </span>
                    <span className='text-sm'>{name}</span>
                </div>
                <div>
                    <span className='font-bold'>Duration: </span>
                    <span className='text-sm'>{duration}</span>
                </div>
            </div>
            <button className="btn btn-error text-md w-32" onClick={deleteActivity}>Delete</button>
        </div>
    )
}

export default Activity