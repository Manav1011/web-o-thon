import React from "react";

function Registration() {
  return (
    <div className="container md-10 xl-12 xxl-12 sm-6">
    <div  className="mb-3 mt-5">
    <label for="exampleFormControlInput1" className="form-label">Event Name</label>
    <input type="name" className="form-control" id="exampleFormControlInput1"/>
  </div>
  <div  className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Event Location</label>
    <input type="text" className="form-control" id="exampleFormControlInput1"/>
  </div>
  <div className="mb-3">
<div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  </div>

  </div>
  </div>
  );
}

export default Registration;