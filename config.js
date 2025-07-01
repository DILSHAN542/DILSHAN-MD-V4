const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    
SESSION_ID: process.env.SESSION_ID || "ILVSiaCC#fOx7O06_zGymRu0ojqoWdT0uK6LYGq5426sjmWOeHhc",
MONGODB: process.env.MONGODB || "mongodb://mongo:uelqlLDLnPXHkmcOBKhEcgWvlgmyVqPd@junction.proxy.rlwy.net:12007",
    
};
