import "./Afterlogin.css";
const Afterlogin = () => {
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="aferloginForm">
        <h3>Login Information</h3>

        <label for="username">UserID</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Adress</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log Out</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};

export default Afterlogin;
