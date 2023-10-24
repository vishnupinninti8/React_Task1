import React, { useState } from 'react'
import './WordCounter.css';

const WordCounter = () => {

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const [text, setText] = useState('');


    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-7 shadow p-3 mb-5  rounded">
                    <h1>Responsive Paragraph Word Counter</h1>
                    <div className="content">
                        <textarea name="para" onChange={handleOnChange} id="para" cols="70" rows="7" placeholder='Type something here to count the number of words.'></textarea>
                        <span>Word Count: {text.split(' ').length - 1}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WordCounter;
