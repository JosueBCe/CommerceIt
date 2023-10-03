using Amazon;
using Amazon.S3;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BucketsController : ControllerBase
    {

        private readonly IAmazonS3 _amazonS3;
        public BucketsController(IAmazonS3 amazonS3)
        {
            _amazonS3 = amazonS3;
        }


        [HttpGet("list")]

        public async Task<IActionResult> ListAsync()
        {

            var data = await _amazonS3.ListBucketsAsync();
            var buckets = data.Buckets.Select(b => { return b.BucketName; });
            return Ok(buckets);
        }
        // GET: api/<BucketsController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<BucketsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<BucketsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<BucketsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<BucketsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
