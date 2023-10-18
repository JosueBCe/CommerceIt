using Amazon.DynamoDBv2.DataModel;

namespace backend_.Models
{
    public class Users
    {

        [DynamoDBTable("Users")]
        public class User
        {
            [DynamoDBHashKey("id")]
            public string? Id { get; set; }

            [DynamoDBRangeKey("type_of_user")]
            public string? TypeOfUser { get; set; }

            [DynamoDBProperty("name")]
            public string? Name { get; set; }

            [DynamoDBProperty("location")]
            public string? Location { get; set; }

            [DynamoDBProperty("age")]
            public int? Age { get; set; }

        }
    }
}

