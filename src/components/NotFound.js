import React from "react";

function NotFound() {
  return (
    <div className="container text-center py-5 my-5">
      <div className="display-4 pt-5 mt-5">
        <span className="text-danger">Ooops!</span> It's a 404
      </div>
      <div className="lead">
        Sorry! Couldn't find what you were looking for....
      </div>
    </div>
  );
}

export default NotFound;
