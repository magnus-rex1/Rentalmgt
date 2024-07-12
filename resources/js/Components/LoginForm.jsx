import React, { useState } from 'react';
import '../../css/form.css';

const LoginForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="main">
      <input
        type="checkbox"
        id="chk"
        aria-hidden="true"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="chk" aria-hidden="true">
        {isChecked ? 'Sign up' : 'Login'}
      </label>
      {isChecked && (
        <div className="signup">
          <form>
            <input type="text" name="txt" placeholder="User name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="txt" placeholder="Phone number" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <button>Sign up</button>
          </form>
        </div>
      )}
      {!isChecked && (
        <div className="login">
          <form>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <button>Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
