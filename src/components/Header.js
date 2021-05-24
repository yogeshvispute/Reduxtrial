import classes from "./Header.module.css";
import { authActions } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const onLogoutHandler = () => {
    dispatch(authActions.onLogout());
  };

  return (
    isAuthenticated && (
      <header className={classes.header}>
        <h1>Redux Auth</h1>
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={onLogoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
    )
  );
};

export default Header;
