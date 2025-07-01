const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=nzIVhBTb#1xD-spMxnkSJ-5LxlbgsQ2sFqpAkwLEyPttyNfUumK0",
MONGODB: process.env.MONGODB || "mongodb://mongo:uelqlLDLnPXHkmcOBKhEcgWvlgmyVqPd@junction.proxy.rlwy.net:12007",
    
};
