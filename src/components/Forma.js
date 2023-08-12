import React from 'react'
import clockquestion from '../photos/clockquestion.png'
import Razorpayicon from '../photos/Razorpayicon.jpg'

const Forma = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", width: "445px", height: "700px", borderRadius: "8px", backgroundColor: "#FFF", position: "absolute", top: "113px", right: "58px" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", alignSelf: "stretch", gap: "146px", marginTop: "25px" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2px", width: "45px" }}>
          <p style={{ background: "#0096FF", borderRadius: "1000px", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontFamily: "Roboto", fontSize: "16px", fontStyle: "normal", fontWeight: "bold", margin: "2px 0px" }}>1</p>
          <p style={{ color: "black", textAlign: "center", fontFamily: "Roboto", fontSize: "13px", fontstyle: "normal", letterSpacing: "0.16px", fontweight: "bold", margin: "0px" }}>Sign Up</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2px", width: "45px" }}>
          <p style={{ background: "#0096FF", borderRadius: "1000px", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontFamily: "Roboto", fontSize: "16px", fontStyle: "normal", fontWeight: "bold", margin: "2px 0px" }}>2</p>
          <p style={{ color: "black", textAlign: "center", fontFamily: "Roboto", fontSize: "13px", fontstyle: "normal", letterSpacing: "0.16px", fontweight: "bold", margin: "0px" }}>Subscribe</p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignSelf: "stretch" }}>
        <h3 style={{ color: "#3C4852", textAlign: "center", fontFamily: "Roboto", fontsize: "24px", fontstyle: "normal", fontweight: "bold", alignSelf: "stretch", margin: "11.5px 0px" }}>Select your subscription plan</h3>
      </div>
      {/* subscription box */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ width: "392px", height: "53px", border: "2px solid #BEBEBE", borderRadius: "4px", gap: "2px", display: "flex", backgroundColor: "#E7E7E7" }}>
          <input disabled style={{ accentColor: "", width: "20px", height: "20px", marginTop: "18px", marginLeft: "16px" }} type="radio" name="gender"></input>
          <div style={{ display: "flex", flexDirection: 'column', marginLeft: '4px' }}>
            <span style={{ color: "white", backgroundColor: "#ee3e3e", width: "77px", fontSize: "10px", fontFamily: "Roboto", borderRadius: "0px 0px 4px 4px", paddingLeft: "22px", paddingTop: "1px", }}>Offer expired</span>
            <div style={{ display: "flex", flexDirection: "row", gap: "160px" }}>
              <p style={{ fontFamily: "Roboto", color: "#BEBEBE", margin: "6px 0px", fontWeight: "bold", fontSize: "14px" }}>12 month subsciption</p>
              <div style={{ width: "50px", height: "2px", marginBottom: "8px" }}>
                <div style={{ display: "flex", flexDirection: 'row', alignItems: "center", lineHeight: "1px" }}><p style={{ fontFamily: "Roboto", alignItems: "center", color: "#BEBEBE", fontSize: "10px", marginTop: "4px", marginBottom: "6px" }}>Total &nbsp;</p><p style={{ fontFamily: "Roboto", alignItems: "center", color: "#BEBEBE", fontSize: "12px", fontWeight: "bold", marginTop: "9px", marginBottom: "0x" }}> ₹99</p> </div>
                <p style={{ fontFamily: "Roboto", alignItems: "center", color: "#BEBEBE", fontSize: "10px", margin: "0px 0px 0px 10px", fontWeight: "bold" }}>₹8 /mo</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "392px", height: "53px", border: "2px solid #47BA68", borderRadius: "4px", gap: "2px", display: "flex", backgroundColor: "#b0ecc0" }}>
          <input style={{ accentColor: "#47BA68", width: "20px", height: "20px", marginTop: "18px", marginLeft: "16px" }} type="radio" name="gender"></input>
          <div style={{ display: "flex", flexDirection: 'column', marginLeft: '4px' }}>
            <span style={{ color: "white", backgroundColor: "#47BA68", width: "77px", fontSize: "10px", fontFamily: "Roboto", borderRadius: "0px 0px 4px 4px", paddingLeft: "22px", paddingTop: "1px", }}>Offer expired</span>
            <div style={{ display: "flex", flexDirection: "row", gap: "160px" }}>
              <p style={{ fontFamily: "Roboto", color: "black", margin: "6px 0px", fontWeight: "bold", fontSize: "14px" }}>12 month subsciption</p>
              <div style={{ width: "50px", height: "2px", marginBottom: "8px" }}>
                <div style={{ display: "flex", flexDirection: 'row', alignItems: "center", lineHeight: "1px" }}><p style={{ fontFamily: "Roboto", alignItems: "center", color: "black", fontSize: "10px", marginTop: "4px", marginBottom: "6px" }}>Total &nbsp;</p><p style={{ fontFamily: "Roboto", alignItems: "center", color: "black", fontSize: "12px", fontWeight: "bold", marginTop: "9px", marginBottom: "0x" }}> ₹179</p> </div>
                <p style={{ fontFamily: "Roboto", alignItems: "center", color: "black", fontSize: "10px", margin: "0px 0px 0px 10px", fontWeight: "bold" }}>₹15 /mo</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "392px", height: "53px", border: "2px solid black", borderRadius: "4px", gap: "2px", display: "flex", backgroundColor: "white" }}>
          <input style={{ width: "20px", height: "20px", marginTop: "18px", marginLeft: "16px" }} type="radio" name="gender"></input>
          <div style={{ display: "flex", flexDirection: 'column', marginLeft: '10px', marginTop: "13px" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: "160px" }}>
              <p style={{ fontFamily: "Roboto", color: "black", margin: "6px 0px", fontWeight: "bold", fontSize: "14px" }}>6 month subsciption</p>
              <div style={{ width: "50px", height: "2px", marginBottom: "8px" }}>
                <div style={{ display: "flex", flexDirection: 'row', alignItems: "center", lineHeight: "1px" }}><p style={{ fontFamily: "Roboto", alignItems: "center", color: "black", fontSize: "10px", marginTop: "4px", marginBottom: "6px" }}>Total &nbsp;</p><p style={{ fontFamily: "Roboto", alignItems: "center", color: "black", fontSize: "12px", fontWeight: "bold", marginTop: "9px", marginBottom: "0x" }}> ₹149</p> </div>
                <p style={{ fontFamily: "Roboto", alignItems: "center", color: "black", fontSize: "10px", margin: "0px 0px 0px 10px", fontWeight: "bold" }}>₹25 /mo</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "392px", height: "53px", border: "2px solid black", borderRadius: "4px", gap: "2px", display: "flex", backgroundColor: "white" }}>
          <input style={{ width: "20px", height: "20px", marginTop: "18px", marginLeft: "16px" }} type="radio" name="gender"></input>
          <div style={{ display: "flex", flexDirection: 'column', marginLeft: '10px', marginTop: "13px" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: "160px" }}>
              <p style={{ fontFamily: "Roboto", color: "black", margin: "6px 0px", fontWeight: "bold", fontSize: "14px" }}>3 month subsciption</p>
              <div style={{ width: "50px", height: "2px", marginBottom: "8px" }}>
                <div style={{ display: "flex", flexDirection: 'row', alignItems: "center", lineHeight: "1px" }}><p style={{ fontFamily: "Roboto", alignItems: "center", color: "black", fontSize: "10px", marginTop: "4px", marginBottom: "6px" }}>Total &nbsp;</p><p style={{ fontFamily: "Roboto", alignItems: "center", color: "black", fontSize: "12px", fontWeight: "bold", marginTop: "9px", marginBottom: "0x" }}> ₹99</p> </div>
                <p style={{ fontFamily: "Roboto", alignItems: "center", color: "black", fontSize: "10px", margin: "0px 0px 0px 10px", fontWeight: "bold" }}>₹33 /mo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ color: " 2px solid black", marginTop: "4px", width: "393px" }}><hr /></div>
      <div style={{ display: "flex", gap: "200px" }}> <p style={{ color: "black", fontFamily: "Roboto", margin: "0px 0px 0px 0px", fontsize: "12px", fontweight: "bold" }}> Subscription Fee</p> <p style={{ color: " black", fontFamily: "Roboto", margin: "0px", fontsize: "10px", fontweight: "bold" }}>₹18,500</p></div>
      <div style={{ width: "392px", height: "56px", border: "2px solid #DE4313", borderRadius: "4px", gap: "2px", display: "flex", flexDirection: "column", backgroundColor: "#f1bfb0" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "190px" }}>
          <p style={{ color: "#DE4313", margin: "0px", fontweight: "bold", fontFamily: "Roboto", margin: "4px 0px 0px 10px" }}>Limited time offer</p>
          <p style={{ color: "black", margin: "0px", fontFamily: "Roboto", marginTop: "4px" }}> -₹18,401</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
          <img style={{ height: "22px", color: "#DE4313", marginLeft: "10px" }} src={clockquestion} alt="ICON" />
          <p style={{ color: "#DE4313", margin: "0px", fontFamily: "Roboto" }}>Offer valid till 25th March 2023</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", margin: "18px 2px 2px 0px", gap: "175px" }}>
          <p style={{ color: "black", margin: "0px", fontweight: "bold", fontFamily: "Roboto", margin: "4px 0px 0px 10px" }}>Total (Incl. of 18% GST)</p>
          <p style={{ color: "black", margin: "0px", fontFamily: "Roboto", marginTop: "4px" }}> ₹149</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", margin: "18px 2px 2px 0px", gap: "20px" }}>
          <button style={{ width: "200px", height: "45px", border: " 2px solid #DE4313", color: "#DE4313", backgroundColor: "white" }}>CANCEL</button>
          <button style={{ width: "200px", height: "45px", backgroundColor: "#47BA68", color: "white" }}>PROCEED TO PAY</button>
        </div>
        <div > <img style={{ marginTop: "12px", height:"40px"}} src={Razorpayicon} alt="Razorpayicon" /></div>
      </div>
    </div>
  )
}

export default Forma