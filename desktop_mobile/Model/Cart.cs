using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace desktop_mobile.Model
{
    public class CartModel
    {
        public string Id { get; set; }
        public string TypeOfUser { get; set; }
        public List<CartItemModel> CartItems { get; set; }
    }

    public class CartItemModel
    {
        public string ProductId { get; set; }
        public int Quantity { get; set; }
    }
}
