import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./CreateWine.css"


function CreateWine() {

  const navigate = useNavigate()

  const [wineName, setWineName] = useState()
  const [price, setWinePrice] = useState()
  const [varietal, setWineVarietal] = useState()
  const [description, setWineDescription] = useState()
  const [errors, setErrors] = useState()

  const handleWineNameChange = (e) => setWineName(e.target.value)
  const handleWinePriceChange = (e) => setWinePrice(e.target.value)
  const handleWineVarietalChange = (e) => setWineVarietal(e.target.value)
  const handleWineDescriptionChange = (e) => setWineDescription(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    const wineObject = {
      wine_name: wineName,
      price: price,
      varietal: varietal,
      description: description
    }
    addWine(wineObject)
  }

  const addWine = async (wineObj) => {
    const base_url = import.meta.env.VITE_BASE_URL
    const url = `http://${base_url}/api/`
    const context = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(wineObj)
    }
    const resp = await fetch(url, context)
    const body = await resp.json()
    if (resp.status === 400) {
      setErrors(body)
    } else {
      navigate("/")
    }
  }

  return(
    <>
      <h2>Create Wine</h2>
      {errors && <h4>{JSON.stringify(errors)}</h4>}
      <div>
        <label htmlFor="wineName">Wine Name:</label>
        <input value={wineName} name="wineName" onChange={handleWineNameChange}></input>
      </div>
      <div>
        <label htmlFor="winePrice">Wine Price:</label>
        <input value={price} name="winePrice" onChange={handleWinePriceChange}></input>
      </div>
      <div>
        <label htmlFor="wineVarietal">Wine Varietal:</label>
        <input value={varietal} name="wineVarietal" onChange={handleWineVarietalChange}></input>
      </div>
      <div>
        <label htmlFor="wineDescription">Wine Description:</label>
        <input value={description} name="wineDescription" onChange={handleWineDescriptionChange}></input>
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )}

  export default CreateWine
