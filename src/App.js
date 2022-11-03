import {useState, useRef} from "react"
import ClientDetails from "./componants/ClientsDetails";
import Date from "./componants/Dates";
import Footer from "./componants/footer";
import Header from "./componants/Header";
import MainDetails from "./componants/MainDetails";
import Notes from "./componants/Notes";
import Table from "./componants/table";
import TableForm from "./componants/TableForm";
import ReactToPrint from "react-to-print"


function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  
  const [clientName, setClientName]=useState("")
  const [clientAddress, setClientAddress]=useState("")
  const [email, setEmail]=useState("")
  const [phone, setPhone]=useState("")
  const [bankName, setBankName]=useState("")
  const [accountNumber, setAccountNumber]=useState("")
  const [invoiceNumber, setInvoiceNumber]=useState("")
  const [invoiceDate, setInvoiceDate]=useState("")
  const [dueDate, setDueDate]=useState("")
  const [notes, setNotes]=useState("")

  const [description, setDescription]=useState("")
  const [quantity, setQuantity]=useState("")
  const [rate, setRate]=useState("")
  const [amount, setAmount]=useState("")

  const componantRef =useRef()

  const [list,setList]=useState([])

  const [total, setTotal]=useState(0)


  const handlePrint=()=>{
    window.print()
  }

  return (
    <>
    <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl  bg-white rounded shadow">
      <ReactToPrint trigger={()=><button className="mb-5 bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300">print / download</button>}
      content={()=>componantRef.current}
      />
      {showInvoice? 
      
      <>
      <div ref={componantRef} className="p-5">

<Header handlePrint={handlePrint}/>

<MainDetails />

<ClientDetails clientName={clientName} clientAddress={clientAddress} email={email} phone={phone}/>

<Date invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/>

<Table description={description} quantity={quantity} rate={rate} amount={amount} list={list} setList={setList} total={total} setTotal={setTotal}/>

<Notes notes={notes}/>

<Footer/>


</div> 
<button onClick={()=> setShowInvoice(false)} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Info</button>
</>
:(
  <>
    <div className=" flex flex-col justify-center">

          <article className="md:grid grid-cols-2 gap-10">


          <div className="flex flex-col ">

          <label htmlFor="clientName">Enter Client's Full Name</label>
    <input
      type="text"
      name="text"
      id="clientName"
      placeholder="Enter"
      autoComplete="off"
      value={clientName}
      onChange={(e)=> setClientName(e.target.value)}
    />
          </div>

          <div className="flex flex-col">
          <label htmlFor="clientAddress">Enter Client's Address</label>
    <input
      type="text"
      name="clientAddress"
      id="clientAddress"
      placeholder="Enter"
      autoComplete="off"
      value={clientAddress}
      onChange={(e)=> setClientAddress(e.target.value)}
    />
          </div>
          </article>





<article className="md:grid grid-cols-2 gap-10">

<div className="flex flex-col">
<label htmlFor="email">Enter Client's Email</label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Enter"
      autoComplete="off"
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
    />

</div>
    

<div className="flex flex-col">
<label htmlFor="phone">Enter Client's Phone Number</label>
    <input
      type="number"
      name="phone"
      id="phone"
      placeholder="Enter"
      autoComplete="off"
      value={phone}
      onChange={(e)=> setPhone(e.target.value)}
    />
</div>

</article>



<article className="md:grid grid-cols-3 gap-10 mt-5">
<div className="flex flex-col">
<label htmlFor="invoiceNumber">Enter your Invoice Number</label>
    <input
      type="number"
      name="invoiceNumber"
      id="invoiceNumber"
      placeholder="Enter"
      autoComplete="off"
      value={invoiceNumber}
      onChange={(e)=> setInvoiceNumber(e.target.value)}
    />
</div>

<div className="flex flex-col">
<label htmlFor="invoiceDate">Enter your Invoice Date</label>
    <input
      type="date"
      name="invoiceDate"
      id="invoiceDate"
      placeholder="Enter"
      autoComplete="off"
      value={invoiceDate}
      onChange={(e)=> setInvoiceDate(e.target.value)}
    />
</div>

<div className="flex flex-col">
<label htmlFor="dueDate">Enter Due Date</label>
    <input
      type="date"
      name="dueDate"
      id="dueDate"
      placeholder="Enter"
      autoComplete="off"
      value={dueDate}
      onChange={(e)=> setDueDate(e.target.value)}
    />
</div>

</article>

{/** table here */}
<article>
  <TableForm description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity} rate={rate} setRate={setRate} amount={amount} setAmount={setAmount} list={list} setList={setList} total={total} setTotal={setTotal} />
</article>



<label htmlFor="notes">Enter any note </label>
    <textarea name="notes" id="notes" cols="30" rows="5" placeholder="Additional notes to the client" value={notes} on onChange={(e)=> setNotes(e.target.value)}></textarea>

    <button onClick={()=> setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>
    
    </div>
  </>
)}
    </main>
      
    </>
  );
}

export default App;
