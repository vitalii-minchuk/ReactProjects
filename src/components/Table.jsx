import React from "react"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { Button, Stack } from "@mui/material"
import ShowSelectedStatus from "./ShowSelectedStatus"
import ShowSelectedType from "./ShowSelectedType"
import TableHeader from "./TableHeader"
// import { DeleteUserDialog } from "./DeleteUserDialog"



const Table = ({ data }) => {

  let columnsData = [
    {field: "id", headerName: "ID", width: 150},
    {field: "status", headerName: "Status", width: 150, editable: true},
    {field: "type", headerName: "Type", width: 150},
    {field: "clientname", headerName: "Client Name", width: 150, editable: true},
    {field: "amount", headerName: "Amount", width: 300, editable: true},
  ]

  const rowsData = data?.map((el) => {
    return ({
      id: el.transactionid,
      status: el.status,
      type: el.type,
      clientname: el.clientname,
      amount: el.amount
    })
  })
  
  const addNewUser = () => {
    // setDisabledBtn(true)
    // setTimeout(() => {
    //   setDisabledBtn(false)
    // }, 1000)
    //  const defaultUserData = {
    //   id: myTimestamp().seconds,
    //   value: 0,
    //   name: "",
    //   date: dateTransform(myTimestamp().seconds),
    //   text: ""
    // }
    // setUsers((prev) => [...prev, defaultUserData])
  }

  // const deleteUser = (id) => setUsers((prev) => prev.filter(user => user.id !== id))

  const handelEditCell = (e) => {
    // const editedUsers = users.map((record) => {

    //   if(record.id === e.id) {
    //       return {...record, [e.field]: e.value}
    //     } else {
    //       return {...record}
    //     }
    //   }
    // )
    // setUsers(editedUsers)
  }
  const [pageSize, setPageSize] = React.useState(5);


  return (
    <div style={{ height: 430, width: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid 
            columns={columnsData}
            rows={rowsData}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            rowLength={100}
            components={{
              Toolbar: TableHeader

            }}
            onCellEditCommit={handelEditCell}
          />
          <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{marginTop: "10px"}} >
            {/* <Button sx={{color: "skyblue"}} disabled ={disabledBtn} onClick={() => {addNewUser()}}>Add New User</Button>
            <DeleteUserDialog deleteUser={deleteUser} />
            <Button sx={{color: "seagreen"}} disabled ={disabledBtn} onClick={() => {handelUpdateCellsData(users)}}>Save Changes</Button>
            <Button sx={{color: "#111"}} onClick={() => {handlePopupClose()}}>Close</Button> */}
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Table