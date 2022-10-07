import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Announcement from '../components/home/Announcement';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/home/Footer';
import Newsletter from '../components/home/Newsletter';

const PostListPage = () => {
    return (
    <>
        <Announcement />
        <HeaderContainer />
        <PostListContainer />
        <PaginationContainer />
        <Newsletter/>
        <Footer/>
    </>
    );
};

export default PostListPage;