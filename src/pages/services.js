import React from "react";


import Layout from "../components/layout";
import SEO from "../components/seo";
import ServiceCard1 from "../components/serviceCard1";
import ServiceCard2 from "../components/serviceCard2";


import camera2Image from "../images/camera2.png"
import churchImage from "../images/church.png"
import fenceImage from "../images/fence.png"
import grafittiImage from "../images/grafitti.png"
import lockImage from "../images/lock.png"
import mapImage from "../images/map.png"
import meetingImage from "../images/meeting.png"
import rangeImage from "../images/range.png"
import reportImage from "../images/report.png"
import stairsImage from "../images/stairs.png"


const card1Data = [
  ["left","Assessments drive the security strategies contoured to specific security needs, ensuring client peace of mind in relation to personal safety and the security of their assets. ",mapImage],
  ["right","After initial assessments, plans and procedures are developed and training is conducted to educate the clients on how new security strategies will be implemented and how to understand the indicators and behaviors that could potentially lead to problems. ",reportImage],
  ["left","Planning considerations include situational awareness, layered security, weapons training and team building. Our number one goal is the safety and satisfaction of our clients, their families and employees.  Many of the topics covered become life lessons that can be passed down to family members and employees resulting in a safer mind set all around.",stairsImage],
  ["right","NGSC is focused and committed to the security of places of worship.  Training and educating staff and volunteers is critical to the mission of the church and we have experience in the implementation of deliberate yet subtle planning considerations.  We understand the mission vs. security aspect of keeping churches and its members safe!",churchImage],
]

const card2Data1 = [
  [["Active Shooter","Insider Threat","Layered Security"], lockImage],
  [["Staff Security Training/Education","Site Specific Rehearsals","Advanced Situational Awareness"], rangeImage],
]

const card2Data2 = [
  [["Home Security","Business Security","Church Security "], camera2Image],
  [["Vulnerability Assessments​","Crime trends (Location Specific)"], grafittiImage],
  [["Access Control Installation ","Camera and Alarm Installation","Control Room Operations (CCTV)"], fenceImage],
]

const card2Data3 = [
  [["Personal Protection","Guardian Angel","Communications"], meetingImage],
  [["Threat Detection Domains","Concealed Carry Training","Weapons Training"], stairsImage],
]

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <div id="aboutText">
        <span id="bioName" style={{"margin-top":"50px", "margin-bottom":"50px"}}>Who We Are</span>
        <span style={{"color":"black", "background":"#ddd","padding":"50px"}} className="slugText">North Georgia Security Consultants specialize in conducting vulnerability assessments on residential and commercial properties in order to evaluate potential shortfalls in security postures and procedures. Initial assessments/site surveys are conducted resulting in detailed information back briefs to our clients.</span>
        {card1Data.map(item => <ServiceCard1 side={item[0]} text={item[1]} imageUrl={item[2]}/>)}
        <span id="bioName" style={{"margin-top":"50px", "margin-bottom":"50px"}}>Planning, Training, Education</span>
        <div id="moreServices">
          {card2Data1.map(item => <ServiceCard2 services={item[0]} imageUrl={item[1]}/>)}
        </div>
        <div id="moreServices">
          {card2Data2.map(item => <ServiceCard2 services={item[0]} imageUrl={item[1]}/>)}
        </div>
        <div id="moreServices">
          {card2Data3.map(item => <ServiceCard2 services={item[0]} imageUrl={item[1]}/>)}
        </div>
    </div>
  </Layout>
)

export default ServicesPage
