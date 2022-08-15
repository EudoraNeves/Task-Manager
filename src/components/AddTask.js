import React from 'react'
import { useState } from 'react';

const AddTask = ( {onAddTask} ) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState('false');

    const onSubmit = (ev) => {
        ev.preventDefault();
        if(!text){
            alert('Please add a task!');
            return;
        }
        onAddTask({text, day, reminder}); //Object { text: "kick someone's add", day: "16/08/2022 08:00", reminder: "false" }
        setText('');
        setDay('');
        setReminder(false);
    }


    return (
        <form action="" className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Task</label>
                <input type="text" name="text" id="" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="day">Day & Time</label>
                <input type="text" name="day" id="" placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set Reminder</label>
                <input type="checkbox" name="reminder" id="" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Save Task" className='btn btn-block' />
        </form>
    )
}

export default AddTask