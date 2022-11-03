import React from 'react'
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import { useState, useEffect } from 'react'
import {v4 as uuidv4} from "uuid"

export default function TableForm({description,
  setDescription, 
  quantity, 
  setQuantity, 
  rate, 
  setRate, 
  amount, 
  setAmount, 
  list, 
  setList,
  total,
  setTotal
}) 
{
   const[ isEditing,setIsEditing]=useState(false)
  //submit function
  const handleSubmit=(e)=>{
        e.preventDefault()

        if(!description|| !quantity || !rate){
            alert("Please fill in all inputs")
        } else{
          const newItems={
          id: uuidv4(),
          description,
          quantity,
          rate,
          amount,
          }
          setDescription("")
          setQuantity("")
          setRate("")
          setAmount("")
          setList([...list, newItems])
          setIsEditing(false)
          console.log(list)
        }

        

    }
    //calculate amount d=function
    useEffect(()=>{
        const calculateAmount =(amount)=>{
            setAmount(quantity*rate )
        }
        calculateAmount(amount)
    },[amount, quantity,rate, setAmount])


    //calculate total function
    useEffect(() => {
      let rows = document.querySelectorAll(".amount")
      let sum = 0
  
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].className === "amount") {
          sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
          setTotal(sum)
        }
      }
    })



      //Edit function
      const editRow =(id)=>{
        const editingRow = list.find((row)=> row.id ===id)
        setList(list.filter((row)=> row.id !==id))
        setIsEditing(true)
        setDescription(editingRow.description)
        setQuantity(editingRow.quantity)
        setRate(editingRow.rate)
        setAmount(editingRow.amount)
      }


    //delete function

    const deleteRow=(id)=>{
      setList(list.filter((row)=> row.id !==id))
    }
  
  

    return (
    <>
        <form onSubmit={handleSubmit}>
        <div className='flex flex-col md:mt-16'>
        <label htmlFor="description">Description</label>
        <input
      type="text"
      name="description"
      id="description"
      placeholder="Enter"
      autoComplete="off"
      value={description}
      onChange={(e)=> setDescription(e.target.value)}
    />
        </div>






        <div className='md:grid grid-cols-3 gap-10 '>
        <div className='flex flex-col'>
        <label htmlFor="quantity">Qantity</label>
        <input
      type="text"
      name="quantity"
      id="quantity"
      placeholder="Enter"
      autoComplete="off"
      value={quantity}
      onChange={(e)=> setQuantity(e.target.value)}
    />
        </div>

        <div className='flex flex-col'>
        <label htmlFor="rate">Rate</label>
        <input
      type="number"
      name="rate"
      id="rate"
      placeholder="Enter"
      autoComplete="off"
      value={rate}
      onChange={(e)=> setRate(e.target.value)}
    />
        </div>


        <div className='flex flex-col'>
        <label htmlFor="amount">Amount</label>
        <p>{amount}</p>
        </div>
        </div>

        <button type='submit' className="mb-5 mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
           {isEditing?"Editing Item" : "Add Item "}
           </button>
        </form>

        {/**table items */}

        <ul>
          
        <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, rate, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{rate}</td>
                <td className="amount">{amount}</td>
                <td><button onClick={()=>deleteRow(id)}><AiOutlineDelete className='text-red-500 font-bold text-xl'/></button></td>
                <td><button onClick={()=>editRow(id)}><AiOutlineEdit className='text-green-500 font-bold text-xl'/></button></td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
        </ul>

        <div>
          <h2 className='flex items-end justify-end  text-gray-800 text-xl font-bold'>
            Total: ₹{total.toLocaleString()} /-</h2>
        </div>
    </>
  )
}
