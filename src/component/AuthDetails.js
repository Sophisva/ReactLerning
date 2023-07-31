import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const AuthDetails = () => {

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }

    }, []);


    const UserSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful');
            
        }).catch(error => console.log(error))
    }


  return (
    <div>
        {authUser ? 
            <>
            <p>{`Signed In as ${authUser.email}`}</p>
            <button className='btn btn-primary' onClick={UserSignOut}>Sign Out</button>
            </>
            :
            <p>Signed Out</p>
        }
    </div>
  )
}

export default AuthDetails