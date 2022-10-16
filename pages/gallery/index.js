import React from 'react';
import Image from "next/image";

function GalleryList(props) {

    const listIndex = [...Array(10).keys()].map(i=>(++i).toString())

    return (
        <div>
            {listIndex.map(i=> <Image key={i}
                                      src={`/${i}.jpg`}
                                      width={'280'} height={"420"}
                                      alt={"pic"}/>)}
        </div>
    );
}

export default GalleryList;