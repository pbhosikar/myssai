'use client';

// import { useEffect } from "react";
import HrBenefits from "../hrbenefits/HrBenefits";

export default function HRBenefitsView() {
  // useEffect(() => {
  //     // Set page title
  //     document.title = 'Benefits - MySSAI';
      
  //     // // Set or update meta tags
  //     // const setMetaTag = (name, content, isProperty = false) => {
  //     //   const attribute = isProperty ? 'property' : 'name';
  //     //   let element = document.querySelector(`meta[${attribute}="${name}"]`);
        
  //     //   if (!element) {
  //     //     element = document.createElement('meta');
  //     //     element.setAttribute(attribute, name);
  //     //     document.head.appendChild(element);
  //     //   }
        
  //     //   element.setAttribute('content', content);
  //     // };
  
  //     // // Description
  //     // setMetaTag('description', 'Access SSAI Human Resources information, meet the HR team, view wellness and benefits fair updates, and access important HR documents and resources.');
      
  //     // // Keywords
  //     // setMetaTag('keywords', 'SSAI HR, Human Resources, Employee Portal, HR Team, Benefits, Wellness Fair, HR Resources, SSAI Employees');
      
  //   }, []);
  
  return (
   <>
    <HrBenefits/>
   </>
  );
}