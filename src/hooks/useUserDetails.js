import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../services/apiLogin";

const useUserDetails = () => {
    const { loggedInUser } = useSelector(store => store?.login);
    const [userDetails, setUserDetails] = useState("")

    useEffect(() => {

        if (Object.keys(loggedInUser)?.length > 0) {
            getUser(loggedInUser?.user?.id)
                .then((res) => setUserDetails(res))
                .catch((err) => console.log("err", err));
        }
    }, [loggedInUser])

    return {
        userDetails
    }
}

export default useUserDetails