import React, {useState} from 'react';
import Main from "./sections/Main.jsx";
import Nav from "./sections/Nav.jsx";
import ScrollDown from "./components/ScrollDown.jsx";
import MyPortfolio from "./sections/MyPortfolio.jsx";
import Skills from "./sections/Skills.jsx";
import Contacts from "./sections/Contacts.jsx";



const App = () => {

    const [isEnglish, setIsEnglish] = useState(true)

    // const [count, setCount] = useState(0);
    //
    // function handleClick() {
    //     setCount(count + 1);
    // }


    const handleClick = () => {
        isEnglish ? setIsEnglish(false) : setIsEnglish(true)
    }

    return (
        <>
            <Nav isEnglish={isEnglish} />
            <Main isEnglish={isEnglish} onClick={handleClick} />
            <MyPortfolio isEnglish={isEnglish}/>
            <Skills isEnglish={isEnglish}/>
            <Contacts isEnglish={isEnglish}/>

        </>
    );
};

export default App;