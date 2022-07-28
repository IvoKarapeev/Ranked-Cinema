import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Logout = () => {

    const navigate = useNavigate();
    const { userLogout } = useContext(AuthContext);

    useEffect(() => {
        userLogout();
        navigate('/');
    },[]);

    return null;
};

export default Logout;