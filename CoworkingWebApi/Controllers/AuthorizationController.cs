using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using CoworkingWebApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace CoworkingWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorizationController : ControllerBase
    {
        private IConfiguration _config;
        private readonly DbCoworkingContext _context;

        public AuthorizationController(IConfiguration config , DbCoworkingContext context)
        {
            _config = config;
            _context = context;
        }
        [HttpGet]
        public IActionResult Login(string username, string pass)
        {
            DUser auth = new DUser();
            auth.login = username;
            auth.password = pass;
            IActionResult response = Unauthorized();

            var user = AuthenticateUser(auth);
            if (user != null)
            {
                var tokenStr = GenerateJSONWebToken(user);
                response = Ok(new { token = tokenStr });
            }
            return response;
        }
        private DUser AuthenticateUser(DUser auth)
        {
            DUser user = null;
            byte[] ByteData = Encoding.ASCII.GetBytes(auth.password);
            MD5 md5 = MD5.Create();
            byte[] HashData = md5.ComputeHash(ByteData);
            StringBuilder oSb = new StringBuilder();
            for (int x = 0; x < HashData.Length; x++)
            {
                oSb.Append(HashData[x].ToString("x2"));
            }
            auth.password = oSb.ToString();
            DUser userData = _context.DUsers.FirstOrDefault(u => u.login == auth.login &&
            u.password == auth.password);
            if (userData != null)
            {
                if (auth.login == userData.login && auth.password == userData.password)
                {
                    user = new DUser { login = userData.login, password = userData.password, id=userData.id};
                }
                return user;
            }
            return null;
        }
       
        
        private string GenerateJSONWebToken(DUser userinfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub,userinfo.login),
                new Claim(JwtRegisteredClaimNames.Email,userinfo.id.ToString())
        };
            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);

            var encodetoken = new JwtSecurityTokenHandler().WriteToken(token);
            return encodetoken;
        }
        [Authorize]
        [HttpPost("Post")]
        public string Post()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            IList<Claim> claim = identity.Claims.ToList();
            var userName = claim[1].Value;
            return userName;
        }
    }
}
