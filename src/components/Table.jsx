import React, { useState } from "react"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { Button, Stack } from "@mui/material"
import ShowSelectedStatus from "./ShowSelectedStatus"
import ShowSelectedType from "./ShowSelectedType"
import { render } from "@testing-library/react"
import DeleteUserDialog from "./DeleteUserDialog"
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import EditStatusDialog from "./EditStatusDialog"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';



const Table = ({ data, delHandler, saveStatusHandler }) => {
  const [openDeleteUserDialog, seOpenDeleteUserDialog] = useState(0)
  const [openEditUserDialog, seOpenEditUserDialog] = useState(0)

  let columnsData = [
    {field: "id", headerName: "ID", width: 70},
    {field: "status", headerName: "Status", width: 150, editable: true},
    {field: "type", headerName: "Type", width: 150},
    {field: "clientname", headerName: "Client Name", width: 220, editable: true},
    {field: "amount", headerName: "Amount", width: 100, editable: true},
    {field: "edit",
      headerName: "Edit",
      sortable: false,
      width: 70,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          seOpenEditUserDialog({...params.row, transactionid: params.row.id})
        }
  
        return <>
          <Button onClick={onClick}>
            <BorderColorOutlinedIcon color="success" />
          </Button>
        </>
      }
    },
    {field: "delete",
      headerName: "Delete",
      sortable: false,
      width: 70,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          seOpenDeleteUserDialog(params.row.id)
        }
  
        return <>
        <Button onClick={onClick}>
          <DeleteOutlinedIcon color="error" />
        </Button>
      </>
      }
    },
  ]

  const rowsData = data?.map((el) => {
    return ({
      id: el.transactionid,
      status: el.status,
      type: el.type,
      clientname: el.clientname,
      amount: el.amount,
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
    <>
    <EditStatusDialog saveStatusHandler={saveStatusHandler} openEditUserDialog={openEditUserDialog} />
    <DeleteUserDialog openDeleteUserDialog={openDeleteUserDialog} delHandler={delHandler} />
    <div style={{ height: 450, width: "100%" }}>
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
              // Toolbar: TableHeader

            }}
            onCellEditCommit={handelEditCell}
          />
          <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{marginTop: "10px"}} >
          </Stack>
        </div>
      </div>
    </div>
    </>
  )
}

export default Table