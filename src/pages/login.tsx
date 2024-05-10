import { useEffect, useState } from "react"
export default function LoginForm() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log('user', user);
    }, [user]);

    return (
        // <form className="flex h-2/5 w-1/3 rounded-2xl flex-col items-center justify-center gap-4 " style={styles.form}> 
        //     <h2 className="font-sans text-white">Login</h2>
        //     <input className="text-white h-8 w-60 m-0 border-0 bg-inherit text-xs py-1 px-3 rounded-sm placeholder:text-xs focus:outline-none" style={styles.input} placeholder="Email addreess" onChange={(e: string)=> setUser(e)} value={user}></input>
        //     <input className="text-white h-8 w-60 m-0 border-0 bg-inherit text-xs py-1 px-3 rounded-sm placeholder:text-xs focus:outline-none" style={styles.input} placeholder="passwod"></input>
        //     <button className="bg-white rounded-2xl h-10 w-36 text-black font-bold" data-confetti-button>LOG IN</button>
        // </form>
        <form style={styles.form}> 
            <h2 className="text-purple-light font-sans text-3xl">Welcome to <label style={{color: '#fff'}}>Login</label></h2>
            <input className="font-thin placeholder:text-lg focus:outline-none" style={styles.input} placeholder="Email addreess" onChange={(e: string)=> setUser(e)} value={user}></input>
            <input type="password" className="font-thin placeholder:text-lg focus:outline-none" style={styles.input} placeholder="passwod"></input>
            <button style={styles.button}>LOG IN</button>
        </form>
    )
    
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
        height: '45px',
        width: '280px',
        margin: '0',
        border: 'none',
        background: 'none',
        fontSize: '1.3rem',
        color: '#fff',
        backgroundColor: 'rgb(57, 57, 80)',
        padding: '10px 15px',
        borderRadius: '.5rem',
    },

    button: {
        backgroundColor: '#fff',
        borderRadius: '2rem',
        height: '40px',
        width: '150px',
        color: '#000',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
    }

}