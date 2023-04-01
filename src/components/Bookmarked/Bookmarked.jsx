import React from 'react';
import Mark from '../Mark/Mark';
import './Bookmarked.css'

const Bookmarked = ({ cart }) => {

    let marked = [];

    for (const blog of cart) {
        marked = blog.title;
    }

    return (
        <div className='cart'>

            <h4>Bookmarked Blogs: {cart.length}</h4>
            {
                cart.map(mark => <Mark
                    mark={mark}
                    key={mark.id}
                ></Mark>)
            }
        </div>
    );
};

export default Bookmarked;