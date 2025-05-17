import React from 'react';

const Contacts = () => {
    return (
        <div id='contacts' className='contactsWrapper w-full flex flex-col items-center mt-20 text-white'>
            <div className="text-4xl">
                Have questions or ideas? Let's talk!
            </div>
            <div className="mt-5 flex flex-col gap-2">
                <span>My phone number: +7-925-943-0423.</span>
                <span>My Email: alexkir2304@gmail.com.</span>
            </div>
            <div className="contactsForm-wrapper lg:w-1/3 w-2/3 mt-10 p-5 bg-contacts-bg rounded-2xl">
                <div className="contactsForm  ">
                    <form action="" className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-2 '>
                            <label htmlFor="">Your name</label>
                            <input type="text" className='bg-input-bg p-2 rounded-md'/>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="">Your Email</label>
                            <input type="e-mail" className='bg-input-bg p-2 rounded-md' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="">Your message</label>
                            <textarea className='bg-input-bg p-2 rounded-md h-[30vh]'/>
                        </div>
                        <button type='submit' className='bg-input-bg p-2 rounded-md w-1/3 m-auto cursor-pointer'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contacts;