import Link from 'next/link';
import Image from 'next/image';
import '@/app/ui/styles/globals.css'
import '@/app/dashboard/login/login.css'
import '@/app/dashboard/signup/Signup.css'



export default function page() {
    return (

        <div className="loginPage">
            <a href="/dashboard/login">Here</a>
        </div>
    );
}