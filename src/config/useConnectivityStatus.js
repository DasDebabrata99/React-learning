import { useEffect, useState } from "react";

const useConnectivityStatus = () => {
    const [onlineStatus, setOnlineStatus] =  useState(true);
    useEffect( ()=>{

        window.addEventListener("offline", ()=> {
            setOnlineStatus(false);
        });
        window.addEventListener("online", ()=> {
            setOnlineStatus(true);
        });
    },[])


    return onlineStatus;
};

export default useConnectivityStatus;