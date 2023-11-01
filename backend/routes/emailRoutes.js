const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    // Configuration du serveur de messagerie
    service: "Gmail",
    auth: {
      user: "mohamedadam000021@gmail.com", // Remplacez par votre adresse e-mail
      pass: "mabpaqwjcboohici",
    } // Remplacez par votre mot de passe
  });

  const mailOptions = {
    from: 'mohamedadam000021@gmail.com', // Remplacez par votre adresse e-mail
    to: to,
    subject: 'Confirmation de paiement',
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Erreur lors de l\'envoi de l\'e-mail:', error);
      res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'e-mail' });
    } else {
      console.log('E-mail envoyé avec succès:', info.response);
      res.status(200).json({ message: 'E-mail envoyé avec succès' });
    }
  });
});

module.exports = router;
