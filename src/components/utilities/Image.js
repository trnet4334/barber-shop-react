import React from 'react';
import LazyLoad from 'react-lazyload';

const Image = (props) => {
  const ImgPlaceholder = () => (
    <div
      className="w-full h-full absolute inset-0 bg-cover animate-imageLoading"
    />
  )

  return (
    <div className={`${props.width} ${props.height} ${props.position} relative`}>
      <LazyLoad
        height='100%'
        className="w-full h-full absolute left-0"
        offset={[-200, 0]}
        placeholder={<ImgPlaceholder/>}
        debounce={50}
      >
        <div
          role="img"
          alt={props.alternate}
          className={`${props.source} ${props.backgroundFeature} w-full h-full`}
        />
      </LazyLoad>
    </div>
  )
}

export default Image
