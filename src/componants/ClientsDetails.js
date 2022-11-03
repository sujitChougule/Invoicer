export default function ClientDetails({clientName , clientAddress, email, phone}){
    return(
    <>
    
    <section>
      <h2 className="font-bold mt-10 text-xl uppercase">{clientName}</h2>
      <p >{clientAddress}</p>
      <p>{phone}</p>
      <p>{email}</p>
      </section>


    </>

    )
}