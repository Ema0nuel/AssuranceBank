import{n as c}from"./navbar-BIr1TaOR.js";import{r as b}from"./reset-CYKpHJhn.js";import{s as n}from"./toast-DRvdR0y9.js";import{a as u,e as m}from"./spinner-bKIlGSde.js";import{loginAndSendOtp as f}from"./loginHandler-BM0LwHgt.js";import{s as p}from"./supabaseClient-BzAKCqO5.js";import{N as g}from"./logo-nobg-UuYbhWoI.js";import{L as x}from"./logo-B-uS21Zh.js";import"./email-CEApoU8E.js";import"./sendEmail-89Z52C2k.js";const S=async()=>{b("Login");const o=c();if((await p.auth.getSession()).data.session){window.location.href="/dashboard";return}async function d(){o.pageEvents?.();const t=document.getElementById("txt_pwd"),a=document.getElementById("showHide");a&&t&&a.addEventListener("click",function(){t.type==="password"?(t.type="text",a.textContent="HIDE"):(t.type="password",a.textContent="SHOW")});const e=document.getElementById("login-form");e&&(e.noValidate=!0,e.addEventListener("submit",async i=>{i.preventDefault();const r=e.accessID.value.trim(),s=e.txt_pwd.value;if(!r||!s){n("Please enter your Access ID and password.","error");return}u();try{await f(r,s),n("Login successful!","success"),window.location.href="/dashboard"}catch(l){n(l.message||"Login failed. Please check your credentials.","error")}finally{m()}}))}return{html:`
      <main class="main min-h-screen flex flex-col bg-brand-light dark:bg-brand-dark transition-colors duration-300" id="top">
        <div id="nav-actions" class="flex items-center gap-2 ml-2 absolute top-4"></div>
        <div class="flex flex-1 items-center justify-center py-12 px-4">
          <div class="w-full max-w-md space-y-8">
            <div class="flex flex-col items-center mb-6">
              <a href="/" data-nav class="flex items-center justify-center mb-4">
                <img src="${g}" alt="Assurance Bank logo" class="h-16 w-auto block dark:hidden" />
                <img src="${x}" alt="Assurance Bank logo" class="h-16 w-auto hidden dark:block" />
              </a>
              <h1 class="flex items-center gap-2 text-2xl font-bold text-brand-navy dark:text-brand-sun">
                <i class="fa-solid fa-lock"></i>
                Log in
              </h1>
              <div class="text-sm text-brand-gray dark:text-brand-light mt-2">
                <span class="font-semibold">New User?</span>
                <a href="/register" data-nav class="text-brand-sun hover:underline ml-1">Create account</a>
              </div>
            </div>
            <div class="bg-white dark:bg-brand-dark rounded-xl shadow-lg p-8">
              <form id="login-form" autocomplete="off" class="space-y-6" novalidate>
                <div>
                  <label for="accessID" class="block text-sm font-medium text-brand-navy dark:text-brand-sun mb-1">Access ID</label>
                  <input class="block w-full rounded-lg border border-brand-gray dark:border-brand-navy bg-brand-light dark:bg-brand-dark px-4 py-3 text-brand-navy dark:text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-sun transition" type="text" name="accessID" id="accessID" placeholder="(email, username, or account number)" required>
                </div>
                <div>
                  <label for="txt_pwd" class="block text-sm font-medium text-brand-navy dark:text-brand-sun mb-1">Password</label>
                  <div class="relative">
                    <input type="password" name="txt_pwd" id="txt_pwd" maxlength="16" minlength="8" class="block w-full rounded-lg border border-brand-gray dark:border-brand-navy bg-brand-light dark:bg-brand-dark px-4 py-3 text-brand-navy dark:text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-sun transition pr-16" placeholder="********" required>
                    <button type="button" id="showHide" class="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-brand-sun hover:text-brand-navy focus:outline-none z-50">SHOW</button>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <label class="flex items-center gap-2 text-sm text-brand-navy dark:text-brand-light">
                    <input type="checkbox" class="rounded border-brand-gray dark:border-brand-navy focus:ring-brand-sun" id="rememberMe" checked>
                    Remember me
                  </label>
                  <a href="/forgot-password" data-nav class="text-sm text-brand-sun hover:underline">Forgot Password?</a>
                </div>
                <button class="w-full py-3 rounded-full bg-brand-sun text-white font-semibold shadow hover:bg-brand-navy hover:text-white transition-all duration-300" type="submit" name="login">Log in</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    `,pageEvents:d}};export{S as default};
