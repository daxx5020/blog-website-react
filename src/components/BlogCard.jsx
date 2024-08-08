import React from 'react';

const BlogCard = () => {
    return (
        <div className="col-12 col-md-2 col-lg-3 mb-4">
            <div className="card border-0 shadow-lg">
              <img src="https://placehold.co/600x400" alt="" className='card-img-top' />
              <div className="card-body">
                <h2 className='h5'>Dummy Heading</h2>
                <p>Some short description</p>
                <div className="d-flex justify-content-between">
                  <a href="#" className='btn btn-dark'>Details</a>
                </div>
              </div>
            </div>
        </div>
    )
}

export default BlogCard;