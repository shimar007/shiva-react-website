import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function Main() {
    return (
        <Router>
            <div className="main-content">
                <Header/>
                <Body/>
                <Footer/>
            </div>
        </Router>
    );
}
  
export default Main;