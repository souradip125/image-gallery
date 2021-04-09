import React from 'react'
import useFireStore from '../hooks/useFirestore'
import NavLink from 'react'

const Imagegrid=()=>{
    const {docs}=useFireStore('images')
    console.log(docs)


return (

   


    <>

    <div className='img-grid'>
{docs && docs.map(doc=>(
    <div className='imgindividual' key={doc.id}>

  <img src={doc.url} alt="load" height='200' width='200'></img>

    </div>
))}
    </div>
    </>

)

}
export default Imagegrid
