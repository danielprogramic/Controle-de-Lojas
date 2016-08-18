using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using NHibernate;
using NHibernate.Tool.hbm2ddl;
using RemyWebModelo.Maps;

namespace RemyWebModelo.Connection
{
    public class ConnectionManager : IConnectionManager
    {
        public FluentConfiguration Configuration { get; private set; }
        public ISessionFactory SessionFactory { get; private set; }
        public ISession Session { get; private set; }
        
        public ConnectionManager()
        {
            Init();
        }

        private void Init()
        {
            Configuration = Fluently.Configure()
                .Database(MsSqlConfiguration.MsSql2012
                    .ConnectionString(x =>
                        x.Server("ARSENAL")
                        .Database("RemyWeb")
                        .Username("sa")
                        .Password("fsoft")).ShowSql())
                .Mappings(m => m.FluentMappings
                                .AddFromAssemblyOf<PessoaMap>());

            SessionFactory = Configuration.BuildSessionFactory();
            Session = SessionFactory.OpenSession();
        }


        public void Dispose()
        {
            Close();
        }

        public void Close()
        {
            if (Session != null && Session.IsOpen)
            {
                Session.Close();
                Session.Dispose();
            }

            Configuration = null;

            if (SessionFactory != null && !SessionFactory.IsClosed)
            {
                SessionFactory.Close();
                SessionFactory.Dispose();              
            }
        }

        public ISession Open()
        {
            if (!Session.IsOpen)
            {
                Session = SessionFactory.OpenSession();
            }
            return Session;
        }
        
        public void SchemaUpdate()
        {
            Configuration
                .ExposeConfiguration(c => new SchemaUpdate(c).Execute(true, true))
                .BuildSessionFactory();
        }
    }
}
