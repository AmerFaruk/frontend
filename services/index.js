import {AuthService} from "@/services/AuthService";


const baseUrl = "http://localhost:8080/";


export const authService = new AuthService(baseUrl);

