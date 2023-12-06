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
        <div className='Workout-wrapper'>
            <h2>Workouts</h2>
            <button className="btn btn-neutral" onClick={handleClick}>Add Activity</button>
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