import React from 'react'
import loaderImage from '../../../src/screen.png';

export const Label = props => {
    var sectionStyle = {
        height: "15px",
        backgroundImage: `url(${loaderImage})`,
        backgroundPosition: 'left',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat-x'
      };
  if(props.isLoading){
    return (
      <div className="divLoader" style={sectionStyle}>
      </div>
    );
  } else {
      console.log(props)
    return (
      <span className={"label-text" + (props.isChecked ? ' selected-text removed' : '') }>{props.value}</span>
    );
  }
}

export default Label