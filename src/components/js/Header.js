import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

function Header() {
    //set menu links function
    const [menuLinks, setMenuLinks] = useState(null);

    //use effect for setting menu links
    useEffect(() => {

        //get memu links
        getMenuLinks();

    }, []);

    //get menu links function
    async function getMenuLinks() {
        try {
            const menu_link_url = process.env.REACT_APP_MENU_ENDPOINT;
            const response = await axios.get(menu_link_url);
            setMenuLinks(response.data);
        }
        catch (err) {
        }
    }

    //check menulinks is set
    if (menuLinks) {
        return (
            <header>
                <nav>
                    <ul>
                    {menuLinks.map((menu) =>
                        <li key={menu.key}>
                            <Link to={menu.absolute}>{menu.title}</Link>
                        </li>
                    )}
                    </ul>
                </nav>
            </header>
        );
    }
    else {
        return null;
    }
    
}
  
export default Header;