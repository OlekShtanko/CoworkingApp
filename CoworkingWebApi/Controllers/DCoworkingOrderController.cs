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
    public class DCoworkingOrderController : ControllerBase
    {
        private readonly DbCoworkingContext _context;

        public DCoworkingOrderController(DbCoworkingContext context)
        {
            _context = context;
        }

        // GET: api/DCoworkingOrder
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DCoworkingOrder>>> GetDCoworkingOrders()
        {
            return await _context.DCoworkingOrders.ToListAsync();
        }

        // GET: api/DCoworkingOrder/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DCoworkingOrder>> GetDCoworkingOrder(int id)
        {
            var dCoworkingOrder = await _context.DCoworkingOrders.FindAsync(id);

            if (dCoworkingOrder == null)
            {
                return NotFound();
            }

            return dCoworkingOrder;
        }
        [HttpGet("Order/{coworkingId}")]
        public async Task<List<DCoworkingOrder>> GetAllDCoworkingOrder(int coworkingId)
        {
            List<DCoworkingOrder> Orders = new List<DCoworkingOrder>();
             foreach (var order in _context.DCoworkingOrders)
            {
                if (order.coworkingId == coworkingId)
                {
                    Orders.Add(order);
                }
            }

            return await Task.FromResult(Orders);
        }

        // PUT: api/DCoworkingOrder/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDCoworkingOrder(int id, DCoworkingOrder dCoworkingOrder)
        {
            if (id != dCoworkingOrder.id)
            {
                return BadRequest();
            }

            _context.Entry(dCoworkingOrder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DCoworkingOrderExists(id))
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

        // POST: api/DCoworkingOrder
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DCoworkingOrder>> PostDCoworkingOrder(DCoworkingOrder dCoworkingOrder)
        {
            _context.DCoworkingOrders.Add(dCoworkingOrder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDCoworkingOrder", new { id = dCoworkingOrder.id }, dCoworkingOrder);
        }

        // DELETE: api/DCoworkingOrder/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DCoworkingOrder>> DeleteDCoworkingOrder(int id)
        {
            var dCoworkingOrder = await _context.DCoworkingOrders.FindAsync(id);
            if (dCoworkingOrder == null)
            {
                return NotFound();
            }

            _context.DCoworkingOrders.Remove(dCoworkingOrder);
            await _context.SaveChangesAsync();

            return dCoworkingOrder;
        }

        private bool DCoworkingOrderExists(int id)
        {
            return _context.DCoworkingOrders.Any(e => e.id == id);
        }
    }
}
