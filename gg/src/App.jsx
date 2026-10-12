// import React, { useState } from 'react'

// const App = () => {
//   const [data, setData] = useState([{
//     id: 1,
//     name: "Ahmad",
//     age: 20,

//   }])
//   const [idx, setIdx] = useState(null)
//   const [open, setOpen] = useState(false)
//   const [editName, setEditName] = useState('')
//   const [editAge, setEditAge] = useState("")

//   const [filteredData, setFilteredData] = useState(data)
//   const [search, setSearch] = useState("")

//   const handleSearch = (e) => {
//     const value = e.target.value
//     setSearch(value)
//     setFilteredData(data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())))
//   }

//   const handleDelete = (id) => {
//     const updated = data.filter((e) => e.id !== id)
//     setData(updated)
//     setFilteredData(updated)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const newUser = {
//       id: Date.now(),
//       name: e.target.name.value,
//       age: e.target.age.value,
//     }
//     const updated = [...data, newUser]
//     setData(updated)
//     setFilteredData(updated)
//     e.target.reset()
//   }

//   const handleEditSubmit = (e) => {
//     e.preventDefault()
//     const newUser = {
//       id: idx,
//       name: editName,
//       age: editAge,
//     }

//     const updated = data.map((e) => e.id === idx ? newUser : e)
//     setData(updated)
//     setFilteredData(updated)
//     setOpen(false)
//     setIdx(null)
//   }

//   return (
//     <div className="crm-app">
//       <div className="add-section">
//         <form onSubmit={handleSubmit} className="add-form">
//           <input type="text" name="name" placeholder="Name" required />
//           <input type="text" name="age" placeholder="Age" required />
//           <button type='submit' className="btn-add">submit</button>
//         </form>
//       </div>

//       <input 
//         type="text" 
//         placeholder='Search' 
//         value={search} 
//         onChange={handleSearch} 
//         className="search-bar" 
//       />

//       <input 
//         type="text" 
//         placeholder='Filter by age' 
//         onChange={(e) => {
//           const val = e.target.value.toLowerCase()
//           setFilteredData(data.filter((user) => String(user.age).toLowerCase().includes(val)))
//         }} 
//       />

//       <div className="crm-table">
//         {
//           filteredData.map((e) => {
//             return (
//               <div key={e.id} className="crm-row">
//                 <h1 className="crm-name">Name:{e.name}</h1>
//                 <p className="crm-age">Age:{e.age}</p>
//                 <button className="btn-delete" onClick={() => handleDelete(e.id)}>delete</button> <br />
//                 <button className="btn-edit" onClick={() => { setOpen(true); setEditName(e.name); setEditAge(e.age); setIdx(e.id) }}>edit</button>
//                 {open && idx === e.id ? (
//                   <form onSubmit={handleEditSubmit} className="edit-form">
//                     <input value={editName} onChange={(e) => setEditName(e.target.value)} type="text" name="name" />
//                     <input value={editAge} onChange={(e) => setEditAge(e.target.value)} type="text" name="age" />
//                     <button type='submit' className="btn-save">submit</button>
//                   </form>
//                 ) : null}
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }





// const App = () => {
//   const [data, setData] = useState([{ id: 1, name: "ahmad", age: 12 }])
//   const [openAdd, setOpenAdd] = useState(false)
//   const [openEdit, setOpenEdit] = useState(false)

//   const [idx,setIdx] = useState(null)
//   const [editName, setEditName] = useState("")
//   const [editAge, setEditAge] = useState("")

//   const handleDelete = (id) => {
//     const updated = data.filter((e) => e.id !== id)
//     setData(updated)
//   }

//   const handleEditSubmit = (event) => {
//     event.preventDefault()
//     const newUser = {
//       id: idx,
//       name: editName,
//       age: editAge,
//     }

//     const updated = data.map((e) => e.id === idx ? newUser : e)
//     setData(updated)
//     setOpenEdit(false)
//     setIdx(null)
//   }
  

//   const handleSubmit = (event) => {
//     event.preventDefault()

//     const newUser = {
//       id: Date.now(),
//       name: event.target.name.value,
//       age: event.target.age.value,
//       status: false
//     }

//     setData((prev) => [...prev, newUser])
//     setOpenAdd((prev) => !prev)
//   }

//   return (
//     <div className="container">
//       <button className="btn-open-modal" onClick={() => setOpenAdd((prev) => !prev)}>Add User</button>

//       <div className="users-list">
//         {data.map((el) => (
//           <div key={el.id} className="user-card">
//             <h1 className="user-name">Name: {el.name}</h1>
//             <p className="user-age">Age: {el.age}</p>
//             <button onClick={() => {
//               setOpenEdit(true)
//               setIdx(el.id)
//               setEditName(el.name)
//               setEditAge(el.age)
//             }}>edit</button>
//             <button onClick={()=>handleDelete(el.id)}>delete</button>
//           </div>
//         ))}
//       </div>

//       {openAdd && (
//         <div className="modal-dialog">
//           <div className="modal-header">
//             <h1 className="modal-title">Add User</h1>
//             <button onClick={() => setOpenAdd((prev) => !prev)} className="modal-close-btn">X</button>
//           </div>
//           <form onSubmit={handleSubmit} className="add-form modal-form">
//             <input type="text" name="name" placeholder="Name" required className="modal-input" />
//             <input type="text" name="age" placeholder="Age" required className="modal-input" />
//             <button type='submit' className="btn-add modal-submit-btn">submit</button>
//             <button
//         onClick={() => setOpenAdd(false)}
//         className="modal-close-btn"
//       >
//         Close
//       </button>
//           </form>
//         </div>
//       )}

//       {openEdit && (
//         <div className="modal-dialog">
//           <div className="modal-header">
//             <h1 className="modal-title">Edit User</h1>
//             <button onClick={() => setOpenEdit(false)} className="modal-close-btn">X</button>
//           </div>
//           <form onSubmit={handleEditSubmit} className="edit-form modal-form">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={editName}
//               onChange={(e) => setEditName(e.target.value)}
//               required
//               className="modal-input"
//             />
//             <input
//               type="text"
//               name="age"
//               placeholder="Age"
//               value={editAge}
//               onChange={(e) => setEditAge(e.target.value)}
//               required
//               className="modal-input"
//             />
//             <button type='submit' className="btn-save modal-submit-btn">save</button>
//             <button
//               type="button"
//               onClick={() => setOpenEdit(false)}
//               className="modal-close-btn"
//             >
//               Close
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   )
// }




// export default App;













import React from 'react'
import H1 from './components/H1'
import H2 from './components/H2'
import H3 from './components/H3'

export default function App() {
  return (
    <div>
      <H1 />
      <H2 />
      <H3 />
    </div>
  )
}
