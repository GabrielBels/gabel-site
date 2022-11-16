import React from "react";

import { FaUserFriends, FaTools, FaRobot, FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { BsGearFill } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import { GrCloudComputer } from "react-icons/gr";

import '../../css/products.css';



export default props => {

    return (
        <>
            <div className="titleOurProducts">
                <h1>Our Products</h1>
                <hr />
            </div>
            <div className="divOurProducts row">
                <div className="col-md-6 productItem">
                    <BsGearFill />
                </div>
                <div className="col-md-6 productItem">
                    <FaUserFriends />
                </div>
                <div className="col-md-6 productItem">
                    <CgScreen />
                </div>
                <div className="col-md-6 productItem">
                    <GrCloudComputer />
                </div>
                <div className="col-md-6 productItem">
                    <FiShoppingCart />
                </div>
                <div className="col-md-6 productItem">
                    <FaTools />
                </div>
            </div>
        </>
    )
}