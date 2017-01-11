using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GammaGames.Startup))]
namespace GammaGames
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
