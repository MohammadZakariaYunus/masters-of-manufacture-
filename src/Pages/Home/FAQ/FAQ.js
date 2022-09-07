import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className='py-12 px-12'>
            <h1 className='text-5xl font-light py-12'>Frequently Asked Question</h1>
            <div class="accordion-wrapper">
                <div class="accordion">
                    <input className='accordion-input' type="radio" name="radio-a" id="check1" checked />
                    <label class="accordion-label" for="check1">Accordion 1</label>
                    <div class="accordion-content">
                        <p>Hey there, you are watching codiesbugs</p>
                    </div>
                </div>
                <div class="accordion">
                    <input className='accordion-input' type="radio" name="radio-a" id="check2" />
                    <label class="accordion-label" for="check2">Accordion 2</label>
                    <div class="accordion-content">
                        <p>I hope you are enjoing the video, don't forget to give your feedback in comment section</p>
                    </div>
                </div>
                <div class="accordion">
                    <input className='accordion-input' type="radio" name="radio-a" id="check3" />
                    <label class="accordion-label" for="check3">Accordion 3</label>
                    <div class="accordion-content">
                        <p>If you liked then don't forget to subscribe the channel for latest videos. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;