import React,{useState,useEffect} from 'react';
import Form from './Components/Form';
import Table from './Components/Table';


const App = () => {
  const [orders, setOrders] = useState([]);
  const formHandler=(obj)=>{
    setOrders(prevOrders=>
      [...prevOrders,obj]
    )
    
    
  }
  
  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);


  const handleDelete = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <div>
      <Form onFormSubmit={formHandler} />
      <Table orders={orders} onDelete={handleDelete} />
    </div>
  );
};

export default App;
