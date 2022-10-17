import React from 'react';
import {useRouter} from "next/router";
import Image from 'next/future/image'
const myLoader = ({ src, width, quality }) => {
   return `${src}?w=${width}&q=${quality || 75}`
}

function GalleryItem(props) {
    const router = useRouter();
    const {galleryId} = router.query;
    const css = { width: '100%', height: 'auto' }
    return(
        <div style={{position:"relative"}}>

           <Image
               loader={myLoader}
               width={'300'} height={'480'}
               src={`/${galleryId}.jpg`}
               alt={"full-img"}
               style={css}
           />
        </div>
    )
}

export default GalleryItem