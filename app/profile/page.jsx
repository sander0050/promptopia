'use client';

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';

import Profile from '@components/profile';

const UserProfile = ({ userId, name }) => {
    const router = useRouter();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${userId}/posts`);
            const data = await response.json();

            setPosts(data);
        }

        if (userId) fetchPosts();
    }, [])

    return (
        <Profile
            name={name}
            desc='Welcome to a personalized profile page'
            data={posts} />
    )
}


export default UserProfile;