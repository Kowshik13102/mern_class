import "./style/Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
   

       <img
          className="image"
          src="https://tse4.mm.bing.net/th?id=OIP.sUzerje6uBP-2OKlDF9anQHaHa&pid=Api&P=0&h=220"></img>
    
        <h1>Login</h1>

         <input type="text" placeholder="Username or Email" className="first-input" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </div>
    </div>
  );
}

export default Login;