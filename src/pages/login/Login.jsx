import { useState } from "react";
import "./login.scss"
import {auth} from '../../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [error,setError] = useState(false)
  const[email, setEmail]=useState("")
  const[password, setPassword]=useState("")

  const navigate = useNavigate()

  const handleLogin = (e) =>{
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    navigate("/")
    
  })
  .catch((error) => {
    setError(true);
  });

  }
  

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="image-container">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0LRWk2RGptqkTlHzbYkJ-nM5qpyVTlMDjzQ&usqp=CAU' alt="Logo" className="image" />
        </div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" onChange={e=>setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password"  onChange={e=>setPassword(e.target.value)}/>
          </div>
          <button type="submit">Login</button>
          {error && <span className="span">Wrong email or password!</span>}
        </form>
      </div>
    </div>
  );
}

export default Login