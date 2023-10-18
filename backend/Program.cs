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
using static System.Net.WebRequestMethods;
using Microsoft.Extensions.Options;
using System.Security.Claims;
using Microsoft.AspNetCore.ResponseCompression;

var builder = WebApplication.CreateBuilder(args);

builder.Logging.ClearProviders();
builder.Logging.AddConsole();


builder.Host.ConfigureAppConfiguration((configBuilder) =>
{
    configBuilder.Sources.Clear();
    DotEnv.Load();
    configBuilder.AddEnvironmentVariables();

});

builder.Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(options =>
{
    options.Authority = $"https://dev-x3wpn6igqgxpdpqa.us.auth0.com/";
    options.Audience = "https://commerce-it"; //builder.Configuration["Auth0:Audience"];
    //options.TokenValidationParameters = new TokenValidationParameters
    //{
    //    NameClaimType = ClaimTypes.NameIdentifier
    //};
});


builder.Services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();


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

builder.Services
  .AddAuthorization(options =>
  {
      options.AddPolicy(
        "read:messages",
        policy => policy.Requirements.Add(
          new HasScopeRequirement("read:messages", $"https://{builder.Configuration.GetValue<string>("AUTH0_DOMAIN")}/")
        )
      );
  });



IdentityModelEventSource.ShowPII = true;

// Add services to the container.
builder.Services.AddCors();
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// AWS config and DynamoDb connection
var awsOptions = builder.Configuration.GetAWSOptions();
builder.Services.AddDefaultAWSOptions(awsOptions);
builder.Services.AddAWSService<IAmazonS3>();
builder.Services.AddAWSService<IAmazonDynamoDB>();
builder.Services.AddScoped<IDynamoDBContext, DynamoDBContext>();


builder.Services.AddResponseCompression(options => { options.Providers.Add<GzipCompressionProvider>(); options.EnableForHttps = true; options.MimeTypes = new[] { "application/json", "text/tab-separated-values", "application/javascript", "text/csv", "text" }; });

var app = builder.Build();



//app.Urls.Add(
//    $"http://+:{builder.Configuration.GetValue<string>("PORT")}");


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

string myApiVersion = "v1.0";
string myAppName = "backend";
string swaggerVersion = "4.1.3";


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    string pkgUrl = "https://unpkg.com/swagger-ui-dist@";
    app.UseSwaggerUI(c =>
    {
        c.HeadContent =
            $"<link rel=\"stylesheet\" type=\"text/css\" " +
            $"href=\"{pkgUrl}{swaggerVersion}/swagger-ui.css\" />";
        c.InjectStylesheet($"{pkgUrl}{swaggerVersion}/swagger-ui.css", "text/css");
        c.InjectJavascript($"{pkgUrl}{swaggerVersion}/swagger-ui-standalone-preset.js", "text/javascript");
        c.InjectJavascript($"{pkgUrl}{swaggerVersion}/swagger-ui-bundle.js", "text/javascript");
        c.SwaggerEndpoint($"http://localhost:7157/swagger/{myApiVersion}/swagger.json", myAppName);
    });
       
        }
else
{
    app.UseExceptionHandler("/Home/Error");
}


//app.UseHttpsRedirection();
app.UseErrorHandler();
app.UseSecureHeaders();
app.MapControllers();
app.UseCors();


app.UseAuthentication();
app.UseAuthorization();


app.Run();


