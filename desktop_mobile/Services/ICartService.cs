using desktop_mobile.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace desktop_mobile.Services
{
    public interface ICartService
    {
        Task<List<CartModel>> GetAllProducts();

    }
}
