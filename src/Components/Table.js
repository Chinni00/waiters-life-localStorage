import React, { useState, useEffect } from 'react';

const Table = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  const handleDelete = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <div>
      <h2>Orders:</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={index}>
              <p>
                ID: {order.id}, Dish: {order.dish}, Price: {order.price}, Table No: {order.tableNo}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Table;
