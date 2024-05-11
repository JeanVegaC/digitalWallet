import React, { useEffect, useState } from "react";

export default function LoginForm() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log('user', user);
    }, [user]);

    return (
        <form style={styles.form}> 
            <h2 className="text-purple-light font-sans text-3xl">Welcome to <label style={{color: '#fff'}}>Login</label></h2>
            <input className="font-thin focus:outline-none" style={styles.input} placeholder="Email address" onChange={(e)=> setUser(e.target.value)} value={user}></input>
            <input type="password" className="font-thin focus:outline-none" style={styles.input} placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password}></input>
            <button style={styles.button}>LOG IN</button>
        </form>
    );
}

const styles = {
    form: {
        display: 'flex',
        flexFlow: 'column nowrap',
        height: '40%',
        width: '30%',
        borderRadius: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(3px)',
        boxShadow: '0px 1px 19px 5px rgba(0,0,0,0.21)',
    },

    input: {
        height: '40px',
        width: '280px',
        margin: '0',
        border: 'none',
        background: 'none',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: 'rgb(57, 57, 80)',
        padding: '10px 15px',
        borderRadius: '.5rem',
        verticalAlign: 'middle',
    },

    button: {
        backgroundColor: '#fff',
        borderRadius: '2rem',
        height: '40px',
        width: '150px',
        color: '#000',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: '1rem'
    }

}
