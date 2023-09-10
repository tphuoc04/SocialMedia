import './layout.css';
import { Outlet } from "react-router-dom";
import { Menu, Suggestion} from "../../components";
const Layout = () => {
  return (
    <div>
        <Menu />
        <Outlet />
        <Suggestion />
    </div>
  )
}

export default Layout