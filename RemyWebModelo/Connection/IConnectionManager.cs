using System;
using FluentNHibernate.Cfg;
using NHibernate;

namespace RemyWebModelo.Connection
{
    public interface IConnectionManager : IDisposable
    {
        void Close();

        ISession Open();

        FluentConfiguration Configuration { get; }

        ISessionFactory SessionFactory { get; }

        ISession Session { get; }

        void SchemaUpdate();
    }
}
