using desktop_mobile.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace desktop_mobile.Services
{
	public interface IProductService
	{
		Task<List<ProductModel>> GetAllProducts();

		Task<bool> AddProduct(AddUpdateProductRequest productRequest); 

		Task<bool> UpdateProduct(AddUpdateProductRequest productRequest);

		Task<bool> DeleteProduct(AddUpdateProductRequest productRequest);

        Task<ProductModel> GetProductById(string productId);

    }
}
