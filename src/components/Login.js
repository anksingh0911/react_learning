import { Link } from "react-router-dom";

const  Login =()=>{
    return(
     
        <form className="w-4/12 shadow-lg mx-auto bg-gray-200 p-4 rounded-md">
            <h3 className="text-center text-2xl font-bold">Login</h3>
            <p>Email</p>
            <input type='email' className='mb-3 shadow-md w-full px-2 py-3 rounded-md'/>
            <p>Password</p>
            <input type='password' className='mb-3 shadow-md w-full px-2 py-3 rounded-md'/>
            <p>
              If you do not have account than create
              <Link className="d-block mx-2 text-blue-500" to={'/register'}>Sign Up</Link>
            </p>
            <button className="my-3 bg-green-500 shadow-md w-full px-2 py-3 rounded-md">Login</button>
        </form>
    )
}
export default Login;
