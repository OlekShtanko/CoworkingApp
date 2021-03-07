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
    public class DCoworkingFunctionController : ControllerBase
    {
        private readonly DbCoworkingContext _context;

        public DCoworkingFunctionController(DbCoworkingContext context)
        {
            _context = context;
        }

        // GET: api/DCoworkingFunction
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DCoworkingFunction>>> GetDCoworkingFunctions()
        {
            return await _context.DCoworkingFunctions.ToListAsync();
        }

        // GET: api/DCoworkingFunction/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DCoworkingFunction>> GetDCoworkingFunction(int id)
        {
            var dCoworkingFunction = await _context.DCoworkingFunctions.FindAsync(id);

            if (dCoworkingFunction == null)
            {
                return NotFound();
            }

            return dCoworkingFunction;
        }

        // PUT: api/DCoworkingFunction/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDCoworkingFunction(int id, DCoworkingFunction dCoworkingFunction)
        {
            if (id != dCoworkingFunction.id)
            {
                return BadRequest();
            }

            _context.Entry(dCoworkingFunction).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DCoworkingFunctionExists(id))
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

        // POST: api/DCoworkingFunction
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DCoworkingFunction>> PostDCoworkingFunction(DCoworkingFunction dCoworkingFunction)
        {
            _context.DCoworkingFunctions.Add(dCoworkingFunction);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDCoworkingFunction", new { id = dCoworkingFunction.id }, dCoworkingFunction);
        }

        // DELETE: api/DCoworkingFunction/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DCoworkingFunction>> DeleteDCoworkingFunction(int id)
        {
            var dCoworkingFunction = await _context.DCoworkingFunctions.FindAsync(id);
            if (dCoworkingFunction == null)
            {
                return NotFound();
            }

            _context.DCoworkingFunctions.Remove(dCoworkingFunction);
            await _context.SaveChangesAsync();

            return dCoworkingFunction;
        }

        private bool DCoworkingFunctionExists(int id)
        {
            return _context.DCoworkingFunctions.Any(e => e.id == id);
        }
    }
}
