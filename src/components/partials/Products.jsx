import React, { useEffect, useRef, useState } from "react";

import { FaUserFriends, FaTools, FaRobot, FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { BsGearFill } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import { GrCloudComputer } from "react-icons/gr";

import '../../css/products.css';

export default props => {

    const [isComputerViewport, setIsComputerViewport] = useState(window.matchMedia("(min-width: 768px)").matches);

    const automationsIcon = useRef(null);

    function toggleDescriptionIconVisibility(e) {
        const description = e.currentTarget.children[0];
        const divIcon = e.currentTarget.children[1];
        console.log(description)
        console.log(divIcon)

        description.style.display = description.style.display == "none" ? "block" : "none";
        divIcon.style.display = divIcon.style.display == "none" ? "block" : "none";
    }

    function hideDescription(e) {
        const description = e.currentTarget.children[0];
        const divIcon = e.currentTarget.children[1];
        console.log(description)
        console.log(divIcon)

        description.style.display = "none";
        divIcon.style.display = "block";
    }

    return (
        <>
            <div className="titleOurProducts">
                <h1>Our Products</h1>
                <hr />
            </div>
            <div className="divOurProducts">
                <div className="border-rounded" onClick={e => toggleDescriptionIconVisibility(e)} onMouseEnter={e => toggleDescriptionIconVisibility(e)} onMouseLeave={e => hideDescription(e)}
                    ref={automationsIcon}>
                    <span className="description" style={{ display: "none" }}>
                        We automate your processes and routines that are taking your team time through very smart robots.<br/><br/>With this, your team will have time to pay attention on that is really important.
                        <br/><br/>Do not lose the most limited resource that you have.
                    </span>
                    <div className="divIcon">
                        <BsGearFill />
                        <h3>Automations (RPA)</h3>
                    </div>
                </div>
                <div className="border-rounded" onClick={e => toggleDescriptionIconVisibility(e)} onMouseEnter={e => toggleDescriptionIconVisibility(e)} onMouseLeave={e => hideDescription(e)} >
                    <span className="description" style={{ display: "none" }}>
                        Be it implementing new technologies, thinking about the best architeture and infrastructure to your company, validating business rules, or whatever you want: <br/><br/>We have the ideal people to give you the best tips and ways to do it.
                    </span>
                    <div className="divIcon">
                        <FaUserFriends />
                        <h3>IT Consulting</h3>
                    </div>
                </div>
                {!isComputerViewport ? <div className="break"></div> : ""}
                <div className="border-rounded" onClick={e => toggleDescriptionIconVisibility(e)} onMouseEnter={e => toggleDescriptionIconVisibility(e)} onMouseLeave={e => hideDescription(e)}>
                    <span className="description" style={{ display: "none" }}>
                        We have the best developers specially to deliver you a performative, smart, fast and awesome software that will wonder you.<br/><br/>
                        Our team work with multi-stacks, then you can choose what will be the technologies, and if you do not know, we can suggest it!
                    </span>
                    <div className="divIcon">
                        <CgScreen />
                        <h3>On demand <br></br>development</h3>
                    </div>
                </div>
                {isComputerViewport ? <div className="break"></div> : ""}
                <div className="border-rounded" onClick={e => toggleDescriptionIconVisibility(e)} onMouseEnter={e => toggleDescriptionIconVisibility(e)} onMouseLeave={e => hideDescription(e)}>
                    <span className="description" style={{ display: "none" }}>
                        Put your beautiful company name on your website URL to your dear customers find you easily.<br/><br/>And also, have you own host cloud server to maintain your website stable when they are acessing it. 
                    </span>
                    <div className="divIcon">
                        <GrCloudComputer style={{ filter: "invert(1)" }} />
                        <h3>Host and Domain</h3>
                    </div>
                </div>
                {!isComputerViewport ? <div className="break"></div> : ""}
                <div className="border-rounded" onClick={e => toggleDescriptionIconVisibility(e)} onMouseEnter={e => toggleDescriptionIconVisibility(e)} onMouseLeave={e => hideDescription(e)}>
                    <span className="description" style={{ display: "none" }}>
                        Nowadays, 64% of the consumers prefer to buy online than in the physical store.<br/><br/>Then, we do not have to say more anything, right?<br/><br/>Build now your virtual store and sell 24/7.
                    </span>
                    <div className="divIcon">
                        <FiShoppingCart />
                        <h3>Virtual Store <br></br>(e-Commerce)</h3>
                    </div>
                </div>
                <div className="border-rounded" onClick={e => toggleDescriptionIconVisibility(e)} onMouseEnter={e => toggleDescriptionIconVisibility(e)} onMouseLeave={e => hideDescription(e)}>
                    <span className="description" style={{ display: "none" }}>
                        Do you have a legacy system, website, or system that you do not have more the developer contact?<br/><br/>We can help you with this too, giving maintenance and support to your systems.
                    </span>
                    <div className="divIcon">
                        <FaTools />
                        <h3>Maintenance and Support</h3>
                    </div>
                </div>
            </div>
        </>
    )
}