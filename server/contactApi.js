// server/contactApi.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter using Infomaniak SMTP settings
const transporter = nodemailer.createTransport({
  host: 'mail.infomaniak.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Function to generate a well-designed HTML email template for admin
const generateAdminEmailTemplate = (name, email, message) => {
  // Format the current date
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #3B82F6;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .content {
          background-color: #F9FAFB;
          padding: 20px;
          border-left: 1px solid #E5E7EB;
          border-right: 1px solid #E5E7EB;
        }
        .footer {
          background-color: #F3F4F6;
          padding: 15px;
          text-align: center;
          font-size: 14px;
          color: #6B7280;
          border-radius: 0 0 8px 8px;
          border: 1px solid #E5E7EB;
          border-top: none;
        }
        .message-box {
          background-color: white;
          padding: 15px;
          border-radius: 5px;
          border: 1px solid #E5E7EB;
          margin-top: 15px;
        }
        .info-row {
          margin-bottom: 10px;
        }
        .label {
          font-weight: bold;
          color: #4B5563;
        }
        .timestamp {
          color: #6B7280;
          font-size: 14px;
          margin-top: 5px;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .highlight {
          color: #2563EB;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🛡️ Aegis Forge</div>
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <p>You have received a new message from your website contact form.</p>
          
          <div class="info-row">
            <span class="label">Name:</span> 
            <span class="highlight">${name}</span>
          </div>
          
          <div class="info-row">
            <span class="label">Email:</span> 
            <a href="mailto:${email}" class="highlight">${email}</a>
          </div>
          
          <div class="info-row">
            <span class="label">Submitted on:</span> 
            <span>${formattedDate}</span>
          </div>
          
          <div class="info-row">
            <span class="label">Message:</span>
          </div>
          
          <div class="message-box">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the Aegis Forge contact form.</p>
          <p>© ${new Date().getFullYear()} Aegis Forge. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Function to generate a well-designed HTML email template for user confirmation
const generateUserEmailTemplate = (name) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Contacting Us</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td align="center" style="padding: 20px;">
            <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px;">
              <!-- Header -->
              <tr>
                <td align="center" bgcolor="#3B82F6" style="padding: 20px; border-radius: 8px 8px 0 0; color: white;">
                  <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">🛡️ Aegis Forge</div>
                  <h1 style="margin: 0;">Thank You for Contacting Us</h1>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td bgcolor="#F9FAFB" style="padding: 20px; border-left: 1px solid #E5E7EB; border-right: 1px solid #E5E7EB;">
                  <p>Dear ${name},</p>
                  
                  <p>Thank you for reaching out to us. We've received your message and will respond as soon as possible.</p>
                  
                  <p>Best regards,<br>The Aegis Forge Team</p>
                  
                  <table border="0" cellspacing="0" cellpadding="0" align="center" style="margin: 20px auto;">
                    <tr>
                      <td align="center" bgcolor="#22C55E" style="border-radius: 5px;">
                        <a href="https://www.aegisforge.com" 
                           target="_blank"
                           style="display: inline-block; padding: 12px 24px; font-size: 16px; color: #ffffff; font-weight: bold; text-decoration: none; border-radius: 5px; font-family: Arial, sans-serif;">
                          Visit Our Website
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td bgcolor="#F3F4F6" style="padding: 15px; text-align: center; font-size: 14px; color: #6B7280; border-radius: 0 0 8px 8px; border: 1px solid #E5E7EB; border-top: none;">
                  <p style="margin: 5px 0;">© ${new Date().getFullYear()} Aegis Forge. All rights reserved.</p>
                  <p style="margin: 5px 0;">This is an automated response. Please do not reply to this email.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

// API endpoint to handle contact form submissions
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide name, email, and message' 
    });
  }

  try {
    // Generate the HTML email templates
    const adminHtmlTemplate = generateAdminEmailTemplate(name, email, message);
    const userHtmlTemplate = generateUserEmailTemplate(name);
    
    // Email content for admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER, 
      to: process.env.CONTACT_RECIPIENT || process.env.EMAIL_USER, // Where to send contact form submissions
      subject: `Aegis Forge Contact: Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: adminHtmlTemplate
    };

    // Email content for user confirmation
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Send to the user's email
      subject: `Thank you for contacting Aegis Forge`,
      text: `
        Dear ${name},
        
        Thank you for contacting Aegis Forge. We have received your message and will get back to you shortly.
        
        Best regards,
        The Aegis Forge Team
      `,
      html: userHtmlTemplate
    };

    // Send email to admin
    await transporter.sendMail(adminMailOptions);
    
    // Send confirmation email to user
    await transporter.sendMail(userMailOptions);
    
    // Log success for debugging
    console.log(`Emails sent successfully to admin and user (${email})`);
    
    // Return success response
    res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully. You will also receive a confirmation email.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

module.exports = router;