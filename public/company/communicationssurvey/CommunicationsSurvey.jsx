'use client';
import React, { useState } from 'react';


const CommunicationsSurvey = () => {
  const [activeTopTab, setActiveTopTab] = useState('table-of-contents');
  const [activeBottomTab, setActiveBottomTab] = useState('open-ended-comments');


  const tabs = [
    { id: 'table-of-contents', label: 'Table of Contents' },
    { id: 'baseline-information', label: 'Baseline Information' },
    { id: 'question-1', label: 'Question 1' },
    { id: 'question-2', label: 'Question 2' },
    { id: 'question-3', label: 'Question 3' },
    { id: 'question-4', label: 'Question 4' },
    { id: 'question-5', label: 'Question 5' }
  ];


  const bottomTabs = [
    { id: 'open-ended-comments', label: 'Open-Ended Comments' },
    { id: 'questions-8-9', label: 'Questions 8 & 9' },
    { id: 'question-10', label: 'Question 10' },
    { id: 'key-themes-supportive', label: 'Key Themes - Supportive' },
    { id: 'key-themes-opportunity', label: 'Key Themes - Opportunity' },
    { id: 'food-for-thought', label: 'Food for Thought' },
    { id: 'summary', label: 'Summary' }
  ];


  // Single image configuration for all tabs
  const tabImages = {
    'table-of-contents': '/company/communicationssurvey/tableofcontents.png',
    'baseline-information': '/company/communicationssurvey/baselineinfo.png',
    'question-1': '/company/communicationssurvey/que1.png',
    'question-2': '/company/communicationssurvey/que2.png',
    'question-3': '/company/communicationssurvey/que3.png',
    'question-4': '/company/communicationssurvey/que4.png',
    'question-5': '/company/communicationssurvey/que5.png',
    'open-ended-comments': '/company/communicationssurvey/openendedcomm.png',
    'questions-8-9': '/company/communicationssurvey/que8_9.png',
    'question-10': '/company/communicationssurvey/que10.png',
    'key-themes-supportive': '/company/communicationssurvey/keythemesupport.png',
    'key-themes-opportunity': '/company/communicationssurvey/keythemeopportunity.png',
    'food-for-thought': '/company/communicationssurvey/tableofcontents.png', // Single image for top section
    'summary': '/company/communicationssurvey/summary.png'
  };


  // Special configuration for Food for Thought bottom section (two images)
  const foodForThoughtImages = [
    '/company/communicationssurvey/foodforthought1.png',
    '/company/communicationssurvey/foodforthought2.png'
  ];


  const getCurrentTopImage = () => {
    return tabImages[activeTopTab] || '/images/placeholder.jpg';
  };

  const getCurrentBottomImage = () => {
    return tabImages[activeBottomTab] || '/images/placeholder.jpg';
  };


  const renderTopImage = () => {
    return (
      <div className="w-full h-[300px] md:h-[600px] overflow-hidden ">
        <img 
          src={getCurrentTopImage()}
          alt={`${activeTopTab} content`}
          className="w-full h-full object-contain"
        />
      </div>
    );
  };


  const renderBottomImages = () => {
    // Special case for Food for Thought - show two images
    if (activeBottomTab === 'food-for-thought') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {foodForThoughtImages.map((image, index) => (
            <div key={index} className="w-full h-[300px] md:h-[400px] bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={image}
                alt={`Food for Thought content ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      );
    }
    
    // For all other bottom tabs - show single image
    return (
      <div className="w-full h-[300px] md:h-[600px] overflow-hidden">
        <img 
          src={getCurrentBottomImage()}
          alt={`${activeBottomTab} content`}
          className="w-full h-full object-contain"
        />
      </div>
    );
  };


  return (
    <div className="max-w-7xl mx-auto bg-white font-sans">
      {/* Main Header */}
      <div className="px-4 md:px-16 py-6 md:py-10 text-center">
        <h1 className="text-xl md:text-3xl font-semibold text-gray-800 leading-tight">
          Employee Communications Survey Findings & Recommendations – 2024
        </h1>
      </div>


      {/* Top Navigation Tabs */}
      <div className="flex border-b-2 border-gray-200 mx-4 md:mx-16 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-3 md:px-5 py-3 text-sm font-medium cursor-pointer border-b-[3px] transition-all duration-300 whitespace-nowrap ${
              activeTopTab === tab.id
                ? 'text-blue-700 border-blue-700 bg-gray-50'
                : 'text-gray-600 border-transparent hover:text-gray-800 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTopTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>


      {/* Top Section - Always Single Image */}
      <div className="px-4 md:px-16 mt-6 md:mt-10">
        {renderTopImage()}
      </div>


      {/* Bottom Navigation Tabs */}
      <div className="mt-8 md:mt-16">
        <div className="flex border-b-2 border-gray-200 mx-4 md:mx-16 bg-white overflow-x-auto scrollbar-hide">
          {bottomTabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-2 md:px-4 py-3 text-xs font-medium cursor-pointer border-b-[3px] transition-all duration-300 whitespace-nowrap ${
                activeBottomTab === tab.id
                  ? 'text-blue-700 border-blue-700 bg-gray-50'
                  : 'text-gray-600 border-transparent hover:text-gray-800 hover:bg-gray-50'
              }`}
              onClick={() => setActiveBottomTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>


        {/* Bottom Section - Single or Double Images Based on Tab */}
        <div className="px-4 md:px-16 py-6 md:py-10">
          {renderBottomImages()}
        </div>
      </div>
    </div>
  );
};


export default CommunicationsSurvey;
