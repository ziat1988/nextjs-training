import React from 'react';
import useSWR from 'swr'
const fetcher = async ()=>{
    const response = await fetch("http://localhost:3000/dashboard")
    return await response.json();
}
function DashboardSwr(props) {
    const {data,error} = useSWR('dashboard',fetcher)

    if(error) return "Error occured";
    if(!data) return null;

    return (
        <div>
            <h2>Dash board</h2>
            <p>Posts - {data.posts}</p>
            <p>Likes - {data.likes}</p>
            <p>Follower - {data.followers}</p>
            <p>Following - {data.following}</p>
        </div>
    );
}

export default DashboardSwr;