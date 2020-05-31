import React,{Component} from 'react';
import '../style/formlogin.css'
class FormLogin extends Component {
    render(){
        return(
            <div className="FormLogin">
                <h1>Sign in</h1>
                <form className="formContainer">
                    <div className="wrapper_userName">
                        <label>Username</label>
                        <input className="userName" type="text"/> 
                    </div>
                    <div className="wrapper_password">
                        <label>Password</label>
                        <input className="password" type="password"/>
                    </div>
                    <button className="btn-sign-in">Signin to Coders-x</button>

                    <div className="keepMe">
                        <input type="checkbox"/>
                        <span>Keep me sigined in</span>
                    </div>

                    <div className="forgetInfo">
                        <a href="#">Forgot username?</a>
                        <a href="#">Forgot password?</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormLogin;