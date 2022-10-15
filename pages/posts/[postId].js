import React from 'react';
import {useRouter} from "next/router";
function PostItem({post}) {
    const router = useRouter();
    if(router.isFallback){
        return <p>Loading ...</p>
    }
    return(
        <div>
            <h3>{post.id} {post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
}

export default PostItem;


export async function getStaticProps(context) {
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();
    if(!data.id){
        return{
            notFound: true
        }
    }
    return {
        props: {
            post: data
        },
    };
}


export async function getStaticPaths() {
    return {
        paths: [{ params: { postId: '1' } }, { params: { postId: '2' } },{ params: { postId: '3' } }],
        fallback: true, // can also be true or 'blocking'
    }
}
