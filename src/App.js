import logo from './logo.svg';
import './App.css';
import UploadForm from './components/UploadForm'
import PropTypes from 'prop-types'
import Imagegrid from './components/Imagegrid';

//import ProgressBar from './components/ProgressBar'
//import bootstrap from '../node_modules/bootstrap/dist/boostrap.min.css'


function App() {
  return (

<>


<center>
  <h1>ImageGallery</h1>
</center>
<UploadForm/>
<Imagegrid/>
</>

      );
}

export default App;
