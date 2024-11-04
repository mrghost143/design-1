import { useState } from "react";
import { Icon } from "../../components/icon";

export const Sidebar = () => {
    type MenuLogo = "master" | "report" | "home" | "compliance" | "log" | "setting" | "logo";

    interface SidebarItem {
        menuLogo: MenuLogo;
        menuText: string;
        SubMenu: string[];
    }

    const [sideActive, setSideActive] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const sideBarArray: SidebarItem[] = [
        {
            menuLogo: "home",
            menuText: "Dashboard",
            SubMenu: ["Abc", "Xyz", "123"],
        },
        {
            menuLogo: "master",
            menuText: "Master",
            SubMenu: ["Users", "Agenda", "Categories"],
        },
        {
            menuLogo: "report",
            menuText: "Report",
            SubMenu: ["Users2", "Agenda2", "Categories2"],
        },
    ];

    const onMenuItemClick = (index: number) => {
        setActiveIndex(index);
        setSideActive(true);
    };
    const onMenuClick = () => {

        // setActiveIndex(null);
        setSideActive(!sideActive);
    };



    return (
        <aside className={`${sideActive ? "active" : ""} sidebar`}>
            <div className="logo">
                <div className="logo-img">
                    <Icon name="logo" size={22} color="#2b144d" className="icon" ariaLabel="logo icon" />
                </div>
                <div className="menu">
                    <Icon name="menu" size={22} color="#2b144d" className="icon" ariaLabel="menu icon" onClick={onMenuClick} />
                </div>
                <div className="logo-text">Grant Thornton</div>
            </div>
            <ul className="sidebar-menu">
                {sideBarArray.map(({ menuLogo, menuText, SubMenu }, index) => (
                    <li className="sidebar-menu-item" key={menuText} onClick={() => onMenuItemClick(index)}>
                        <div className={`sidebar-menu-heading ${activeIndex === index ? "menu-active" : ""}`}>
                            <Icon
                                name={menuLogo}
                                size={22}
                                color={activeIndex === index ? "white" : "#2b144d"} // Adjust color based on active index
                                className="icon"
                                ariaLabel={`${menuLogo} icon`}
                            />
                            <span className="sidebar-menu-heading-text">{menuText}</span>
                        </div>
                        {activeIndex === index && SubMenu && sideActive && (
                            <ul className="sidebar-submenu">
                                {SubMenu.map((item, subIndex) => (
                                    <li className="sidebar-submenu-item" key={subIndex}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </aside>
    );
};
