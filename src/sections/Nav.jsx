import React from 'react';

const Nav = () => {
    return (
        <nav className='absolute top-0 w-full z-20'>
            <div className="navWrapper w-4/6 mx-auto mt-10 ">

                <ul className='flex justify-between'>
                    <li key={'1'} >
                        <a href="#" className='group' >
                            <span className='main-item_text'>
                                HOME
                            </span>
                            <span className='underline'>
                            </span>
                        </a>
                    </li>
                    <li key={'2'} >
                        <a href="#work" >
                            <span className='main-item_text'>
                                WORK
                            </span>
                            <span className='underline'>
                            </span>
                        </a>
                    </li>
                    <li key={'3'} >
                        <a href="#" >
                            <span className='main-item_text'>
                                SKILLS
                            </span>
                            <span className='underline'>
                            </span>
                        </a>
                    </li>
                    <li key={'4'} >
                        <a href="#" >
                            <span className='main-item_text'>
                                CONTACTS
                            </span>
                            <span className='underline'>
                            </span>
                        </a>
                    </li>
                </ul>


            </div>
        </nav>
    );
};

export default Nav;