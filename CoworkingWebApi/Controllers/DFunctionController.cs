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
    public class DFunctionController : ControllerBase
    {
        private readonly DbCoworkingContext _context;

        public DFunctionController(DbCoworkingContext context)
        {
            _context = context;
        }

        // GET: api/DFunction
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DFunction>>> GetDFunctions()
        {
            return await _context.DFunctions.ToListAsync();
        }

        // GET: api/DFunction/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DFunction>> GetDFunction(int id)
        {
            var dFunction = await _context.DFunctions.FindAsync(id);

            if (dFunction == null)
            {
                return NotFound();
            }

            return dFunction;
        }

        // PUT: api/DFunction/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDFunction(int id, DFunction dFunction)
        {
            if (id != dFunction.id)
            {
                return BadRequest();
            }

            _context.Entry(dFunction).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DFunctionExists(id))
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

        // POST: api/DFunction
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DFunction>> PostDFunction(DFunction dFunction)
        {
            _context.DFunctions.Add(dFunction);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDFunction", new { id = dFunction.id }, dFunction);
        }

        // DELETE: api/DFunction/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DFunction>> DeleteDFunction(int id)
        {
            var dFunction = await _context.DFunctions.FindAsync(id);
            if (dFunction == null)
            {
                return NotFound();
            }

            _context.DFunctions.Remove(dFunction);
            await _context.SaveChangesAsync();

            return dFunction;
        }

        private bool DFunctionExists(int id)
        {
            return _context.DFunctions.Any(e => e.id == id);
        }
    }
}
