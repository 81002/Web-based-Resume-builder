import { React, useContext } from 'react'
//import Introduction from '../../Components/Intro/Introduction'
import ResumeContext from './Context/ResumeContext';
import BuilderArea from './BuilderArea';
//import Theme1 from './Theme1/Theme1'
import Theme10 from './Theme10/Theme10';


const Home = () => {
    const { currentTheme, showComponent, themeData, componentRef } = useContext(ResumeContext);

    return (
        <>
            {/*
                !showComponent && <Introduction />
    */}
            {
                (!showComponent && currentTheme === 'Theme10') && <BuilderArea theme={<Theme10 componentRef={componentRef} themeData={themeData} />} />
}
            {/*
                (!showComponent && currentTheme === 'Theme2') && <BuilderArea theme={<Theme2 componentRef={componentRef} themeData={themeData} />} />
*/}
         
        </>
    )
}

export default Home
