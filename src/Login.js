import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook, ImGithub } from "react-icons/im";
import { MdGrass, MdEmail } from "react-icons/md";
import { AiFillWechat } from "react-icons/ai";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <div className="inner_header_div_">
        {/* <div>
          <img
            alt="logo here"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_wzmNA_KhrhNlrjOyRJ-VwNRHfoAwGVfqaQ&usqp=CAU"
            className="d-inline-block align-top img"
          />
        </div> */}
        <div>
          <span className="Header_name_div_">
            <AiFillWechat />
            {/* <span className="Header_name_inner_div_">
              Application
            </span> */}
          </span>
        </div>
      </div>

      <div className="LoginPage">
        <div className="LoginPage_header">SIGN IN</div>
        <div className="LoginPage_content">
          <div onClick={signIn} className="sign_div_1 google">
            <div>
              <FcGoogle className="icon" />
            </div>
            <div>
              Sign up with <strong>GOOGLE</strong>
            </div>
          </div>
          <div
            onClick={() =>
              alert(
                "This is under Construction,you can try other Login methods"
              )
            }
            className="sign_div_1 facebook"
          >
            <div>
              <ImFacebook className="icon fbicon" />
            </div>
            <div>
              Sign up with <strong>FACEBOOK</strong>
            </div>
          </div>
          <div
            onClick={() =>
              alert(
                "This is under Construction,you can try other Login methods"
              )
            }
            className="sign_div_1 github"
          >
            <div>
              <ImGithub className="icon giticon" />
            </div>
            <div>
              Sign up with <strong>GITHUB</strong>
            </div>
          </div>
          {/* email */}
          <div
            onClick={() =>
              alert(
                "This is under Construction,you can try other Login methods"
              )
            }
            className="sign_div_1 email"
          >
            <div>
              <MdEmail className="icon emailicon" />
            </div>
            <div>
              Sign up with <strong>EMAIL</strong>
            </div>
          </div>
          {/* create user */}
          <div
            onClick={() =>
              alert(
                "This is under Construction,you can try other Login methods"
              )
            }
            className="create-div"
          >
            Create Your Account
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
{
  /* <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/120px-WhatsApp.svg.png" alt="Image not present" />
                <div className="login_text"></div> */
}
