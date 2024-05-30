import React from "react";
import "./ProfilMenu.css";
import { Avatar} from "@chakra-ui/react";



const ProfilMenu = ({onOpen}) => {

  return (
    <div className="profile-menu">
      <div className="profile-menu-content">
        <div className="icon-notif">
          <img src="../src/assets/images/notif.svg" alt="" />
        </div>
        <div className="infos-user">
          <div className="profil-name">Elame Vidhal</div>
          <div className="profil-img">
            <Avatar
              height={50}
              width={50}
              name="Elame Vidhal"
              src="../src/assets/images/terra.jpg"
            />
          </div>
          <div className="profil-chevr">
            <img src="../src/assets/images/morechevron.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilMenu;
