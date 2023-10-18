using Amazon.DynamoDBv2.DataModel;
using backend_.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IDynamoDBContext _context;

        public ProductsController(IDynamoDBContext context)
        {
            _context = context;
        }

        [HttpGet("{id}/{barcode}")]
        public async Task<IActionResult> Get(string id, string barcode)
        {
            try
            {
                var product = await _context.LoadAsync<Product>(id, barcode);
                if (product == null)
                    return NotFound();

                return Ok(product);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while processing the request: {ex.Message}");
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var products = await _context.ScanAsync<Product>(default).GetRemainingAsync();
                return Ok(products);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while processing the request: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Create(Product request)
        {
            try
            {
                var product = await _context.LoadAsync<Product>(request.Id, request.Barcode);
                if (product != null)
                    return BadRequest($"Product with Id {request.Id} and BarCode {request.Barcode} Already Exists");

                await _context.SaveAsync(request);
                return Ok(request);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while processing the request: {ex.Message}");
            }
        }

        [HttpDelete("{id}/{barcode}")]
        public async Task<IActionResult> Delete(string id, string barcode)
        {
            try
            {
                var product = await _context.LoadAsync<Product>(id, barcode);
                if (product == null)
                    return NotFound();

                await _context.DeleteAsync(product);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while processing the request: {ex.Message}");
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update(Product request)
        {
            try
            {
                var product = await _context.LoadAsync<Product>(request.Id, request.Barcode);
                if (product == null)
                    return NotFound();

                await _context.SaveAsync(request);
                return Ok(request);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while processing the request: {ex.Message}");
            }
        }
    }
}
