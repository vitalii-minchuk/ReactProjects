import { Button, Stack, TextField } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import CSVReader from "react-csv-reader"
import CsvDownload from 'react-json-to-csv'

import { v4 } from "uuid"
import ImportDataDialog from "./components/ImportDataDialog"
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
  const [isImportDataDialogOpen, setImportDataDialogOpen] = useState(false)
  const [isImport, setImport] = useState(false)
 
  const [items, setItems] = useState([])

  useEffect(() => {
    if (items?.length === 100) {
      setImportDataDialogOpen(false)
      async function fetchData() {
        const response = await axios.get("https://627e94bb271f386ceffad340.mockapi.io/items/items")
  
        setItems(response.data);
      }
  
      fetchData()
    }
  }, [isImportDataDialogOpen, items?.length])

  const filterByType = (type) => {
    if (type === "All") type = ""
    async function fetchData() {
    const response = await axios.get(`https://627e94bb271f386ceffad340.mockapi.io/items/items${type ? "?type=" + type : ""}`)

      setItems(response.data)   
    }
    fetchData()
  }
  const toggleSelected = (show) => {
    filterByType(show)
  }
  const filterByStatus = (status) => {
    if (status === "All") status = ""
    async function fetchData() {
      const response = await axios.get(`https://627e94bb271f386ceffad340.mockapi.io/items/items${status ? "?status=" + status : ""}`)
    console.log(response)
        setItems(response.data)   
      }
      fetchData()
  }
  const toggleSelectedStatus = (show) => {
    filterByStatus(show)
  }

  const searchByName = (search) => {
    async function fetchData() {
      const response = await axios.get(`https://627e94bb271f386ceffad340.mockapi.io/items/items?clientname=${search }`)
    console.log(response)
        setItems(response.data)   
      }
      fetchData()
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
 
    if(items.some(el => el.id === String(item.id))) {
      axios.put("https://627e94bb271f386ceffad340.mockapi.io/items/items/" + item.id, item)
      setItems(prev => prev.map(el => {
        if (el.id === String(item.id)) {
          return ({...el, status: item.status})
        }
        return el
      }))
    }
  }


  const deleteFromCart = (id) => {
    if(items.some(el => el.id === id)) {
      axios.delete("https://627e94bb271f386ceffad340.mockapi.io/items/items/" + id)
      setItems(prev => prev.filter(el => el.id !== id))
    }
  }



  const importData = async () => {
    const sleep = duration => new Promise(resolve => setTimeout(resolve, duration));
  
    for (let i = 0; i < data.length; i++) {
      addToCart(data[i])
      await sleep(600);
    }
  }


  const importDataHandler = () => {
    setImportDataDialogOpen(true)
    importData()
    setData([])
  }

  // const resetHandler = () => {
  //   (async () => {
  //     const sleep = duration => new Promise(resolve => setTimeout(resolve, duration));
    
  //     for (let i = 1; i <= items.length; i++) {
  //       deleteFromCart(i + "")
  //       await sleep(600);
  //     }
  //   })()
  // }

  const delHandler = (id) => {
    deleteFromCart(id + "")
  }

  const saveStatusHandler = (item) => {
    updateFromCart(item)
  }


  return (
    <div>
      <Stack minHeight={70}>

        {!isImport && !items?.length &&
          <Stack>
          <CSVReader
            cssClass="csv-input"
            onFileLoaded={handleForce}
            parserOptions={papaparseOptions}
          />
          <Box mt={1}>
            <Button disabled={!data?.length} onClick={importDataHandler}>import</Button>
          </Box>
        </Stack>
        }
        {!!items?.length && 
          <Stack>
            <Box>
            <CsvDownload data={items?.map(item => ({
              transactionid: item.transactionid,
              status: item.status,
              type: item.type,
              clientname: item.clientname,
              amount: item.amount,
            }))} />

            </Box>
            <Box mt={1}> 
              <Button disabled>export</Button>
            </Box>
          </Stack>
        }

      </Stack>
      <Stack direction="row" gap={3} my={2}>
        <ShowSelectedType toggleSelected={toggleSelected} />
        <ShowSelectedStatus toggleSelectedStatus={toggleSelectedStatus} />
        <TextField
            onChange={(e) => searchByName(e.target.value)}
            id="standard-search"
            label="Search field"
            type="search"
            variant="standard"
          />
      </Stack>

      <Table saveStatusHandler={saveStatusHandler} delHandler={delHandler} handleForce={handleForce} key={v4()} data= {items} />
      <ImportDataDialog open={isImportDataDialogOpen} items={items} />
    </div>
  )
}

export default App
