require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 5000,
    EMAIL_SERVICE: process.env.EMAIL_SERVICE, // e.g., 'gmail'
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_TO: process.env.EMAIL_TO,
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000']
};
