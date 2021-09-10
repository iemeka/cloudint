import { Link } from "react-router-dom";
import "./Figma.css";
import imgp from "./Subtractlogo.png";

export default function Figma() {
  return (
    <div className="container">
      <div className="left">
        <div className="top">
          <img src={imgp} alt="" />
          <h1> UBA Design</h1>
        </div>
        <div className="content">
          <div className="intro">
            <h1>Hi, Welcome Back!</h1>
            <span>Get on board, work and track your progress</span>
          </div>
          <form>
            <div className="text-holder">
              <label>Email address</label>
              <input type="text" placeholder="Enter email address" />
            </div>
            <div className="btn-holder">
              <Link to="/cloudint/api">
                <button>Next</button>
              </Link>
              <span>
                Not yet registered?{" "}
                <span className="create">Create an account</span>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="right">
        <div className="big-img"></div>
        <div className="description">
          <div className="hold-content">
            <h1>Get detailed support</h1>
            <span>
              A little description here to show something about get detailed
              support
            </span>
            <div className="dash"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
