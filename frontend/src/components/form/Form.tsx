import axios from 'axios';
import React, { useState } from 'react';
import './Form.css';

const Form = () =>{
    const [following, setFollowing] = useState('');
    const [followers, setFollowers] = useState('');
    const [postAmount, setPostAmount] = useState('');
    const [numHashtag, setNumHashtag] = useState('');
    const [verified, setVerified] = useState(false);
    const [pic_vid, setPic_vid] = useState('0');

    const radioHandleChange = event =>{
        setPic_vid(event.target.value);
    }

    const textFollowingChange = event =>{
      setFollowing(event.target.value);
    }

    const textFollowersChange = event =>{
      setFollowers(event.target.value);
    }

    const textPostAmountChange = event =>{
      setPostAmount(event.target.value);
    }

    const textNumHashtagChange = event =>{
      setNumHashtag(event.target.value);
    }

    const handleSubmit = event =>{
      console.log("hey");
      event.preventDefault();
      axios.post('/',{following: following, followers:followers, postAmount:postAmount,
        numHashtag:numHashtag, verified:verified, pic_vid:pic_vid}).then(res =>{
          console.log(res);
      }).catch(err =>{
          if(err.code === 404){
            
          }
      })
    }

    // const checkBoxHandleChange = event =>{
    //     const value = event.target.value;
    //     console.log(event.target.value);
    //     setVerified(value);
    // }

    return <form onSubmit={handleSubmit} className='bg-form'>
    <div className="row">
      <div className="form-group col-sm-12 col-md-4 col-lg-4">
        <label htmlFor="following">Following</label>
        <input type="number" 
               className="form-control" 
               value={following}
               onChange={textFollowingChange}
               id="following" 
               placeholder="18322" 
               min="0"/>
      </div>
      <div className="form-group col-sm-12 col-md-4 col-lg-4">
        <label htmlFor="followers">Followers</label>
        <input type="number" 
               className="form-control" 
               value={followers}
               onChange={textFollowersChange}
               id="followers" 
               placeholder="500" 
               min="0"/>
      </div>
      <div className="form-group col-sm-12 col-md-4 col-lg-4">
        <label htmlFor="post_amount">Post amount</label>
        <input type="number" 
               className="form-control" 
               value={postAmount}
               onChange={textPostAmountChange}
               id="post_amount" 
               placeholder="352" 
               min="0"/>
      </div>
    </div>
    <div className='row'>
      <div className="form-group col-sm-12 col-md-6 col-lg-6">
        <label htmlFor="hashtag_amount">Number of hashtags</label>
        <input type="number" 
               className="form-control" 
               value={numHashtag}
               onChange={textNumHashtagChange}
               id="hashtag_amount" 
               placeholder="0" 
               min="0"/>
      </div>
      <div className="form-group col-sm-12 col-md-4 col-lg-4">
        <div className='row'>
          <div className="col-sm-12 col-md-12 col-lg-12 text-left">
            <div className="form-check form-check-inline">
              <input className="form-check-input"
                     type="radio"
                     name="pic_vidRadioOption" 
                     id="video" 
                     value="1"
                     onChange={radioHandleChange}
                     checked={pic_vid === "1"}/>
              <label className="form-check-label" htmlFor="inlineRadio1">Video</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input"
                     type="radio" 
                     name="pic_vidRadioOption" 
                     id="picture" 
                     value="0"
                     onChange={radioHandleChange}
                     checked={pic_vid === "0"}/>
              <label className="form-check-label" htmlFor="inlineRadio2">Picture</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 text-left">
            <input className="form-check-input" 
                   type="checkbox" 
                   id="gridCheck"
                   checked={verified}
                   onChange={()=>{setVerified(!verified)}}/>
            <label className="form-check-label" htmlFor="gridCheck" id="gridCheckLabel">
               Verified
            </label>
          </div>
        </div>
      </div>
    </div>
    <div className='row mg-t-20'>
        <button type="submit" className="btn btn-primary font-weight-bold btn-bg">RUN</button>
    </div>
  </form>
}

export default Form;