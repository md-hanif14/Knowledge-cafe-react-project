import React from 'react';
import './Time.css'

const Time = ({ mark }) => {

    let time = 0;
    for (const blog of mark) {
        time = time + blog.time;
        console.log(blog.time)
    }
    return (
        <div className='time'>
            <p>Spent time on read : {time} </p>
        </div>
    );
};

export default Time;