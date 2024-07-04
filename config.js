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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_48_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDczLFxuICAgICAgICAxNixcbiAgICAgICAgMTc2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEzLFxuICAgICAgICA2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU5LFxuICAgICAgICA4MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MixcbiAgICAgICAgMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MixcbiAgICAgICAgMTE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODksXG4gICAgICAgIDExMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMwLFxuICAgICAgICA4MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDkwLFxuICAgICAgICAzNixcbiAgICAgICAgMTM3LFxuICAgICAgICA2NCxcbiAgICAgICAgODksXG4gICAgICAgIDM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNGanl3MDYvM1JJM2pxVG5ROHpNZS9Pd2h0U0dpejFrdVBkZVp3SEYvSHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlUwSHZuVmtVUjZPQjFJcXA0eWhSWlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGVjNjYxOTAtMmNlNS00MmQzLTg3ZGYtODVmZTY5YWZiOTljXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMTc1LFxuICAgICAgMjA5LFxuICAgICAgMTA2LFxuICAgICAgMTA1LFxuICAgICAgMTIzLFxuICAgICAgOTMsXG4gICAgICAxMTgsXG4gICAgICA0NCxcbiAgICAgIDI1LFxuICAgICAgMTU5LFxuICAgICAgMTk0LFxuICAgICAgMTMxLFxuICAgICAgMTA2LFxuICAgICAgMzYsXG4gICAgICA1NCxcbiAgICAgIDIzNyxcbiAgICAgIDE0OCxcbiAgICAgIDEwOSxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgMjM4LFxuICAgICAgMTMzLFxuICAgICAgMTkzLFxuICAgICAgODgsXG4gICAgICAxOTQsXG4gICAgICAxNzQsXG4gICAgICA3NCxcbiAgICAgIDE5MSxcbiAgICAgIDE4NyxcbiAgICAgIDc3LFxuICAgICAgMjMwLFxuICAgICAgNDEsXG4gICAgICA1MyxcbiAgICAgIDE0OCxcbiAgICAgIDk3LFxuICAgICAgMTM3LFxuICAgICAgODQsXG4gICAgICAyMjEsXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRNzRGOTYxWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA1MDkzODk5NDozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIklOVkVTVE9SIEZBV0FaXCIsXG4gICAgXCJsaWRcIjogXCIxNTY5NDY4OTYyODE2NjA6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUxqK3MwREVNR2ttN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkZjVWTUxGdnBOR2FISFpqU1BraXNReE1GRzZidzg5b0p6eWpTYm41TVVFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNEcGJWckRUM2MvdWo4UWcxVTAxT3dQSFF6b1dnZDVtTWNEakZrM2poL2F5Q0tVVGFYSnBQak5aaDZzc1VKOE4yNUJlRXV6YTlFLzZkMEdGdnc2MUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9KcFozcjhnYWhZZTR4TXprSXUyUnBVY1crK1dVNzZYWmFUQlVCcW5MbXo2czNyeTVHbGxneXBKQzBkMTdPYXhlM1h5QVZVWHZEa0FDYzF3c0tjMGdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNTA5Mzg5OTQ6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTExNjg4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
