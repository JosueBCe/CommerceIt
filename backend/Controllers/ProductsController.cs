using Amazon.DynamoDBv2.DataModel;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace Backend.Controllers
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
                return HandleException(ex);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var products = await _context.ScanAsync<Product>(new List<ScanCondition>()).GetRemainingAsync();
                Console.WriteLine(products); 
                return Ok(products);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                Console.WriteLine(ex.Message);
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        private IActionResult HandleException(Exception ex)
        {
            if (ex is KeyNotFoundException)
                return NotFound();
            //else if (ex is SecurityException)
            //    return StatusCode((int)HttpStatusCode.Forbidden);
            //else if (ex is SqlException sqlException)
            //{
            //    if (sqlException.Number > 50000)
            //    {
            //        var response = new HttpResponseMessage(HttpStatusCode.BadRequest);
            //        response.ReasonPhrase = sqlException.Message.Replace(Environment.NewLine, String.Empty);
            //        return new ObjectResult(response)
            //        {
            //            StatusCode = (int)response.StatusCode
            //        };
            //    }
            //    else
            //    {
            //        return StatusCode((int)HttpStatusCode.InternalServerError);
            //    }
            //}
            else
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }
    

[HttpPost]
        public async Task<IActionResult> Create(Product request)
        {
            var product = await _context.LoadAsync<Product>(request.Id, request.Barcode);
            if (product != null) return BadRequest($"Product with Id {request.Id} and BarCode {request.Barcode} Already Exists");
            await _context.SaveAsync(request);
            return Ok(request);
        }

        [HttpDelete("{id}/{barcode}")]
        public async Task<IActionResult> Delete(string id, string barcode)
        {
            var product = await _context.LoadAsync<Product>(id, barcode);
            if (product == null) return NotFound();
            await _context.DeleteAsync(product);
            return NoContent();
        }

        [HttpPut]
        public async Task<IActionResult> Update(Product request)
        {
            var product = await _context.LoadAsync<Product>(request.Id, request.Barcode);
            if (product == null) return NotFound();
            await _context.SaveAsync(request);
            return Ok(request);
        }
    }
}

//using Amazon.DynamoDBv2.DataModel;
//using Backend;
//using Microsoft.AspNetCore.Mvc;

//namespace Backend.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class ProductsController : ControllerBase
//    {
//        private readonly IDynamoDBContext _context;

//        public ProductsController(IDynamoDBContext context)
//        {
//            _context = context;
//        }

//        [HttpGet("{id}/{barcode}")]
//        public async Task<IActionResult> Get(string id, string barcode)
//        {
//            try
//            {
//                var product = await _context.LoadAsync<Product>(id, barcode);
//                if (product == null)
//                    return NotFound();

//                return Ok(product);
//            }
//            catch (Exception ex)
//            {
//                return StatusCode(500, $"An error occurred while processing the request: {ex.Message}");
//            }
//        }

//        [HttpGet]
//        public async Task<IActionResult> GetAll()
//        {
//            try
//            {
//                var products = await _context.ScanAsync<Product>(default).GetRemainingAsync();
//                return Ok(products);
//            }
//            catch (Exception ex)
//            {
//                return StatusCode(500, $"An error occurred while processing the request: {ex.Message}");
//            }
//        }

//        [HttpPost]
//        public async Task<IActionResult> Create(Product request)
//        {
//            try
//            {
//                var product = await _context.LoadAsync<Product>(request.Id, request.Barcode);
//                if (product != null)
//                    return BadRequest($"Product with Id {request.Id} and BarCode {request.Barcode} Already Exists");

//                await _context.SaveAsync(request);
//                return Ok(request);
//            }
//            catch (Exception ex)
//            {
//                return StatusCode(500, $"An error occurred while processing the request: {ex.Message}");
//            }
//        }

//        [HttpDelete("{id}/{barcode}")]
//        public async Task<IActionResult> Delete(string id, string barcode)
//        {
//            try
//            {
//                var product = await _context.LoadAsync<Product>(id, barcode);
//                if (product == null)
//                    return NotFound();

//                await _context.DeleteAsync(product);
//                return NoContent();
//            }
//            catch (Exception ex)
//            {
//                return StatusCode(500, $"An error occurred while processing the request: {ex.Message}");
//            }
//        }

//        [HttpPut]
//        public async Task<IActionResult> Update(Product request)
//        {
//            try
//            {
//                var product = await _context.LoadAsync<Product>(request.Id, request.Barcode);
//                if (product == null)
//                    return NotFound();

//                await _context.SaveAsync(request);
//                return Ok(request);
//            }
//            catch (Exception ex)
//            {
//                return StatusCode(500, $"An error occurred while processing the request: {ex.Message}");
//            }
//        }
//    }
//}