import React, { useState } from 'react';

const Form = (props) => {
  const [id, setId] = useState('');
  const [price, setPrice] = useState('');
  const [dish, setDish] = useState('');
  const [tableNo, setTableNo] = useState('table1');

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj={id,price,dish,tableNo}
    props.onFormSubmit(obj)

  };

  return (
    <center>
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <br />
      <label>
        Price:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Dish:
        <input type="text" value={dish} onChange={(e) => setDish(e.target.value)} />
      </label>
      <br />
      <label>
        Table No:
        <select value={tableNo} onChange={(e) => setTableNo(e.target.value)}>
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </center>
  );
};

export default Form;
