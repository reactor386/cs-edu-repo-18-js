//-
using System;
using System.IO;
using System.Text;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;


namespace LifeSpot;

public class Startup
{
    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        app.UseRouting();


        // Загружаем отдельные элементы для вставки в шаблон: боковое меню и футер
        string footerHtml = File.ReadAllText(
            Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "footer.html"));
        string sideBarHtml =  File.ReadAllText(
            Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "sideBar.html"));


        app.UseEndpoints(endpoints =>
        {
            endpoints.MapGet("/", async context =>
            {
                // Путь до страницы нашего сайта
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "index.html");

                /*
                // Загружаем страницу сайта
                var html = await File.ReadAllTextAsync(viewPath);
                */

                // Загружаем шаблон страницы, вставляя в него элементы
                var html =  new StringBuilder(await File.ReadAllTextAsync(viewPath))
                    .Replace("<!--SIDEBAR-->", sideBarHtml)
                    .Replace("<!--FOOTER-->", footerHtml)
                    .ToString();

                // Сервер возвращает ответ
                await context.Response.WriteAsync(html);
            });

            endpoints.MapGet("/testing", async context =>
            {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "testing.html");
                
                // Загружаем шаблон страницы, вставляя в него элементы
                var html =  new StringBuilder(await File.ReadAllTextAsync(viewPath))
                    .Replace("<!--SIDEBAR-->", sideBarHtml)
                    .Replace("<!--FOOTER-->", footerHtml)
                    .ToString();
                
                await context.Response.WriteAsync(html);
            });

            // добавляем новый маппинг в раздел Endpoints
            //  чтобы при обращении к [<link href="../wwwroot/css/index.css" rel="stylesheet" type="text/css">]
            //  из [index.html] браузер мог загрузить внешние стили
            // по аналогии со страницей Index настроим на нашем сервере путь до страницы со стилями,
            //  чтобы браузер знал, откуда их загружать
            endpoints.MapGet("/wwwroot/css/index.css", async context =>
            {
                var cssPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "css", "index.css");
                var css = await File.ReadAllTextAsync(cssPath);
                await context.Response.WriteAsync(css);
            });


            // Для JS настроим всё так же, как уже сделали для CSS выше
            endpoints.MapGet("/wwwroot/js/index.js", async context =>
            {
                var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "js", "index.js");
                var js = await File.ReadAllTextAsync(jsPath);
                await context.Response.WriteAsync(js);
            });

            // JS тестовой страницы
            endpoints.MapGet("/wwwroot/js/testing.js", async context =>
            {
                var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "js", "testing.js");
                var js = await File.ReadAllTextAsync(jsPath);
                await context.Response.WriteAsync(js);
            });
        });
    }
}
