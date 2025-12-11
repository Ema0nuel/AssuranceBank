const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/loginHandler-BM0LwHgt.js","assets/supabaseClient-BzAKCqO5.js","assets/email-CEApoU8E.js","assets/sendEmail-89Z52C2k.js"])))=>i.map(i=>d[i]);
import{_ as u}from"./index-D5aHfe0C.js";import{n as m}from"./navbar-BIr1TaOR.js";import{r as p}from"./reset-CYKpHJhn.js";import{s as n}from"./toast-DRvdR0y9.js";import{s as r}from"./supabaseClient-BzAKCqO5.js";import"./logo-nobg-UuYbhWoI.js";import"./logo-B-uS21Zh.js";async function f(s,d){let e=null;if(e=(await r.from("profiles").select("id, email, full_name").or(`email.eq.${s},username.eq.${s}`).maybeSingle()).data,!e&&s){const{data:o}=await r.from("accounts").select("user_id").eq("account_number",s).maybeSingle();if(o&&o.user_id){const{data:c}=await r.from("profiles").select("id, email, full_name").eq("id",o.user_id).maybeSingle();e=c}}if(!e||!e.id)throw new Error("User not found. Please use a valid email address or account number.");const{data:t}=await r.from("login_otps").select("*").eq("user_id",e.id).eq("otp",d).eq("used",!1).order("created_at",{ascending:!1}).limit(1).single();if(!t||new Date(t.expires_at)<new Date)throw new Error("Invalid or expired OTP.");await r.from("login_otps").update({used:!0}).eq("id",t.id);const{data:a,error:i}=await r.auth.signInWithPassword({email:e.email,password:t.temp_password});if(await r.from("login_otps").update({temp_password:null}).eq("id",t.id),i||!a?.session)throw new Error("Session could not be created.");return await r.auth.setSession(a.session),!0}const k=async()=>{p("Verify Login");const s=m();async function d(){s.pageEvents?.();const e=document.getElementById("verifyotp");e&&e.addEventListener("submit",async t=>{t.preventDefault();const a=e.otp.value.trim(),i=sessionStorage.getItem("lastAccessID")||"";if(a.length!==6){n("OTP must be 6 digits.","error");return}try{await f(i,a),n("Login successful!","success"),window.location.href="/dashboard"}catch(o){n(o.message||"Invalid or expired OTP.","error")}e.reset()});const l=document.getElementById("resendBtn");l&&l.addEventListener("click",async()=>{const t=sessionStorage.getItem("lastAccessID")||"";if(!t){n("Please login again to resend OTP.","error");return}try{const{loginAndSendOtp:a}=await u(async()=>{const{loginAndSendOtp:i}=await import("./loginHandler-BM0LwHgt.js");return{loginAndSendOtp:i}},__vite__mapDeps([0,1,2,3]));await a(t,""),n("OTP resent to your email.","info")}catch{n("Could not resend OTP. Please try again.","error")}})}return{html:`
      <main id="top" class="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-brand-dark transition-colors duration-300 px-4 py-12">
        <div id="nav-actions" class="absolute top-4 left-4"></div>
        <div class="max-w-md w-full space-y-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl rounded-lg p-8">
          <div class="flex justify-center">
            <a href="/" data-nav class="block">
              <img src="/src/images/logo-nobg.png" alt="Assurance Bank" class="h-12 w-auto block dark:hidden" />
              <img src="/src/images/logo.jpg" alt="Assurance Bank" class="h-12 w-auto hidden dark:block" />
            </a>
          </div>
          <div class="text-center space-y-1">
            <h1 class="text-2xl font-bold flex items-center justify-center gap-2">
              <i class="fa fa-lock text-yellow-400"></i>
              Verify Login
            </h1>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Kindly enter the One-Time Password sent to your email address.
            </p>
          </div>
          <form id="verifyotp" class="space-y-4">
            <input
              type="number"
              name="otp"
              id="otp"
              maxlength="6"
              minlength="6"
              placeholder="Enter OTP"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-teal"
            />
            <div class="text-sm text-gray-700 dark:text-gray-300">
              <a href="/" data-nav class="text-brand-teal underline">Home</a>
              &nbsp;|&nbsp; Didn’t receive OTP?
              <button type="button" id="resendBtn" class="text-brand-yellow underline ml-1">Resend OTP</button>
            </div>
            <button
              type="submit"
              id="login"
              name="login"
              class="w-full bg-brand-yellow hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition"
            >
              Log in
            </button>
            <div id="overlay" class="hidden"></div>
            <div id="spoke" class="mt-4"></div>
            <div id="speak" class="mt-4"></div>
          </form>
        </div>
      </main>
    `,pageEvents:d}};export{k as default};
