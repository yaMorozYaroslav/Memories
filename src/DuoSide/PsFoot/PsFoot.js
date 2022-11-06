import React from 'react';
import styles from './PsFoot.module.css';
import pic from './eye.png';
export function PsFoot(){

   const [show, setShow] = React.useState(false);
   React.useEffect(()=>{
   	const timeout = setTimeout(()=>{
   		setShow(true)
   	}, 400)
   	return()=>clearTimeout(timeout)
   }, [show])
   if(!show)return null

	return  <img className={styles.foot} alt="eye" src={pic} />
          

      }
