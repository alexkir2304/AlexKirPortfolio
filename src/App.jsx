import React from 'react';
import Main from "./sections/Main.jsx";
import Nav from "./sections/Nav.jsx";
import ScrollDown from "./components/ScrollDown.jsx";
import MyPortfolio from "./sections/MyPortfolio.jsx";
import Skills from "./sections/Skills.jsx";
import Contacts from "./sections/Contacts.jsx";



const App = () => {
    return (
        <>
            <Nav/>
            <Main/>
            <MyPortfolio/>
            <Skills/>
            <Contacts/>

        </>
    );
};

export default App;