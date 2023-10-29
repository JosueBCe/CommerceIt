using Amazon.S3;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Auth0.AspNetCore.Authentication;
using Microsoft.IdentityModel.Tokens;
using backend_.Authorization;
using Microsoft.AspNetCore.Authorization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var awsOptions = builder.Configuration.GetAWSOptions();
builder.Services.AddDefaultAWSOptions(awsOptions);
builder.Services.AddAWSService<IAmazonDynamoDB>();
builder.Services.AddScoped<IDynamoDBContext, DynamoDBContext>();

// Ading Auth0
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.Authority = "https://dev-x3wpn6igqgxpdpqa.us.auth0.com/";
    options.Audience = "https://commerce-it";
});

// Adding Admin Access for accessing all the users
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("getAllUsers", policy =>
    {
        policy.RequireClaim("permissions", "read:users_admin");
    });
});

//builder.Host.ConfigureServices(services =>
//{
//    services.AddSingleton<IAuthorizationHandler, RbacHandler>();
//});

builder.Services.AddCors(); 

var app = builder.Build();

app.UseCors(builder =>
{
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();



app.UseAuthorization();
app.UseAuthentication();
app.MapControllers();

app.Run();
