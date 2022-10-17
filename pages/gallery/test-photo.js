import React from 'react';
import Image from "next/image";
import styled from "styled-components";

const PhotoStyle = styled.div`

  width: 100%;

  > span {
    position: unset !important;
  }
  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: auto !important;
  }
`
function TestPhoto(props) {

    return(
        <PhotoStyle>
                <Image
                    //width={'100%'} height={'auto'}
                    src={`/10.jpg`}
                    alt={"full-img"}
                    layout={"fill"}
                    className={'image'}
                />
        </PhotoStyle>

    );
}

export default TestPhoto;