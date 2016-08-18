using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using RemyWebModelo.Connection;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebModelo.Repositorio
{
    public class Repository<T> : IRepository<T> where T : class, new()
    {
        protected IConnectionManager _connection = null;

        public Repository()
        {
            _connection = new ConnectionManager();
            _connection.Open();
        }
        
        public Repository(IConnectionManager connectionManager)
        {
            _connection = connectionManager;
            _connection.Open();
        }

        public IConnectionManager Connection
        {
            get { return _connection; }
            set { _connection = value; }
        }

        public void Dispose()
        {
            _connection = null;
        }
        
        public T Add(T item)
        {
            using (var t = _connection.Session.BeginTransaction())
            {
                _connection.Session.Save(item);
                t.Commit();

                return item;
            }
        }

        public IList<T> AddList(IList<T> list)
        {
            using (var t = _connection.Session.BeginTransaction())
            {
                _connection.Session.Save(list);
                t.Commit();

                return list;
            }
        }

        public T Modify(T item)
        {
            using (var t = _connection.Session.BeginTransaction())
            {
                _connection.Session.Update(item);
                t.Commit();

                return item;
            }
        }

        public void Remove(T item)
        {
            using (var t = _connection.Session.BeginTransaction())
            {
                _connection.Session.Delete(item);
            }
        }

        public T Get(object key)
        {
            return _connection.Session.Get<T>(key);
        }

        public IList<T> GetAll()
        {
            return _connection.Session.CreateCriteria(typeof (T)).List<T>();
        }

        public IList<T> GetFiltered(Expression<Func<T, bool>> filter)
        {
            return _connection.Session.QueryOver<T>().Where(filter).List();
        }
    }
}
