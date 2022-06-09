import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>Login page if you don't have a log in please sign in</div>
      <NavLink to="/signin">Sign in!</NavLink>
    </div>
  );
};
export default Login;
