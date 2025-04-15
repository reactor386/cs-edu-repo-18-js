//-
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

using static LifeSpot.Logger;


namespace LifeSpot;

public class Program
{
    public static void Main(string[] args)
    {
        // Выводим информационное сообщение
        PrintMessage( (() => Info("Запускаем приложение")) );

        CreateHostBuilder(args).Build().Run();
    }

    private static void Target(string str)
    {
        throw new NotImplementedException();
    }
    
    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<Startup>(); });
}
