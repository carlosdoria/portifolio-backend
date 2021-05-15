import { Request, Response } from 'express'
import nodemailer from 'nodemailer'

class EmailController {
  async postEmail (req: Request, res: Response) {
    const { name, email, message } = req.body

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    transporter.sendMail({
      from: email,
      to: process.env.USER,
      replyTo: email,
      subject: name,
      text: message
    }).then(results => res.status(200).json({ Message: results }))
      .catch(err => res.status(400).json({ erro: 'Error: ' + err }))
  }
}

export default EmailController
