//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaV3nsc9Gv7VaFujMv1G";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaV3nsc9Gv7VaFujMv1G";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/0f089184835ed3d3b1f8c.jpg";
global.devs = "923189492995";
global.sudo = process.env.SUDO || "923189492995,923439597938";
global.owner = process.env.OWNER_NUMBER || "923189492995";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c71eab884ac90ecbf8d1c.png";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0kwWU9iY21EdFpSWTY0djdqN1VlMzQxeHRxTVAvVWlESGRwKzJvK1JFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEEvdW53bXJzcnE3elBra1ZubjhZRTNvQ25IUEl5SkFQRk1zVGk4alp4Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SjR3WGc1bUZGdFdnYmxpbmNGQXZmb0xqNDhyNnNyVXR2SjR6NUtHZDE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RDcwc3RNVjc3Rzg5QXZpUHMrV0c5T3BSNFFFMFZmOEY5eEl4TW5LaFZnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1BeWRpVGErdWZQRXpwZitrYVZmVm1uSEUzalJqblF6amJTY0dpODBqR289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNucVVoNkFoNXR3ckluM1J2OFN4MzdKK1BUMWU3Q3pHeFYxQlZjSE1mRWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFAvcDZXMFRtbDg0dXA5VUErSnp5R3dmbTJMcHorZ0tqeWVGZTlXTXhtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmhGMkR1Zi9lM2RaWGxqS0ZuTS9GLzNDMmYzQ0JQRlB2YzVGV3ViaDZYUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh2V2VxVTNyeWEyTVNsMzl0WHJlS01WczdYRU1BaldDVzNIQ1o3TzI2VDh2QkRQdTdKRjJvYUFzaFdUdnpqOUI1QXVrQWtQQk1ieVkxczZuRUd0NkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjgsImFkdlNlY3JldEtleSI6Ilo0aXk0eFFRS3Rha1ZZdEl5ZE1kY1N0VVZnWGJPK0hOeDVGNVBDVStHNVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZDbWRKN1c4VGZtQzU3WXN0VGxvQ1EiLCJwaG9uZUlkIjoiN2IxYjRiNTYtNDFmNC00MTAyLWFkOTktODQ5MjQwOGQ2N2Y2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhNZ1l1RjhwcDFoZnhQcVZ3YXlhWUlZcFRpYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTjlkS3NwdFZuRzJOWkg5ZTZXRGI5R2cyTHc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWTk2Wlo0TTkiLCJtZSI6eyJpZCI6IjkyMzE4OTQ5Mjk5NToxOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHZ0L004R0VNK3ZqYmNHR0NFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM3o5L0paRFdlVDBhUU14WlpVQ3hkTmM5M0xoSWJpb3ZEaEc2RjRaU3RnZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVjBuZVBDeFBQaWhUSENNUk9qSFBJWW9jcHlJV2toZk4vWUNzaTk0VEF2NDZKQ3VWVnpxd2ZkM1QzbTcvSmlCNnFPOStRMWdIODZaQktsSDZDVmpvQUE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik5Yd3lNRFV1NkJkVGp0TW1jNlBESmJrYjNtZjFVVGF3Y1RQVmhrajhlUmpnVTMvanVqNHVhQWh4RnBESkxwa2NyVEgxTHhkQlZyR1phK3pHVDZ6YkNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTg5NDkyOTk1OjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ4L2Z5V1Exbms5R2tETVdXVkFzWFRYUGR5NFNHNHFMdzRSdWhlR1VyWUkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjYxNzUxOTV9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "> ᴘᴏᴡᴇʀᴇᴅ ʙʏ *༈֎Ă̈wais Ĭ̈qbal⭐⃟❀❥︎* ㋛︎",
  author: process.env.PACK_AUTHER || "AWAIS IQBAL",
  packname: process.env.PACK_NAME || "W A S I",
  botname: process.env.BOT_NAME || "AWAIS_IQBAL",
  ownername: process.env.OWNER_NAME || "WASI KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "b1a3a2e8cb4558da4a93873d8ea1b670",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
