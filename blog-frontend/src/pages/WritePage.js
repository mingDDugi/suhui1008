import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import Footer from '../components/home/Footer';


const WritePage = () => {
    return (
        <>
        <HeaderContainer />
         <Responsive>
            <EditorContainer />
            <TagBoxContainer />
            <WriteActionButtonsContainer />
            <br/>
            <br/>
        </Responsive>
        <Footer />
        </>
    );
};

export default WritePage;