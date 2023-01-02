import React from 'react'
import './Loading.css'
import Spinner from 'react-bootstrap/Spinner';

const Loading = ({ size = 100}) => {
  return (
    <div className='loadingw'>
        <Spinner style={{ width: size, height: size}} animation="grow" />;
    </div>
  )
}

export default Loading;