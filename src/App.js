import axios from "axios"
import { useEffect, useState } from "react"
import CSVReader from "react-csv-reader"
import CsvDownload from 'react-json-to-csv'

import { v4 } from "uuid"

const App = () => {
  const [data, setData] = useState()
  const handleForce = (data, fileInfo) => setData(data);

  const [items, setItems] = useState([])
  const [currentStatus, setCurrentStatus] = useState("")
console.log(currentStatus)


  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://627e94bb271f386ceffad340.mockapi.io/items/items")

      setItems(response.data);
    }

    fetchData()
  }, [])

console.log(items)
console.log(data)

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
}

  const addToCart = (item) => {
    axios.post("https://627e94bb271f386ceffad340.mockapi.io/items/items", item)
    setItems(prev => [...prev, item])
  }

  const updateFromCart = (item) => {
    if(items.some(el => el.id === item.id)) {
      axios.put("https://627e94bb271f386ceffad340.mockapi.io/items/items/" + item.id, item)
      setItems(prev => prev.filter(el => el.id !== item.id))
    }
  }


  const deleteFromCart = (id) => {
    if(items.some(el => el.id === id)) {
      axios.delete("https://627e94bb271f386ceffad340.mockapi.io/items/items/" + id)
      setItems(prev => prev.filter(el => el.id !== id))
    }
  }

  const filterByStatus = (status) => {
    async function fetchData() {
      const response = await axios.get(`https://627e94bb271f386ceffad340.mockapi.io/items/items?status=${status}`)
    console.log(response)
        setItems(response.data)   
      }
      fetchData()
  }

  const filterByType = (type) => {
    async function fetchData() {
    const response = await axios.get(`https://627e94bb271f386ceffad340.mockapi.io/items/items?type=${type}`)
  console.log(response)
      setItems(response.data)   
    }
    fetchData()
  }

  const searchByName = (search) => {
    async function fetchData() {
      const response = await axios.get(`https://627e94bb271f386ceffad340.mockapi.io/items/items?clientname=${search }`)
    console.log(response)
        setItems(response.data)   
      }
      fetchData()
  }


  const addHandler = () => {

    (async () => {
      const sleep = duration => new Promise(resolve => setTimeout(resolve, duration));
    
      for (let i = 0; i < data.length; i++) {
        addToCart(data[i])
        await sleep(600);
      }
    })()
  }

  const delHandler = (id) => {
    console.log(id)
    deleteFromCart(id)
  }
  const saveHandler = () => {
    updateFromCart(currentStatus)
  }


  return (
    <div>
          <div className="container">
    <CSVReader
      cssClass="react-csv-input"
      label="Select CSV with secret Death Star statistics"
      onFileLoaded={handleForce}
      parserOptions={papaparseOptions}
    />
    <p>and then open the console</p>
    <CsvDownload data={items.map(item => ({
      transactionid: item.transactionid,
      status: item.status,
      type: item.type,
      clientname: item.clientname,
      amount: item.amount,
    }))} />
  </div>
        <select onChange={(e) => filterByStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <select onChange={(e) => filterByType(e.target.value)}>
          <option value="Withdrawal">Withdrawal</option>
          <option value="Refill">Refill</option>
        </select>
        <input onChange={(e) => searchByName(e.target.value)} />
      <button onClick={addHandler}>add</button>
      {items.map((item => (
        <div key={v4()} style={{display: "flex", justifyContent: "space-between"}}>
        <p>{item.clientname}</p>
        <p>{item.amount}</p>
        <select value={item.status}
          onChange={(e) => setCurrentStatus({
            ...item, status: e.target.value
          })}>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        
        <button onClick={saveHandler}>save</button>
        <p>{item.type}</p>
        <button onClick={() => delHandler(item.id)}>x</button>
        </div>
      )))

      }
    </div>
  );
}

export default App;
