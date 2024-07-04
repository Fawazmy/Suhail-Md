const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348050938994";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_20_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDQwLFxuICAgICAgICA2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDkxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY5LFxuICAgICAgICA3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDgwLFxuICAgICAgICA1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMixcbiAgICAgICAgMTc4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyLFxuICAgICAgICA1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDU3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJldFhEbVFjOWxheGR4aVdlUDF1MU1vSTRSODNFY3M0N2RYNVdEaENWOHI0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCdTNDOVdzU1JudXpicmlaNjlxLUJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdiZjk4YmFjLTYzZWItNGQ2NC05OGY1LThiY2I2NWJlNmM2MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDE2NCxcbiAgICAgIDU2LFxuICAgICAgMjU0LFxuICAgICAgNCxcbiAgICAgIDg1LFxuICAgICAgNTAsXG4gICAgICA0MCxcbiAgICAgIDE2NCxcbiAgICAgIDIxMyxcbiAgICAgIDEwOCxcbiAgICAgIDEwNixcbiAgICAgIDExOCxcbiAgICAgIDE3OCxcbiAgICAgIDI1LFxuICAgICAgMTAzLFxuICAgICAgMzYsXG4gICAgICA5MixcbiAgICAgIDI0MCxcbiAgICAgIDI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDIxMCxcbiAgICAgIDE0OCxcbiAgICAgIDI0MixcbiAgICAgIDQsXG4gICAgICAyOCxcbiAgICAgIDIzMixcbiAgICAgIDQyLFxuICAgICAgODUsXG4gICAgICAyMjEsXG4gICAgICAxNDAsXG4gICAgICAxMTQsXG4gICAgICAyNDksXG4gICAgICA1NCxcbiAgICAgIDE1LFxuICAgICAgNTEsXG4gICAgICAxMjAsXG4gICAgICAxMjUsXG4gICAgICAxOTIsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFWUQ4SlJDRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA1MDkzODk5NDozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIklOVkVTVE9SIEZBV0FaXCIsXG4gICAgXCJsaWRcIjogXCIxNTY5NDY4OTYyODE2NjA6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUhqK3MwREVOYkdoTFFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkZjVWTUxGdnBOR2FISFpqU1BraXNReE1GRzZidzg5b0p6eWpTYm41TVVFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIitzYm9kTnFhSlMzcnFJUWlNUVphZGJjQmFiNm9wSVlOTERWT0lJRURUZ3Y5TGpFcm8vcStsQW0xTmhIVU1DOCtnN0VkNkdyNEdnN2ZLY2thYUthRUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1jdG9CdkszVnVJamc1bDY4UFpvcGp0Zi9XYzh2OTZueVlxN0VtZ2xvdml1WjhrWmlQdnVtdGRSSTFxRWNlYnlPcFpQckx3UXAvd0d5cE4xSklqdGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNTA5Mzg5OTQ6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NzM5MjI1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
