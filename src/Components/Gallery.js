import React from 'react';
import gallery from './Gallery.css';

const Gallery = () => {
    return (
        <div>
            <div>
                <h4 className='text-danger'> - Video Gallery</h4>
                <h1>Visit our best video <br /> gallery</h1>

                <div className='d-flex my-5'>
                    <div className='col-md-3'>
                        <iframe width="300" height="400" src="https://www.youtube.com/embed/c1XNqw2gSbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='col-md-3'>
                        <iframe width="300" height="400" src="https://www.youtube.com/embed/c1XNqw2gSbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='d-flex'>
                        <iframe width="300" height="400" src="https://www.youtube.com/embed/c1XNqw2gSbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='col-md-4'>
                    <iframe width="300" height="400" src="https://www.youtube.com/embed/c1XNqw2gSbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Gallery;