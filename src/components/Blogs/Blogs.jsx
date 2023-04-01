import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarked from '../Bookmarked/Bookmarked';
import Time from '../Time/Time';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [cart, setCart] = useState([])
    const [mark, setMark] = useState([])


    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleBookmark = (blog) => {

        const exist = cart.filter(item => item.id == blog.id);
        if(exist.length) {
            // alert('Already exists');
            toast.error("Already exists!!",  {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return;
        }
        const newCart = [...cart, blog]
        console.log(newCart, blog)
        setCart(newCart)
    }

    const markRead = (blog) => {

        const newMark = [...mark, blog]
        console.log(newMark)
        setMark(newMark)

    }

    return (

        <div className='blogs-container'>
            <div className="blogs-info-container">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleBookmark={handleBookmark}
                        markRead={markRead}
                    ></Blog>)
                }
            </div>

            <div className="bookmark-container">
                <Time mark={mark}></Time>
                <Bookmarked cart={cart}></Bookmarked>
            </div>

            <div className='qaPart'>
                <h2>Question answer part</h2>
                <h4>1. Differences between props and sate</h4>
                <p><b>Answer:</b> Props: Props are the ways to pass data. They are read-only and immutable. It make flexibility in using components. <br /> State: It is the way to manage internal data of a component. State is private to a component.  </p>
                <h4>2. How useState works?</h4>
                <p><b>Answer:</b> It is a build-in react hook. It allows to add state to a functional component. Call the useState hook with an initial value to declare a state variable and a function to update it. The useState hook returns an array containing the current value of the state variable and a function to update it</p>
                <h4>3. What does useEffect do including data load?  </h4>
                <p><b>Answer:</b> useEffect is a built-in React hook. Including data load it also used in fetching data from an API, updating the document title or setting up event listeners.</p>
                <h4>1. How does react work?</h4>
                <p><b>Answer:</b> React is a JavaScript library. It works as like as JavaScript function. When we build an application with React, we write components that represent different parts of our application's user interface. Each component defines a set of properties and state that determine how the component should be rendered.</p>
            </div>

        </div>
    );
};

export default Blogs;