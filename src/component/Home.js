import {ArrowBack} from '@material-ui/icons';
import Logo from '../assets/images/logo.jpeg';
import {Image} from 'react-bootstrap';


const Home = () =>{
    return(
        <div className="home">
            <p><ArrowBack /> Back To Store</p>
            <Image src={Logo} className="logo" />
            <ul className="footer pl-3">
                <li>Get pre-approved instantly.</li>
                <li>Spread payment for up to six months.</li>
                <li>Provide some basic information to get started.</li>
            </ul>
        </div>
    )

}

export default Home