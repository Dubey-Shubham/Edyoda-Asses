import React from 'react'
import Openbook from '../photos/Openbook.png'
import clock from '../photos/clock.png'
import livetv from '../photos/livetv.png'
import Graduation from '../photos/Graduation.png'
import ads from '../photos/ads.png'
import Forma from './Forma'
import './Navbar.css'

const Mainlockup = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "inline-block", flexDirection: "column", alignItems: "flex-start", gap: "48px", marginLeft: "114px", marginTop: "55px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", alignSelf: "stretch" }}>
                        <p style={{ color: "#FFF", fontFamily: "Raleway", fontStyle: "normal", fontSize: "45px", fontWeight: "bold", letterSpacing: "-0.56px", margin: "2px 2px" }}>Access curated courses worth</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "14px", alignSelf: "stretch" }}>
                        <p style={{ color: "#FFF", fontFamily: "Roboto", fontStyle: "normal", fontSize: "54px", fontWeight: "bold", letterSpacing: "-0.64px", margin: "0px 0px" }}>₹</p>
                        <span style={{ textDecoration: "line-through", color: "red" }}><p style={{ color: "#FFF", fontFamily: "Roboto", fontStyle: "normal", fontSize: "54px", fontWeight: "bold", letterSpacing: "-0.64px", margin: "0px 0px" }}>18,500</p></span>
                        <p style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", color: "white", fontSize: "45px", fontWeight: "bold", margin: "0px 0px" }}>at just</p>
                        <p style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", color: "#0096FF", fontSize: "45px", fontWeight: "bold", margin: "0px 0px", fontFamily: "roboto" }}>₹ 99</p>
                        <p style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", color: "#FFFFFF", fontSize: "45px", fontWeight: "bold", margin: "0px 0px" }}>per year!</p>
                    </div>
                    <div >
                        <div style={{ display: "flex", alignItems: "center", alignSelf: "strech", gap: "50px", margin: " 24px 0px 0px 0px" }}>
                            <img style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "55px" }} src={Openbook} alt="Icon" />
                            <p style={{ color: "#FFF", fontFamily: "Roboto", letterSpacing: "0.96px", fontStyle: "normal", fontSize: "25px", fontWeight: "bold" }}><span style={{ color: "#0096FF", fontFamily: "Roboto" }}>100+</span> Job relevant courses</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", alignSelf: "strech", gap: "50px", margin: "9px 0px" }}>
                            <img style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "55px" }} src={clock} alt="Icon" />
                            <p style={{ color: "#FFF", fontFamily: "Roboto", letterSpacing: "0.96px", fontStyle: "normal", fontSize: "25px", fontWeight: "bold" }}><span style={{ color: "#0096FF", fontFamily: "Roboto" }}>20,000+</span> Hours of content</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", alignSelf: "strech", gap: "50px", margin: "9px 0px" }}>
                            <img style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "55px" }} src={livetv} alt="Icon" />
                            <p style={{ color: "#FFF", fontFamily: "Roboto", letterSpacing: "0.96px", fontStyle: "normal", fontSize: "25px", fontWeight: "bold" }}><span style={{ color: "#0096FF", fontFamily: "Roboto" }}>Exclusive</span> webinar access</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", alignSelf: "strech", gap: "50px", margin: "9px 0px" }}>
                            <img style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "55px" }} src={Graduation} alt="Icon" />
                            <p style={{ color: "#FFF", fontFamily: "Roboto", letterSpacing: "0.96px", fontStyle: "normal", fontSize: "25px", fontWeight: "bold" }}>Schrolarship worth <span style={{ color: "#0096FF", fontFamily: "Roboto" }}>₹94,500</span></p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", alignSelf: "strech", gap: "50px", margin: "9px 0px" }}>
                            <img style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "55px" }} src={ads} alt="Icon" />
                            <p style={{ color: "#FFF", fontFamily: "Roboto", letterSpacing: "0.96px", fontStyle: "normal", fontSize: "25px", fontWeight: "bold" }}><span style={{ color: "#0096FF", fontFamily: "Roboto" }}>Ad Free </span>learning experience</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Forma />
                </div>
            </div>
        </>
    )
}

export default Mainlockup