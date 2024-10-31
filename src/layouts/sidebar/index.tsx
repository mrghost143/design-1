import { Icon } from "../../components/icon"




export const Sidebar = () => {
  return (
    <aside className="sidebar active">
        <div className="logo mb-7">
            Logo
        </div>
        <ul className="sidebar-menu">
            <li className="sidebar-menu-item">
                <div className="sidebar-menu-heading menu-active">
                 <Icon name="file-list" size={22} color="black" className="icon" ariaLabel="file-list icon"  />
                   <span className="sidebar-menu-heading-text"> Masters</span>
                </div>
      
            <ul className="sidebar-submenu">
                <li className="sidebar-submenu-item">
                    Users
                </li>
                <li className="sidebar-submenu-item">
                    Agenda
                </li>
                <li className="sidebar-submenu-item">
                    Categories
                </li>
            </ul>

            </li>
            <li className="sidebar-menu-item">
            <div className="sidebar-menu-heading">
            <Icon name="report" size={22} color="black" ariaLabel="report icon"  />
            <span className="sidebar-menu-heading-text">Reports</span>
            </div>
            </li>
        </ul>
    </aside>
  )
}
