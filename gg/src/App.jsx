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
  const [search, setSearch] = useState("")
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleDelete = (id) => {
    setData(data.filter((e) => e.id != id))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      id: Date.now(),
      name: e.target.name.value,
      age: e.target.age.value,
    }
    setData([...data, newUser])
  }
  const handleEditSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      id: idx,
      name: editName,
      age: editAge,
    }
    console.log(newUser);

    setData(data.map((e) => e.id == idx ? newUser : e))
    setOpen(false)
    setIdx(null)
  }



  return (
    <div className="crm-app">
      <div className="add-section">
        <form onSubmit={handleSubmit} action="" className="add-form">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="age" placeholder="Age" />
          <button type='submit' className="btn-add">submit</button>
        </form>
      </div>
      <input type="text" placeholder='Search' value={search} onChange={handleSearch} className="search-bar" />
      <div className="crm-table">
        {
          data
            .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
            .map((e) => {
              return <div key={e.id} className="crm-row">
                <h1 className="crm-name">Name:{e.name}</h1>
                <p className="crm-age">Age:{e.age}</p>
                <button className="btn-delete" onClick={() => handleDelete(e.id)}>delete</button> <br />
                <button className="btn-edit" onClick={() => { setOpen(true); setEditName(e.name); setEditAge(e.age); setIdx(e.id) }}>edit</button>
                {open && idx === e.id ? <form onSubmit={handleEditSubmit} action="" className="edit-form">
                  <input value={editName} onChange={(e) => setEditName(e.target.value)} type="text" name="name" />
                  <input value={editAge} onChange={(e) => setEditAge(e.target.value)} type="text" name="age" />
                  <button type='submit' className="btn-save">submit</button>
                </form> : null}

              </div>
            })
        }
      </div>
    </div>
  )
}
export default App;

