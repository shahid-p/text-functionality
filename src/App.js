import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App(props) {
  return (
  <>
<Router>
      <Navbar Webname="DeveloperMan" Aboutc="About"/>         
      <div className="container my-3">            
          <Routes>        
            <Route exact path="/" element={<TextForm heading="Please write some text"/> }>
            </Route>
          </Routes>
      </div>
      </Router>
 </>
  );
}
export default App;
