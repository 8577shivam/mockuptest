import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAdsContext } from '../AdsContext';

function Createads() {
  const { selected, setSelected } = useAdsContext ();

  const options = [
    { id: 1,
      label: "Text ads",
      imgsrc:"https://www.commonmind.com/hs-fs/hubfs/Imported_Blog_Media/mobile-ad-example-3.jpg",
      alttext:"Text ads",
    },

    { id: 2, 
    label: "Media ads",
    imgsrc:"https://designmodo.com/wp-content/uploads/2017/12/14-Mobile-friendly-Test-by-Google-e1616427106697.jpg",
    alttext:"Media ads",
    
  }
  ];

  const handleRadioChange = (id) => {
    setSelected(id);
  
  };
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="ads-container">
      <h2>Create Ads</h2>
      <div className='ads-temp-container'>
      {options.map(option => (
        <div key={option.id} className="card">
           <label className={`ads-box ${selected === option.id ? 'active' : ''}`}>
            <input
              type="checkbox"
              value={option.id}
              checked={selected === option.id}
              onChange={() => handleRadioChange(option.id)}
            />
           <div className='temp-container'>
            <img width="350" height="400" src={option.imgsrc} alt={option.alttext} />
            <p>Create</p>
            <h2 className='option-text'>{option.label}</h2>
           </div>
          </label>
        </div>
      ))}
      </div>
  <div className='footerbtn'>
    {
      (selected===0)?<Link className='nextbtn disabled-btn' to="/fill-data">Next</Link>:<Link className='nextbtn' to="/fill-data">Next</Link>
    }
  
  </div>
    </div>
  );
}

export default Createads;