import React from 'react';

const Table = (props) => {
   
 
  const handleDelete=(index)=>{
    props.onDelete(index)
  }
  

  return (
    <center >
    <div>
      <h2>Orders:</h2>
      {props.orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div>
            <>
          <h2>Table1</h2>
          {props.orders.map((order, index) => (
            order.tableNo==='table1' ? <div key={index}>
            <p>
              ID: {order.id}, Dish: {order.dish}, Price: {order.price}, Table No: {order.tableNo}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </p>
          </div> : '' 
          ))}
          </><>
          <h2>Table2</h2>
          {props.orders.map((order, index) => (
            order.tableNo==='table2' ? <div key={index}>
            <p>
              ID: {order.id}, Dish: {order.dish}, Price: {order.price}, Table No: {order.tableNo}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </p>
          </div> : '' 
          ))}
          </>
          <>
          <h2>Table3</h2>
          {props.orders.map((order, index) => (
            order.tableNo==='table3' ? <div key={index}>
            <p>
              ID: {order.id}, Dish: {order.dish}, Price: {order.price}, Table No: {order.tableNo}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </p>
          </div> : '' 
          ))}
          </>

        </div>
      )}
    </div>
    </center>
  );
};

export default Table;
