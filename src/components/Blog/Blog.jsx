import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blog.css'

const Blog = (props) => {

    const { picture1, name, title, picture2, time } = props.blog;
    const handleBookmark = props.handleBookmark;
    const markRead = props.markRead;

    return (

        <div className='blog'>

            <img src={picture1} alt="" />

            <div className='blog-info'>
                <div className='author'>
                    <img src={picture2} alt="" />
                    <div>
                        <h5>{name}</h5>
                        <p><small>Mar 14 (4 Days ago)</small></p>
                    </div>
                </div>
                <div className='bookmark'>
                    <p>{time} min read</p>
                    <button onClick={() => handleBookmark(props.blog)}><FontAwesomeIcon icon={faBookmark} /></button>
                </div>
            </div>

            <h1 className='blog-header'>{title}</h1>
            <button onClick={() => markRead(props.blog)}>Mark as read</button>

        </div>

    );
};

export default Blog;