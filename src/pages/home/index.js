import React from 'react';
import Layout from './components/Layout';
import PostCard from './components/PostCard';
const Home = () => {
    return(
            <Layout>
                <PostCard />
                <PostCard />
                <PostCard />
            </Layout>
    )
 }
export default Home;