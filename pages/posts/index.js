import React from "react";
import Link from "next/link";

function Posts({posts}) {
  return(
      <div>
        <ul>
          {posts.map(item=> <li key={item.id}><Link href={`/posts/${item.id}`}>{item.title}</Link></li>)}
        </ul>
      </div>
  );
}

export default Posts;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data
    },
  };
}
