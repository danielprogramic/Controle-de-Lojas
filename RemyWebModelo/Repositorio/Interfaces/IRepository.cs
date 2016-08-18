using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using RemyWebModelo.Connection;

namespace RemyWebModelo.Repositorio.Interfaces
{
    public interface IRepository<TEntity> : IDisposable where TEntity : class, new()
    {
        IConnectionManager Connection { get; }

        TEntity Add(TEntity item);

        IList<TEntity> AddList(IList<TEntity> list);
        
        TEntity Modify(TEntity item);

        void Remove(TEntity item);

        TEntity Get(object key);

        IList<TEntity> GetAll();

        IList<TEntity> GetFiltered(Expression<Func<TEntity, bool>> filter);
    }
}
