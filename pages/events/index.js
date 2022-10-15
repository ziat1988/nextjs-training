import React, {useState} from 'react';
import { useRouter } from 'next/router'

function Events({initEvents}) {

    const [events, setEvents] = useState(initEvents);
    const router = useRouter();
    const handleFilter = async (e)=>{
        const response = await fetch("http://localhost:3000/events?category=sports")
        const data = await response.json();
        setEvents(data);
        await router.push("/events?category=sports", undefined, {shallow: true})
    }
    return (
        <div>
            <h2>List of events</h2>
            <div>
                <button type={"button"} onClick={handleFilter}>Filter demo</button>
            </div>
            <ul>
                {events.map(item=><li key={item.id}>
                    {item.id} {item.title}, {item.date} | {item.category}
                </li>)}
            </ul>
        </div>
    );
}

export async function getServerSideProps(context){
    const {query} = context;
    let queryString = Object.keys(query).length !== 0 ? Object.keys(query).map(key => key + '=' + query[key]).join('&') : "";
    if(queryString) queryString = "?" + queryString;
    const response = await fetch(`http://localhost:3000/events${queryString}`)
    const data = await response.json()
    return {
        props: {
            initEvents: data
        }
    }
}

export default Events;