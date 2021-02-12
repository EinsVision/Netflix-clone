import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css'
function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', transitionNavBar);
        return() => window.removeEventListener('scroll', transitionNavBar);
    }, [])

    return (
        <div className={` ${show && 'nav'}`}>
            <div className='nav__contents'>
                <img 
                     onClick={()=> history.push('/')}
                     className='nav__logo'
                     src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                     alt=''
                /> 
                <img
                     onClick={() => history.push('/profile')}
                     className='nav__avatar'
                     src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
                     alt=''
                />
            </div>
        </div>
    )
}

export default Nav
