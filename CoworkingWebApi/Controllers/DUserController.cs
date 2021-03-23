using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoworkingWebApi.Models;
using System.Text;
using System.Security.Cryptography;

namespace CoworkingWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DUserController : ControllerBase
    {
        private readonly DbCoworkingContext _context;

        public DUserController(DbCoworkingContext context)
        {
            _context = context;
        }

        // GET: api/DUser
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DUser>>> GetDUsers()
        {
            return await _context.DUsers.ToListAsync();
        }

        // GET: api/DUser/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DUser>> GetDUser(int id)
        {
            var userData = await _context.DUsers.FindAsync(id);

            if (userData == null)
            {
                return NotFound();
            }

            return userData;
        }


        // PUT: api/DUser/5

        [HttpPut("{id}")]
        public async Task<IActionResult> PutDUser(int id, DUser dUser)
        {
            if (id != dUser.id)
            {
                return BadRequest();
            }

            _context.Entry(dUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DUserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DUser
        [HttpPost]
        public async Task<ActionResult<DUser>> PostDUser(DUser dUser)
        {
            DUser isLoginExcist = _context.DUsers.FirstOrDefault(u => u.login == dUser.login);
            if (isLoginExcist == null)
            {
                byte[] ByteData = Encoding.ASCII.GetBytes(dUser.password);
                MD5 md5 = MD5.Create();
                byte[] HashData = md5.ComputeHash(ByteData);
                StringBuilder oSb = new StringBuilder();
                for (int x = 0; x < HashData.Length; x++)
                {
                    oSb.Append(HashData[x].ToString("x2"));
                }
                dUser.password = oSb.ToString();
                _context.DUsers.Add(dUser);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetDUser", new { id = dUser.id }, dUser);
            }
            return BadRequest("Login already exists.");
        }

        // DELETE: api/DUser/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DUser>> DeleteDUser(int id)
        {
            var dUser = await _context.DUsers.FindAsync(id);
            if (dUser == null)
            {
                return NotFound();
            }

            _context.DUsers.Remove(dUser);
            await _context.SaveChangesAsync();

            return dUser;
        }

        private bool DUserExists(int id)
        {
            return _context.DUsers.Any(e => e.id == id);
        }
    }
}
