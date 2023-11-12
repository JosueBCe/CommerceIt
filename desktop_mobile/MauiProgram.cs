using Microsoft.AspNetCore.Components.WebView.Maui;
using desktop_mobile.Data;
using desktop_mobile.Services;

namespace desktop_mobile;

public static class MauiProgram
{
	public static MauiApp CreateMauiApp()
	{
		var builder = MauiApp.CreateBuilder();
		builder
			.UseMauiApp<App>()
			.ConfigureFonts(fonts =>
			{
				fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
			});

		builder.Services.AddMauiBlazorWebView();
		#if DEBUG
		builder.Services.AddBlazorWebViewDeveloperTools();
#endif
		
		// Register Interfance and implementation to use in Razor component
		builder.Services.AddSingleton<IProductService,  ProductService>();
		builder.Services.AddSingleton<ICartService, CartService>();


		builder.Services.AddSingleton<WeatherForecastService>();

	

		return builder.Build();
	}
}
