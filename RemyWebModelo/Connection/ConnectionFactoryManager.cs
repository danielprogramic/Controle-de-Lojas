using System;

namespace RemyWebModelo.Connection
{
    public class ConnectionFactoryManager
    {
        private static IConnectionManager _connectionManager;

        private static readonly Object _createLock = new Object();

        public static IConnectionManager GetConnection()
        {
            lock (_createLock)
            {
                if (_connectionManager == null)
                {
                    _connectionManager = new ConnectionManager();
                }
            }
            return _connectionManager;
        }
    }
}
