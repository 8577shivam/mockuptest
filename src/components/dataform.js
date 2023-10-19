import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAdsContext } from '../AdsContext';
import {AiFillCheckCircle} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
const Dataform = () => {
    const { selected, setSelected } = useAdsContext ();
    const [showsubmittext, setshowsubmittext] = useState("hide")
    const navigate = useNavigate();
    const [formInputdata, setFormInputdata] = useState({
        heading01:"",
        heading02:"",
        desc:"",
        landscape:"",
        portrait:"",
        square:"",
        videourl:"",
        businessname:"",
        buttonlabel:"",
        website:""
    })
    const handleChnage=(e)=>{
        const {name,value}=e.target
        setFormInputdata({...formInputdata,[name]:value})
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        const checkfield=Object.values(formInputdata).every((value)=>value=="")
        if(checkfield){
            alert("Fill atleast one Field")
        }
        else{
            console.log("Your form has beeen submitted",formInputdata)
            setshowsubmittext("show")
            setTimeout(() => {
                navigate('/createads');
                setshowsubmittext("hide")
              }, 600);
        }
    }
   
  return (
    <div className='form-container'>
        <h2>Create Text & Media</h2>
        <form className='form' onSubmit={handlesubmit}>
            <div className='form-box top-heading-box'>
               <label>Heading 01</label>
                <input value={formInputdata.heading01} name="heading01"onChange={handleChnage} placeholder='Add a heading that would make user interesting'/>
            </div>
            <div className='form-box bottom-heading-box'>
               <label>Heading 02</label>
                <input value={formInputdata.heading02} name="heading02"onChange={handleChnage}  placeholder='Add a heading that would make user interesting'/>
            </div>
            <div className='form-box description-box'>
               <label>Description 01</label>
               <textarea
               className='textarea'
                value={formInputdata.desc}
                name="desc"
                onChange={handleChnage}
                placeholder='Add a heading that would make user interesting'
  />
            </div>
            {selected===2?
            <>
            <div className='form-box landscape-box'>
               <label>Landscape Marketing Image (1.9:1)</label>
                <input value={formInputdata.landscape} name="landscape"onChange={handleChnage}  placeholder='Add the URL of the image that you want to use in the ad'/>
            </div>
            <div className='form-box portrait-box'>
               <label>Portrait Marketing Image (4:5)</label>
                <input value={formInputdata.portrait} name="portrait"onChange={handleChnage}  placeholder='Add the URL of the image that you want to use in the ad'/>
            </div>
            <div className='form-box square-box'>
               <label>Square Marketing Image (1:1)</label>
                <input value={formInputdata.square} name="square"onChange={handleChnage} placeholder='Add the URL of the image that you want to use in the ad'/>
            </div>
            <div className='form-box video-box'>
               <label>Video URL</label>
                <input value={formInputdata.video} name="video"onChange={handleChnage}  placeholder='Add the URL of the Video that you want to use in the ad'/>
            </div>
            </>
            :""}
            <div className='form-box businessname-box'>
               <label>Business Name</label>
                <input value={formInputdata.businessname} name="businessname"onChange={handleChnage}  placeholder='Add yo business name'/>
            </div>
            <div className='form-box buttonlabel-box'>
                     <label>Button Label</label>
                     <select
                     value={formInputdata.buttonlabel}
                     name="buttonlabel"
                     onChange={handleChnage}
                     className='button-select-label'
                     >
                     <option value="">Select an Label that best suits your ad</option>
                     <option value="Label 1">Label 1</option>
                     <option value="Label 2">Label 2</option>
                     <option value="Label 3">Label 3</option>
                     <option value="Label 4">Label 4</option>
   
                     </select>
                </div>
     
            <div className='form-box website-box'>
               <label>Website URL</label>
                <input value={formInputdata.website} name="website"onChange={handleChnage}  placeholder='Add a URL of the landing page that yoy want to redired user'/>
            </div>
            <div className='form-btn'>
                <Link to="/createads" className='backbtn'>Back</Link>
               <button type='submit' className='nextbtn'>Submit</button>
            </div>
        </form>
        {showsubmittext==="show"
        ?
        <div className='popup-container'>
            <div className='popup-submit-container'>
                    <AiFillCheckCircle className='checkicon' fill='#0096ff'/>    
                    <p className='popup-text'>Submitted</p>
            </div>
        </div>
        :
        ""
        }
    </div>
  )
}

export default Dataform