import React from "react";
import Menu from "../Common/Menu";
import Footer from "../Common/Footer";
import InsideUserAcc from "./InsideUserAcc";

function UserAccount(props)
{
    return(
        <div>
            <Menu/>
            <InsideUserAcc users3={props.users3}/>
            {/* <Footer/> */}
        </div>
    );
}

export default UserAccount;