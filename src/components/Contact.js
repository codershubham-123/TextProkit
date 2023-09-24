import React from 'react'

function Contact(props) {

    function submit(){
        alert("Form submitted successfully.")
    }

  return (
    <div>
      <form>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Enter your name</label>
    <input type="text" className="form-control" id="ename" style={{backgroundColor : props.mode === "dark" ? "rgb(67 108 141)" : 'white', color : props.mode === "dark" ? "white" : 'black'}} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" style={{backgroundColor : props.mode === "dark" ? "rgb(67 108 141)" : 'white', color : props.mode === "dark" ? "white" : 'black'}} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="mobile" className="form-label">Email Mobile.No</label>
    <input type="text" className="form-control" id="mobile" style={{backgroundColor : props.mode === "dark" ? "rgb(67 108 141)" : 'white', color : props.mode === "dark" ? "white" : 'black'}} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input type="text" className="form-control" id="address" style={{backgroundColor : props.mode === "dark" ? "rgb(67 108 141)" : 'white', color : props.mode === "dark" ? "white" : 'black'}}/>
    
  </div>
  
  <button onClick={submit} type="button" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Contact
