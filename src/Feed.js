import React, { useState, useEffect } from 'react';
import './Feed.css';
import Post from './Post';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    const limit = 5;
    const baseUrl = 'https://www.reddit.com';

    useEffect(() => {
        const getApiData = async () => {
            const response = await fetch(
                `${baseUrl}/r/popular.json?limit=${limit}`
            ).then((response) => response.json());

            setPosts(response.data.children);
        };

        getApiData();
    }, []);

    return (
        <div className="feed">
            {posts.map(({ data }) => (
                <Post baseUrl={baseUrl} data={data} />
            ))}
        </div>
    );
};

export default Feed;
