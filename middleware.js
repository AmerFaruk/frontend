import {NextResponse} from "next/server";



export function middleware(request) {
    const currentUser = request.cookies.get("currentUser");
    let user;
    if(currentUser){
         user = JSON.parse(currentUser.value);
    }

    if (!currentUser &&(request.nextUrl.pathname.includes('/main/') || request.nextUrl.pathname.includes('/admin/'))) {
        return NextResponse.redirect("http://localhost:3000/dashboard/login")
    }

    if(user && user.role ==="MERCHANT" && request.nextUrl.pathname.includes('/merchant/')){
        return NextResponse.redirect("http://localhost:3000/404");
    }

    if(user && user.role ==="ADMIN" && request.nextUrl.pathname.includes('/admin/')){
        return NextResponse.redirect("http://localhost:3000/404");
    }

    if(user && user.role ==="USER" && request.nextUrl.pathname.includes('/main/')){
        return NextResponse.redirect("http://localhost:3000/404");
    }


}