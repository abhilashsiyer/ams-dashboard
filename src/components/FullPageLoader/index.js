import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import Spinner from "./../../assets/Spinner.gif";

const mapLoaderState = ({loadingData}) =>({
  loadS: loadingData.results 
 });

const FullPageLoader = () => {
  // const dispatch = useDispatch();
  const { loadS } = useSelector(mapLoaderState);

  console.log ('loadState', loadS)

  if (!loadS) return;

  return (
    <div className="loading-container">
        <div className="loading">
          <img className='spinner' src={Spinner}></img>
          {/* <h1>loading ...</h1> */}
        </div>
      </div>
  
  
  );
}

export default FullPageLoader;