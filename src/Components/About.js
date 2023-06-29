import React from "react";


const About = (props) => {
  
  // const [myStyle, setmyStyle] = useState({
  //       color: "black",
  //   backgroundColor: "white",
  //   border: "1px solid black",
  // });

  let myStyle ={
    color: props.mode === 'dark'?'white':'#396179',
    backgroundColor: props.mode === 'dark'?'#396179':'white',
    border: '1px solid',
    borderColor: props.mode === 'dark'?'white':'black',
  }
  return (
    <>
      <div className="container" >
        <h2 className="my-3"  style={{color: props.mode === 'dark'?'white':'#396179',}}>About Us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item my-1" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
               <strong>Analyze Your text</strong> 
               </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse "
              style={myStyle}
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-3 mx-3" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and
                efficiently. Be it word count, character count or
              </div>
            </div>
          </div>
          <div className="accordion-item my-1" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              style={myStyle}
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-3 mx-3" style={myStyle}>
                TextUtils is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                Textutils reports the number of words and characters. Thus it is
                suitable for writing text with word/ character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item my-1" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
               <strong>Browser Compatible</strong> 
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              style={myStyle}
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-3 mx-3" style={myStyle}>
                This word counter software works in any web browsers such as
                Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                count characters in facebook, blog, books, excel document, pdf
                document, essays, etc.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container my-3">
          <button  onClick={toggleStyle} type="button" className="btn btn-primary ">
           {btntext}
                </button>
      <div className="form-check form-switch container my-3">
        <input className="form-check-input" onClick={toggleStyle} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" onClick={toggleStyle} for="flexSwitchCheckDefault">{btntext}</label>
      </div>
        </div> */}
      </div>
    </>
  );
};

export default About;
