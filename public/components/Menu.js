import { useState, useEffect } from "react";
import { RiSettingsFill } from "react-icons/ri";
import { IoLanguageOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Menu = () => {
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState(false);

  return (
    
      <div className="menuBox">
        {show ? (
          <div className="menus">
            <ul>
              <li>
                <IoLanguageOutline
                  onClick={() => setLang(!lang)}
                  className="langIcon"
                />
              </li>
              <li>
                <CgProfile className="profIcon" />
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        <div className="menu_settings_container">
          <div className="settings">
            <button onClick={() => setShow(!show)}>
              <RiSettingsFill className="settingIcon" />
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default Menu;
