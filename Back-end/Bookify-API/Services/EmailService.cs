using System.Net;
using System.Net.Mail;

namespace Bookify_API.Services
{
    public class EmailService
    {
        private readonly IConfiguration config;

        public EmailService(IConfiguration config)
        {
            this.config = config;
        }
        public void Send(string toEmail,string code)
        {
            var smtpClient = new SmtpClient(config["Email:Smtp"], int.Parse(config["Email:Port"]))
            {
                Credentials = new NetworkCredential(
                    config["Email:Username"],
                    config["Email:Password"]
                ),
                EnableSsl = true
            };

            var message = new MailMessage
            {
                From = new MailAddress(config["Email:From"]),
                Subject = "Réinitialisation du mot de passe",
                Body = $"Votre code de réinitialisation est : {code}",
                IsBodyHtml = false
            };
            message.To.Add(toEmail);

            smtpClient.Send(message);
        }
    }
}
