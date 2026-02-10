const { sendMail } = require("../services/emailService");

const sendContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields required" });
    }

    await sendMail({ name, email, subject, message });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("EMAIL ERROR 👉", err); 
    res.status(500).json({ error: "Failed to send message" });
  }
};


module.exports = { sendContactMessage };
