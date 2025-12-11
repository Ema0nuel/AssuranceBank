import{s as a}from"./sendEmail-89Z52C2k.js";async function l({name:e,email:s,accountNumber:t,ip:o,geo:n}){const r=`
    <div style="font-family: 'Segoe UI', sans-serif; padding: 24px; background-color: #f4f4f4; color: #333;">
      <div style="max-width: 600px; margin: auto; background: white; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); overflow: hidden;">
        <div style="padding: 24px; text-align: center; background-color: #003865;">
          <img src="https://assurancebank.com/assets/logo-IVEkrxME.jpg" alt="Assurance Bank Logo" style="max-width: 120px; margin-bottom: 12px;" />
          <h1 style="color: white; margin: 0;">Welcome to Assurance Bank</h1>
        </div>
        <div style="padding: 24px;">
          <p>Hi <strong>${e}</strong>,</p>
          <p>Thank you for choosing <strong>Assurance Bank</strong>. Your account has been successfully created.</p>
          <h3 style="margin-top: 24px;">Account Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Account Number:</strong> ${t}</li>
            <li><strong>Registered IP:</strong> ${o}</li>
            <li><strong>Region:</strong> ${n.city}, ${n.region}, ${n.country}</li>
            <li><strong>Created On:</strong> ${new Date().toLocaleString("en-US",{timeZone:"Africa/Lagos"})}</li>
          </ul>
          <p style="margin-top: 24px;">
            You can access your dashboard anytime at:<br>
            <a href="https://assurancebank.com" style="color: #003865;">https://assurancebank.com</a>
          </p>
          <p style="font-size: 0.9rem; color: #777; margin-top: 32px;">
            If this wasn't you, please contact our support immediately.<br>
            Assurance Bank, proudly serving you with security and trust.
          </p>
        </div>
        <div style="padding: 16px; background: #003865; color: white; text-align: center;">
          &copy; ${new Date().getFullYear()} Assurance Bank
        </div>
      </div>
    </div>
  `;await a({to:s,subject:"Welcome to Assurance Bank",html:r})}async function c({to:e,name:s,otp:t}){const o=`
    <div style="font-family: Arial, sans-serif; color: #222;">
      <h2 style="color: #0a4d8c;">Assurance Bank</h2>
      <p>Dear ${s||"User"},</p>
      <p>Your One-Time Password (OTP) for login is:</p>
      <div style="font-size: 2rem; font-weight: bold; letter-spacing: 0.2em; color: #0a4d8c; margin: 16px 0;">
        ${t}
      </div>
      <p>This OTP is valid for 10 minutes. If you did not request this, please ignore this email.</p>
      <hr style="margin: 24px 0;">
      <p style="font-size: 0.9em; color: #888;">Assurance Bank &copy; ${new Date().getFullYear()}</p>
    </div>
  `;await a({to:e,subject:"Your One-Time Password (OTP) for Login",html:o})}export{c as a,l as s};
