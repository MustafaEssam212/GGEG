import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();


export const AppProvider = ({children}) => {

    const [Team, setTeam] = useState(false);
    const [Player, setPlayer] = useState(false);
    const [BodyWidth, setBodyWidth] = useState(280);
    const [ProfileMessage, setProfileMessage] = useState(true);
    const [ImageView, setImageView] = useState(false);
    return(
        <AppContext.Provider value={{Team, setTeam, Player, setPlayer, BodyWidth, setBodyWidth, ProfileMessage, setProfileMessage, ImageView, setImageView}}>
            {children}
        </AppContext.Provider>
    )
}