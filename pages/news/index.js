import React from 'react';

function News({news}) {
    return (
        <ul>
            {news.map(item=><li key={item.id}>{item.title}</li>)}
        </ul>

    );
}


export async function getServerSideProps(context){
    console.log(context);
    const {params, req,res} = context;
    console.log(req)
    const response = await fetch("http://localhost:3000/news")
    const data = await response.json()
    return {
        props:{
            news: data
        }
    }
}

export default News;
