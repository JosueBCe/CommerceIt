
using desktop_mobile.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Exception = System.Exception;
using Uri = System.Uri;

namespace desktop_mobile.Services
{

    public class ProductService : IProductService
    {
        private string base_url = "https://localhost:7057/api";

        public async Task<bool> AddProduct(AddUpdateProductRequest productRequest)
        {
            var returnResponse = false;
            try
            {
                using (var client = new HttpClient())
                {
                    string url = $"{base_url}/products";
                    var serializeContent = JsonConvert.SerializeObject(productRequest);
                    var apiRes = await client.PostAsync(url, new StringContent(serializeContent, Encoding.UTF8, "application/json"));

                    if (apiRes.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        //var response = await apiRes.Content.ReadAsStringAsync();
                        //var deserilizeResponse = JsonConvert.DeserializeObject<respno>(response.ToString());
                        return true;
                    }
                }
                return returnResponse;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            return returnResponse;
        }


        public async Task<List<ProductModel>> GetAllProducts()
        {
            var returnResponse = new List<ProductModel>();
            try
            {
                using (var client = new HttpClient())
                {
                    string url = $"{base_url}/products";
                    var apiRes = await client.GetAsync(url);

                    if (apiRes.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        var response = await apiRes.Content.ReadAsStringAsync();
                        returnResponse = JsonConvert.DeserializeObject<List<ProductModel>>(response.ToString());
                    }
                }
                return returnResponse;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            return returnResponse;

        }

        public async Task<bool> UpdateProduct(AddUpdateProductRequest productRequest)
        {
            var returnResponse = false;
            try
            {
                using (var client = new HttpClient())
                {
                    string url = $"{base_url}/products";
                    var serializeContent = JsonConvert.SerializeObject(productRequest);
                    var apiRes = await client.PutAsync(url, new StringContent(serializeContent, Encoding.UTF8, "application/json"));

                    if (apiRes.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        //var response = await apiRes.Content.ReadAsStringAsync();
                        //var deserilizeResponse = JsonConvert.DeserializeObject<respno>(response.ToString());
                        return true;
                    }
                }
                return returnResponse;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            return returnResponse;
        }

        public async Task<bool> DeleteProduct(AddUpdateProductRequest productRequest)
        {
            try
            {
                using (var client = new HttpClient())
                {
                    string url = $"{base_url}/products/{productRequest.Id}/{productRequest.Barcode}";
                    var response = await client.DeleteAsync(url);

                    if (response.IsSuccessStatusCode)
                    {
                        return true;
                    }
                    else
                    {
                        // Handle non-successful response status codes
                        Console.WriteLine($"DeleteProduct request failed: {response.StatusCode} - {response.ReasonPhrase}");
                    }
                }
            }
            catch (HttpRequestException ex)
            {
                // Handle HTTP request exception
                Console.WriteLine($"DeleteProduct request failed: {ex.Message}");
            }

            return false;
        }

        public async Task<ProductModel> GetProductById(string productId)
        {
            var returnResponse = new ProductModel();
            try
            {
                using (var client = new HttpClient())
                {
                    string url = $"{base_url}/products/{productId}/general";
                    var apiRes = await client.GetAsync(url);
                    Console.WriteLine(url);
                    if (apiRes.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        var response = await apiRes.Content.ReadAsStringAsync();
                        returnResponse = JsonConvert.DeserializeObject<ProductModel>(response.ToString());
                    }
                }
                return returnResponse;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            return returnResponse;

        }


    }
}