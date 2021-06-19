import React from 'react'
import axios from 'axios'
import swal from 'sweetalert'

function Login() {
    const checkLogin = () => {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
        axios({
            url: "https://api-test-3.herokuapp.com/account/login",
            method: "POST",
            data: {
              userName: username,
              password: password,
            },
          })
            .then(function (response) {
              console.log(response.data);
              swal("Good job!", "Login Successful", "success");
            })
            .catch(function (err) {
              console.log("sai r mas");
            });
    
          
    }

    return (
        <div className="container">    
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="username" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => checkLogin()}>Submit</button>          
        </div>

    );
}

export default Login
