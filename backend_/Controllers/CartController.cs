﻿using Amazon.DynamoDBv2.DataModel;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using static backend_.Models.Carts;

namespace backend_.Controllers
{
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly IDynamoDBContext _context;

        public CartController(IDynamoDBContext context)
        {
            _context = context;
        }

        [HttpGet("{id}/{barcode}")]
        public async Task<IActionResult> Get(string id, string barcode)
        {
            var product = await _context.LoadAsync<Cart>(id, barcode);
            if (product == null) return NotFound();
            return Ok(product);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var products = await _context.ScanAsync<Cart>(default).GetRemainingAsync();
            return Ok(products);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Cart request)
        {
            var product = await _context.LoadAsync<Cart>(request.Id, request.TypeOfUser);
            if (product != null) return BadRequest($"Product with Id {request.Id} and BarCode {request.TypeOfUser} Already Exists");
            await _context.SaveAsync(request);
            return Ok(request);
        }

        [HttpDelete("{id}/{barcode}")]
        public async Task<IActionResult> Delete(string id, string barcode)
        {
            var product = await _context.LoadAsync<Cart>(id, barcode);
            if (product == null) return NotFound();
            await _context.DeleteAsync(product);
            return NoContent();
        }

        [HttpPut]
        public async Task<IActionResult> Update(Cart request)
        {
            var product = await _context.LoadAsync<Cart>(request.Id, request.TypeOfUser);
            if (product == null) return NotFound();
            await _context.SaveAsync(request);
            return Ok(request);
        }
    }
}
