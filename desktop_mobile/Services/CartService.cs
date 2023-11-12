using desktop_mobile.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace desktop_mobile.Services
{
    public class CartService : ICartService
    {
        private string base_url = "https://localhost:7057/api";
        public async Task<List<CartModel>> GetAllProducts()
        {
            var returnResponse = new List<CartModel>();
            try
            {
                using (var client = new HttpClient())
                {
                    string url = $"{base_url}/Cart";
                    var apiRes = await client.GetAsync(url);

                    if (apiRes.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        var response = await apiRes.Content.ReadAsStringAsync();
                        returnResponse = JsonConvert.DeserializeObject<List<CartModel>>(response.ToString());
                    }
                }
                return returnResponse;
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                Console.WriteLine(msg);
            }
            return returnResponse;

        }
    }
}
