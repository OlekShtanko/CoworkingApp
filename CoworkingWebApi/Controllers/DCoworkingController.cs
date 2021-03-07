using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoworkingWebApi.Models;

namespace CoworkingWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DCoworkingController : ControllerBase
    {
        private readonly DbCoworkingContext _context;

        public DCoworkingController(DbCoworkingContext context)
        {
            _context = context;
        }

        // GET: api/DCoworking
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DCoworking>>> GetDCoworkings()
        {
            return await _context.DCoworkings.ToListAsync();
        }

        // GET: api/DCoworking/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DCoworking>> GetDCoworking(int id)
        {
            var dCoworking = await _context.DCoworkings.FindAsync(id);

            if (dCoworking == null)
            {
                return NotFound();
            }

            return dCoworking;
        }

        // PUT: api/DCoworking/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDCoworking(int id, DCoworking dCoworking)
        {
            if (id != dCoworking.id)
            {
                return BadRequest();
            }

            _context.Entry(dCoworking).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DCoworkingExists(id))
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

        // POST: api/DCoworking
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DCoworking>> PostDCoworking(DCoworking dCoworking)
        {
            _context.DCoworkings.Add(dCoworking);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDCoworking", new { id = dCoworking.id }, dCoworking);
        }

        // DELETE: api/DCoworking/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DCoworking>> DeleteDCoworking(int id)
        {
            var dCoworking = await _context.DCoworkings.FindAsync(id);
            if (dCoworking == null)
            {
                return NotFound();
            }

            _context.DCoworkings.Remove(dCoworking);
            await _context.SaveChangesAsync();

            return dCoworking;
        }

        private bool DCoworkingExists(int id)
        {
            return _context.DCoworkings.Any(e => e.id == id);
        }
    }
}
