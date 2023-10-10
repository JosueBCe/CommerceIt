using Amazon.DynamoDBv2.DataModel;

namespace Backend;

[DynamoDBTable("products")]
public class Product
{
    [DynamoDBHashKey("id")]
    public string? Id { get; set; }

    [DynamoDBRangeKey("barcode")]
    public string? Barcode { get; set; }

    [DynamoDBProperty("title")]
    public string? Title { get; set; }

    [DynamoDBProperty("description")]
    public string? Description { get; set; }

    [DynamoDBProperty("price")]
    public decimal Price { get; set; }

    [DynamoDBProperty("discount")]
    public decimal? Discount {  get; set; }

    [DynamoDBProperty("rating")]
    public decimal? Rating { get; set; }


    [DynamoDBProperty("stock")]
    public decimal? Stock { get; set; }

    [DynamoDBProperty("brand")]
    public string? Brand {  get; set; }    
    
    [DynamoDBProperty("category")]
    public string? Category {  get; set; }
    
   
    [DynamoDBProperty("thumbnail")]
    public string? Thumbnail {  get; set; }

    [DynamoDBProperty("images")]
    public string[]? Images {  get; set; }
    
  


}