namespace backend.OldCode
{
    public class OldCode
    {
    }
}
//using System.IdentityModel.Tokens.Jwt;
//using Backend.Authorization;
//using Backend.Middlewares;
//using Backend.Requirement;
//using Backend.Services;
//using dotenv.net;
//using Microsoft.AspNetCore.Authentication.JwtBearer;
//using Microsoft.IdentityModel.Tokens;
//using Microsoft.Net.Http.Headers;
//using Amazon;
//using Amazon.DynamoDBv2;
//using Amazon.DynamoDBv2.DataModel;
//using Amazon.S3;
//using Microsoft.Extensions.DependencyInjection;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.IdentityModel.Logging;
//using static System.Net.WebRequestMethods;
//using Microsoft.Extensions.Options;
//using System.Security.Claims;
//using Amazon.Runtime.Internal.Endpoints.StandardLibrary;
//using Amazon.Runtime.Internal;
//using System.Reflection.PortableExecutable;
//using System;
//using Microsoft.OpenApi.Models;



//var builder = WebApplication.CreateBuilder(args);


//// Adding enviorment variables
//builder.Host.ConfigureAppConfiguration((configBuilder) =>
//{
//    configBuilder.Sources.Clear();
//    DotEnv.Load();
//    configBuilder.AddEnvironmentVariables();

//});


//builder.WebHost.ConfigureKestrel(serverOptions =>
//{
//    serverOptions.AddServerHeader = false;
//});


//// Add services to the container.
//builder.Services.AddScoped<IMessageService, MessageService>();


//IdentityModelEventSource.ShowPII = true;


//builder.Services.AddControllers();
//// AUTH 0 Setup
//builder.Host.ConfigureServices((hostContext, services) =>
//{
//    services.AddMvc();


//    services.AddAuthentication(options =>
//    {
//        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
//        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
//    })

//        .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options =>
//        {
//            var audience = hostContext.Configuration.GetValue<string>("AUTH0_AUDIENCE");

//            options.Authority = $"https://{hostContext.Configuration.GetValue<string>("AUTH0_DOMAIN")}";
//            options.Audience = audience;
//            //options.MetadataAddress = "http://localhost:6060/.well-known/openid-configuration";
//            options.TokenValidationParameters = new TokenValidationParameters

//            {
//                ValidateAudience = true,
//                ValidateIssuerSigningKey = true,
//                //ValidAudience = audience,
//                //ValidIssuer = $"{builder.Configuration["AUTH0_DOMAIN"]}"
//            };



//        });

//    services.AddAuthorization(options =>
//    {
//        options.AddPolicy("read:admin-messages", policy =>
//        {
//            policy.RequireClaim("permissions", "read:admin-messages");
//        });
//    });

//    services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();
//});
//builder.Services.AddCors(options =>
//{
//    options.AddDefaultPolicy(policy =>
//    {
//        policy.WithOrigins(
//            builder.Configuration.GetValue<string>("CLIENT_ORIGIN_URL"))
//            .WithHeaders(new string[] {
//                HeaderNames.ContentType,
//                HeaderNames.Authorization,
//            })
//            .WithMethods("GET")
//            .SetPreflightMaxAge(TimeSpan.FromSeconds(86400));
//    });
//});




//// Add services to the container.

//builder.Services.AddControllers();
//// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();
//builder.Services.AddSwaggerGen();
//// AWS config and DynamoDb connection
//builder.Services.AddDefaultAWSOptions(builder.Configuration.GetAWSOptions());
//builder.Services.AddAWSService<IAmazonS3>();

//builder.Services.AddAWSService<IAmazonDynamoDB>();
//builder.Services.AddScoped<IDynamoDBContext, DynamoDBContext>();


//var app = builder.Build();


//// Auth0 Code continues here...
//var requiredVars =
//    new string[] {
//          "PORT",
//          "CLIENT_ORIGIN_URL",
//          "AUTH0_DOMAIN",
//          "AUTH0_AUDIENCE",
//    };

//foreach (var key in requiredVars)
//{
//    var value = app.Configuration.GetValue<string>(key);

//    if (value == "" || value == null)
//    {
//        throw new Exception($"Config variable missing: {key}.");
//    }
//}

////app.Urls.Add(
////    $"http://+:{app.Configuration.GetValue<string>("PORT")}");


//// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment() || app.Environment.IsProduction())
//{
//    app.UseDeveloperExceptionPage();
//    app.UseSwagger();
//    app.UseSwaggerUI();


//}
//else
//{
//    app.UseExceptionHandler("/Home/Error");
//}

////app.UseHttpsRedirection();
//app.UseErrorHandler();
//app.UseSecureHeaders();


//app.UseCors(builder => builder
//    .AllowAnyOrigin()
//    .AllowAnyMethod()
//    .AllowAnyHeader());
//app.UseAuthentication();
//app.UseAuthorization();
//app.MapControllers();

//app.Run();


//// C ==================== Code suggestions for auth0 ==============================




////// Adding authenticationÑ
////builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
////.AddJwtBearer(options =>
////{
////    //options.Authority = $"https://{builder.Configuration.GetValue<string>("AUTH0_DOMAIN")}/";
////    //options.Audience = builder.Configuration["Auth0:Audience"];
////    options.RequireHttpsMetadata = false;
////    options.SaveToken = true; 

////    options.Authority = "http://dev-x3wpn6igqgxpdpqa.us.auth0.com/";
////    options.Audience = "https://commerce-it";
////    options.TokenValidationParameters = new TokenValidationParameters
////    {
////        NameClaimType = ClaimTypes.NameIdentifier,
////        ValidIssuer = $"{builder.Configuration["AUTH0_DOMAIN"]}",
////        ValidAudience = "https://commerce-it"
////    };
////});







////builder.Services
////  .AddAuthorization(options =>
////  {
////      options.AddPolicy(
////        "read:messages",
////        policy => policy.Requirements.Add(
////          new HasScopeRequirement("read:messages", $"http://{builder.Configuration.GetValue<string>("AUTH0_DOMAIN")}/")
////        )
////      );
////  });




////app.UseCors(builder => builder
////.AllowAnyHeader()
////.AllowAnyMethod()
////.AllowCredentials()
////);






////// Getting the access token from the management api auth0: 
////var client = new RestClient("https://dev-x3wpn6igqgxpdpqa.us.auth0.com/oauth/token");
////var request = new RestRequest(Method.POST);
////request.AddHeader("content-type", "application/x-www-form-urlencoded");
////request.AddParameter("application/x-www-form-urlencoded", "grant_type=client_credentials&client_id=W6ZyT9RioKg9tgHqDwvnIwcDGaGNmswU&client_secret=%7ByourClientSecret%7D&audience=https%3A%2F%2Fdev-x3wpn6igqgxpdpqa.us.auth0.com%2Fapi%2Fv2%2F", ParameterType.RequestBody);
////IRestResponse response = client.Execute(request);


////var client = new RestClient("http:///%7BmgmtApiEndpoint%7D");
////var request = new RestRequest(Method.POST);
////request.AddHeader("content-type", "application/json");
////request.AddHeader("authorization", "Bearer {yourMgmtApiAccessToken}");
////IRestResponse response = client.Execute(request);

//////
///



//builder.Host.ConfigureServices((hostContext, services) =>
//{
//    services.AddMvc();


//    services.AddAuthentication(options =>
//    {
//        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
//        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
//    })

//        .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options =>
//        {
//            var audience = hostContext.Configuration.GetValue<string>("AUTH0_AUDIENCE");

//            options.Authority = $"https://{hostContext.Configuration.GetValue<string>("AUTH0_DOMAIN")}";
//            options.Audience = audience;
//            //options.MetadataAddress = "http://localhost:6060/.well-known/openid-configuration";
//            options.TokenValidationParameters = new TokenValidationParameters

//            {
//                ValidateAudience = true,
//                ValidateIssuerSigningKey = true,
//                //ValidAudience = audience,
//                //ValidIssuer = $"{builder.Configuration["AUTH0_DOMAIN"]}"
//            };



//        });

//    services.AddAuthorization(options =>
//    {
//        options.AddPolicy("read:admin-messages", policy =>
//        {
//            policy.RequireClaim("permissions", "read:admin-messages");
//        });
//    });

//    services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();
//});
