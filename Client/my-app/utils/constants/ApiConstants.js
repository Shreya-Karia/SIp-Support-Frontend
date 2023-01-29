export const BASE_URL = "https://sipandsupport.up.railway.app/";

export const AUTH_URL = BASE_URL+"auth/google" 
export const LOGOUT_URL = BASE_URL+"/logout" 
export const SIGNUP_URL = BASE_URL+"/register" 
export const LOGIN_URL = BASE_URL+"/login" 
export const MEMBERSHIP_URL= BASE_URL+"/membership/:userId" 
export const SUPPORT_URL= BASE_URL+"/support/:userId" 
export const SOCIALS_URL= BASE_URL+"/socials/:userId" 
export const FOLLOWERS_URL= BASE_URL+"/followers/:userId" 
export const POST_URL= BASE_URL+"/post/:userId" 
export const COMMENT_URL= BASE_URL+"/post/comment/:userId" 


export async function getAuth() {
    const res = await fetch(AUTH_URL);
    const json = await res.json();
    console.log(json);
  }