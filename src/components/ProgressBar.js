
import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
//import  bootstrap from '../../node_modules/bootstrap/dist/bootstrap.min.css'

const ProgressBar=({file,setFile})=>{

  const {url,progress}=useStorage(file)
 
  useEffect(()=>{
    if(url)
    {
      setFile(null)
    }
  },[url])
  
    return (

        <>

<div>
<div className='container'>
<div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{width:progress+'%',height:'25px',marginTop:'10px'}}>{progress}%</div>
</div>
       
</div>
</>

    )
}

export default ProgressBar
