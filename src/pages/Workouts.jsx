import React, { useState } from 'react'
import Activity from '../components/Activity'
import AddActivity from '../components/AddActivity'
import { useSelector } from 'react-redux'

const Workouts = () => {
    const [add, setAdd] = useState(false);
    const allactivities = useSelector((state) => state);
    const handleClick = () =>{
        setAdd(!add);
    }
    return (
        <div className='card container mx-auto mt-4 w-3/4 drop-shadow shadow-2xl bg-base-100'>
            <h2 className='text-5xl font-bold py-4 uppercase'>Workouts</h2>
            <button className="btn btn-ghost text-lg mx-auto" onClick={handleClick}>Create New Activity</button>
            {add && <AddActivity />}
            {allactivities.map((activity) => {
                    return (
                        <Activity key={activity.id}
                            id={activity.id}
                            name={activity.name}
                            duration={activity.duration} />
                    )
                })
            }
        </div>
    )
}

export default Workouts