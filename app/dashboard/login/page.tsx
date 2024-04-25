import Link from 'next/link';
import Image from 'next/image';
import '@/app/ui/globals.css';
import '@/app/ui/login.css';
export default function page() {
  return (
        
          <div className="loginPage">
            <div className="left-container">
                <h2 className='bold-h'>LOG IN</h2>
                <p className="p-agreement">By continuing, you agree to our User Agreement and acknowledge 
                    that you understand the Privacy Policy.</p>
                <label className="errorLabel" ></label>
                <div className="submit-container">
                    <input
                        placeholder="Username"
                        className={'inputBox'}
                    />
                </div>
                <label className="errorLabel"></label>
                <div className="submit-container">
                    <input
                        placeholder="Password"
                        className={'inputBox'}
                    />
                </div>
                <Link href="/dashboard/login"><input className="loginButton" type="button" value={'Log In'} /></Link>
            </div>
            <div className="right-container">
                <h1 className="bold-h">WELCOME TO RECOMMEND AND REVIEW SYSTEM</h1>
                <p className="introduction light-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet sem a ante tincidunt, ut ultrices ante sagittis. Cras in hendrerit dolor, sed accumsan augue. Praesent porta fermentum purus, eu sagittis dolor ultricies vel. Nullam id tellus at ante consequat malesuada eget id metus    </p>
                <a className="signupButton" href="/dashboard/signup">SIGN UP</a>
            </div>
          </div>
  );
}