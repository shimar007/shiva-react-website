import {BrowserRouter as Router} from 'react-router-dom';
import Body from './base/Body';

function Main() {
    return (
        <Router>
            <div className="main-content">
                <Body/>
            </div>
        </Router>
    );
}
  
export default Main;