import  React, { useState } from 'react'
import ProgressBar from './ProgressBar'
//import ProgressBar from'../components/ProgressBar'

const UploadForm=()=>{
    
    const [file,setFile]=useState(null)
    const types=['image/png','image/jpeg','image/jpg']
    const [error,setError]=useState(null)
const changeHandler=(e)=>{
    console.log('changed')
    let selected=e.target.files[0]
    console.log(selected)
    if(selected && types.includes(selected.type))
    {
        setFile(selected)
        setError('')
    }
    else{
        setFile(null)
        setError('Please Select image type files')
    }

}


    return(
<>

<center>
   <label>Upload<span> Your </span>Picture <span>Here</span> 👇</label> <pre>  </pre>  <input type="file" className="sty" onChange={changeHandler}/>
   
</center>
<div className="output">
    { error && <center><div className="error">{error}</div></center>}
    { file && <center><div className="FileName">{file.name}</div></center>}
   {file && <ProgressBar file={file} setFile={setFile}/>}

</div>


</>
    );
}
export default UploadForm




