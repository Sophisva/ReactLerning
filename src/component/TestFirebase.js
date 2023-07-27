import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyBySc2AIbrY5QDtYKD7OK92ulQtNY3oG8Y",
    authDomain: "basic-firebase-78fab.firebaseapp.com",
    projectId: "basic-firebase-78fab",
    storageBucket: "basic-firebase-78fab.appspot.com",
    messagingSenderId: "120852981813",
    appId: "1:120852981813:web:63700c7244a845b8b0297c",
    measurementId: "G-6K2XP9R8W4"

};

function TestFirebase() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        async function fetchEmployees() {
            const empCol = collection(db, 'employees');
            const empSnapshot = await getDocs(empCol);
            setData(empSnapshot);
        }

        fetchEmployees();
    }, []);

    const showData = (employee) => {
        console.log(employee.data());
    }

    console.log(data);
    data.forEach(employee =>{
        showData(employee)
    })

  

    return (
        <div>
            <button className='btn btn-success'><b>OK</b></button>
        </div>
    );
}

export default TestFirebase;
