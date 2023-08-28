import LoginForm from "./LoginForm";
import TypedText from "./TypedText";
import "./LoginDialog.css"

const LoginDialog=()=>{
    return(
        <div className="LD">
            <div className="LF"><LoginForm/></div>
            <div className="TT"><TypedText/></div>
        </div>
    )
}

export default LoginDialog;