using Backend.Authorization;
using Backend.Middlewares;
using Backend.Requirement;
using Backend.Services;
using dotenv.net;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Net.Http.Headers;
using Amazon;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.S3;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Logging;

var builder = WebApplication.CreateBuilder(args);

builder.Host.ConfigureAppConfiguration((configBuilder) =>
{
    configBuilder.Sources.Clear();
    DotEnv.Load();
    configBuilder.AddEnvironmentVariables();
});

builder.WebHost.ConfigureKestrel(serverOptions =>
{
    serverOptions.AddServerHeader = false;
});


// Add services to the container.
builder.Services.AddScoped<IMessageService, MessageService>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(
            builder.Configuration.GetValue<string>("CLIENT_ORIGIN_URL"))
            .WithHeaders(new string[] {
                HeaderNames.ContentType,
                HeaderNames.Authorization,
            })
            .WithMethods("GET")
            .SetPreflightMaxAge(TimeSpan.FromSeconds(86400));
    });
});

IdentityModelEventSource.ShowPII = true;



builder.Services.AddControllers();

builder.Host.ConfigureServices((hostContext, services) =>
{
    services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options =>
        {
            var audience = hostContext.Configuration.GetValue<string>("AUTH0_AUDIENCE");

            options.Authority = $"https://{hostContext.Configuration.GetValue<string>("AUTH0_DOMAIN")}/";
            options.Audience = audience;
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateAudience = true,
                ValidateIssuerSigningKey = true,
                //ValidAudience = audience,
                //ValidIssuer = $"{builder.Configuration["AUTH0_DOMAIN"]}"
            };   
             
             
             
        });

    services.AddAuthorization(options =>
    {
        options.AddPolicy("read:admin-messages", policy =>
        {
            policy.RequireClaim("permissions", "read:admin-messages");
        });
    });

    services.AddSingleton<IAuthorizationHandler, RbacHandler>();
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSwaggerGen();
// AWS config and DynamoDb connection
builder.Services.AddDefaultAWSOptions(builder.Configuration.GetAWSOptions());
builder.Services.AddAWSService<IAmazonS3>();

builder.Services.AddAWSService<IAmazonDynamoDB>();
builder.Services.AddScoped<IDynamoDBContext, DynamoDBContext>();


var app = builder.Build();


// Auth0 Code continues here...
var requiredVars =
    new string[] {
          "PORT",
          "CLIENT_ORIGIN_URL",
          "AUTH0_DOMAIN",
          "AUTH0_AUDIENCE",
    };

foreach (var key in requiredVars)
{
    var value = app.Configuration.GetValue<string>(key);

    if (value == "" || value == null)
    {
        throw new Exception($"Config variable missing: {key}.");
    }
}

app.Urls.Add(
    $"http://+:{app.Configuration.GetValue<string>("PORT")}");


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseErrorHandler();
app.UseSecureHeaders();
app.MapControllers();
app.UseCors();


app.UseAuthentication();
app.UseAuthorization();

app.Run();
