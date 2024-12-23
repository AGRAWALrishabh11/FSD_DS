import React from 'react';
import {Link,Outlet} from "react-router-dom";
import "./MainLayout.css"
const MainLayout = () => {
  return (
    <div>
        <nav><ul>
            <li>
                <Link to="/CounterApp">CounterApp</Link>
            </li>
            <li>
            <Link to="/ImageApp">ImageApp</Link>
            </li>
            </ul>
            </nav>
            <Outlet/>
    </div>
  )
};

export default MainLayout;