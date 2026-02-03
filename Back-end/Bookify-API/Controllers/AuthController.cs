using Bookify_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using BCrypt.Net;
using Bookify_API.DTOs;
using Microsoft.AspNetCore.Identity;

namespace Bookify_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext context;
        private readonly IConfiguration configuration;

        public AuthController(AppDbContext context, IConfiguration config)
        {
            this.context = context;
            this.configuration = config;
        }

        private string GenerateJwtToken(Utilisateur user, IConfiguration config)
        {
            var jwtSettings = config.GetSection("Jwt");
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim("role", user.Role),
                new Claim("id", user.IdUtilisateur.ToString())
            };

            var token = new JwtSecurityToken(
                issuer: jwtSettings["Issuer"],
                audience: jwtSettings["Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(Convert.ToDouble(jwtSettings["ExpireMinutes"])),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto dto)
        {
            if (await context.Utilisateurs.AnyAsync(u => u.Email == dto.Email))
                return BadRequest("Email déjà utilisé");

            var user = new Utilisateur
            {
                NomComplet = dto.NomComplet,
                Email = dto.Email,
                Telephone = dto.Telephone,
                Adresse = dto.Adresse,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password),
                Role = dto.Role
            };

            context.Utilisateurs.Add(user);
            await context.SaveChangesAsync();
            return Ok("Utilisateur créé avec succès");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto dto)
        {
            var user = await context.Utilisateurs.FirstOrDefaultAsync(u => u.Email == dto.Email);
            if (user == null) return Unauthorized("Utilisateur non trouvé");

            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash))
                return Unauthorized("Mot de passe incorrect");

            var token = GenerateJwtToken(user, configuration);

            return Ok(new
            {
                message = "Login réussi",
                token,
                user = new
                {
                    idUtilisateur = user.IdUtilisateur,
                    nom = user.NomComplet,
                    email = user.Email,
                    role = user.Role
                }
            });
        }
    }
}
