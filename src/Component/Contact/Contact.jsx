import React from 'react'
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import "./Contact.css"

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c--container">
            <div className="flexColStart c-left">
                <span className="orangeText">Our Contact</span>
                <span className="primaryText">Easy to Contact us</span>
                <span className="secondaryText">We always ready to help by proiding the best service
                    beileve a good blace to live can you make your live better
                </span>
                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">+221 77 734 57 65</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Now
                            </div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Chat</span>
                                    <span className="secondaryText">+221 77 734 57 65</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Chat Now
                            </div>
                        </div>
                    </div>

                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Video</span>
                                    <span className="secondaryText">+221 77 734 57 65</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Now
                            </div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Message</span>
                                    <span className="secondaryText">+221 77 734 57 65</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Chat Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flexColStart c-right">
                <div className=" image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
