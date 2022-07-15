import axios from "axios"
import { useEffect, useState } from "react"
import CSVReader from "react-csv-reader"
import CsvDownload from 'react-json-to-csv'

import { v4 } from "uuid"
import ShowSelectedStatus from "./components/ShowSelectedStatus"
import ShowSelectedType from "./components/ShowSelectedType"
import Table from "./components/Table"

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
}

const App = () => {
  const [data, setData] = useState()
  const handleForce = (data, fileInfo) => setData(data);
  const [isSeveChanges, setSaveChanges] = useState(false)
 
  const [items, setItems] = useState([])
  const [currentStatus, setCurrentStatus] = useState("")
console.log(currentStatus)

const filterByType = (type) => {
  async function fetchData() {
  const response = await axios.get(`https://627e94bb271f386ceffad340.mockapi.io/items/items?type=${type}`)
console.log(response)
    setItems(response.data)   
  }
  fetchData()
}
const toggleSelected = (show) => {

  if(show === "Withdrawal") {
    filterByType(show)
  } else if (show === "Refill") {
    filterByType(show)
  } else {
    filterByType("")
  }
}


  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://627e94bb271f386ceffad340.mockapi.io/items/items")

      setItems(response.data);
    }

    fetchData()
  }, [])

console.log(items)
console.log(data)



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

  const resetHandler = () => {
    // (async () => {
    //   const sleep = duration => new Promise(resolve => setTimeout(resolve, duration));
    
    //   for (let i = 1; i <= items.length; i++) {
    //     deleteFromCart(i)
    //     await sleep(600);
    //   }
    // })()
    items.map((el) => deleteFromCart(el.id))
    
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

      {isSeveChanges ? (
        <CsvDownload data={items.map(item => ({
          transactionid: item.transactionid,
          status: item.status,
          type: item.type,
          clientname: item.clientname,
          amount: item.amount,
        }))} />
      ) : (
        <>
                <CSVReader
        inputStyle={{ display: 'none' }}
        cssClass="csv-input"
        label={<p style={{color: "red"}}>kdljfkld</p>}
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
        />
        <button onClick={addHandler}>add</button>
        </>
      )

      }

     {/* <ShowSelectedType toggleSelected={toggleSelected} />
     <ShowSelectedStatus toggleSelected={toggleSelected} />
   */}
      <Table handleForce={handleForce} key={v4()} data= {items} />
      {/* {items.map((item => (
        
        <div key={v4()} style={{display: "flex", justifyContent: "space-between"}}>
        <p>{item.transactionid}</p>
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

      } */}
    </div>
  );
}

export default App;
