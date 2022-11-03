export default function Date({invoiceNumber,invoiceDate,dueDate}){
    return(
    <>
    
    <article className="mb-5 my-5 flex  items-end justify-end">
        <ul>
          <li className="p-1"><span className="font-bold">Invoicer number: </span>{invoiceNumber}</li>
          <li className="bg-gray-100"><span className="font-bold">Invoicer date: </span>{invoiceDate}</li>
          <li className="p-1"><span className="font-bold">Due dates: </span>{dueDate}</li>
        </ul>
      </article>
    
    </>

    )
}