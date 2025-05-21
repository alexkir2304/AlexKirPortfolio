import React from 'react';
import {textContent} from "../constants/index.js";

const Contacts = ({isEnglish}) => {
    return (
        <div id='contacts'
             className='contactsWrapper relative w-full flex flex-col items-center mt-20 mb-20 text-white'>



            <span className='text-4xl mt-5 text-center'>
                {isEnglish ? textContent.contacts.text1.eng : textContent.contacts.text1.rus}
            </span>
            <span className='text-2xl mt-2'>
                {isEnglish ? textContent.contacts.text2.eng : textContent.contacts.text2.rus}
            </span>
            <span className='text-2xl mt-2'>
                {isEnglish ? textContent.contacts.text3.eng : textContent.contacts.text3.rus}
            </span>

            <div className="contactsForm-wrapper lg:w-1/3 w-2/3 mt-10 p-5 bg-contacts-bg rounded-2xl">
                <div className="contactsForm  ">
                    <form action="" className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-2 '>
                            <label htmlFor="">
                                <span>
                            {isEnglish ? textContent.contacts.text4.eng : textContent.contacts.text4.rus}
                                </span>
                            </label>
                            <input type="text" className='bg-input-bg p-2 rounded-md'/>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="">
                                <span>
                            {isEnglish ? textContent.contacts.text5.eng : textContent.contacts.text5.rus}
                                </span>
                            </label>
                            <input type="e-mail" className='bg-input-bg p-2 rounded-md'/>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="">
                                <span>
                            {isEnglish ? textContent.contacts.text6.eng : textContent.contacts.text6.rus}
                                </span>
                            </label>
                            <textarea className='bg-input-bg p-2 rounded-md h-[30vh]'/>
                        </div>
                        <button type='submit' className='bg-input-bg p-2 rounded-md w-1/3 m-auto cursor-pointer '>
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <a href="#" className='absolute bottom-5 right-2 rotate-180 w-1/6 scale-x-40 '>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 500 100" scale={0.1}>
                        <path
                            d="m0 0 240 100M500 .6 240 100"
                            style={{
                                fill: "#90dff3",
                                stroke: "#90dff3",
                            }}
                        />
                    </svg>
                </div>

            </a>

        </div>
    );
};

export default Contacts;