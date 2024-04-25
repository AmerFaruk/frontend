import Link from 'next/link';
import Image from 'next/image';
import '@/app/ui/signup.css'
export default function page() {
  return (
        <div className="signupPage">
        <div className="signup-container">
            <h2 className="h2">SIGN UP</h2>
            <p className="p-agreement">By continuing, you agree to our User Agreement and acknowledge 
                that you understand the Privacy Policy.</p>
            <label className="errorLabel" ></label>
            <div className="submit-container">
                <input
                    placeholder="Enter your email here"
                    className={'inputBox'}
                />
                
            </div>
            <label className="errorLabel" ></label>
            <div className="submit-container">
                <input
                    placeholder="Enter your username here"
                    className={'inputBox'}
                />
                
            </div>
            <label className="errorLabel"></label>
            <div className="submit-container">
                <input
                    placeholder="Enter your password here"
                    className={'inputBox'}
                />
                
            </div>
            <input className="loginButton" type="button" value={'Log In'} />
            
        </div>
    </div>
  );
}