using Amazon.DynamoDBv2.DataModel;

namespace backend_.Models
{
    public class Carts
    {

        [DynamoDBTable("Cart")]
        public class Cart
        {
            [DynamoDBHashKey("cart_id")]
            public string? Id { get; set; }

            [DynamoDBRangeKey("type_of_user")]
            public string? TypeOfUser { get; set; }

            [DynamoDBProperty("cart_items")]
            public string[]? CartItems { get; set; }

        }
    }
}

