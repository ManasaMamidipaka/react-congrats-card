const element = (
  // Write your code here.

  <div className="container">
    <h1 className="congrats-heading"> Congratulations </h1>
    <div className="congrats-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="name">Kiran V</h1>
      <p className="paragraph">
        {" "}
        Vishnu institute of Computer Education Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
