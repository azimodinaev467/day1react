import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState([{
    id: 1,
    name: "Ahmad",
    age: 20
  }])
  const [idx, setIdx] = useState(null)
  const [open, setOpen] = useState(false)
  const [editName, setEditName] = useState('')
  const [editAge, setEditAge] = useState("")

  const [filteredData, setFilteredData] = useState(data)
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
    setFilteredData(data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())))
  }

  const handleDelete = (id) => {
    const updated = data.filter((e) => e.id !== id)
    setData(updated)
    setFilteredData(updated)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      id: Date.now(),
      name: e.target.name.value,
      age: e.target.age.value,
    }
    const updated = [...data, newUser]
    setData(updated)
    setFilteredData(updated)
    e.target.reset()
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      id: idx,
      name: editName,
      age: editAge,
    }

    const updated = data.map((e) => e.id === idx ? newUser : e)
    setData(updated)
    setFilteredData(updated)
    setOpen(false)
    setIdx(null)
  }

  return (
    <div className="crm-app">
      <div className="add-section">
        <form onSubmit={handleSubmit} className="add-form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="age" placeholder="Age" required />
          <button type='submit' className="btn-add">submit</button>
        </form>
      </div>

      <input 
        type="text" 
        placeholder='Search' 
        value={search} 
        onChange={handleSearch} 
        className="search-bar" 
      />

      <input 
        type="text" 
        placeholder='Filter by age' 
        onChange={(e) => {
          const val = e.target.value.toLowerCase()
          setFilteredData(data.filter((user) => String(user.age).toLowerCase().includes(val)))
        }} 
      />

      <div className="crm-table">
        {
          filteredData.map((e) => {
            return (
              <div key={e.id} className="crm-row">
                <h1 className="crm-name">Name:{e.name}</h1>
                <p className="crm-age">Age:{e.age}</p>
                <button className="btn-delete" onClick={() => handleDelete(e.id)}>delete</button> <br />
                <button className="btn-edit" onClick={() => { setOpen(true); setEditName(e.name); setEditAge(e.age); setIdx(e.id) }}>edit</button>
                {open && idx === e.id ? (
                  <form onSubmit={handleEditSubmit} className="edit-form">
                    <input value={editName} onChange={(e) => setEditName(e.target.value)} type="text" name="name" />
                    <input value={editAge} onChange={(e) => setEditAge(e.target.value)} type="text" name="age" />
                    <button type='submit' className="btn-save">submit</button>
                  </form>
                ) : null}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
