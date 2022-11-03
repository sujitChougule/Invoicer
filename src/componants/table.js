import React from "react"

export default function Table({list, total}){
    return(
    <>
    <h1 className="font-bold uppercase tracking-wide text-2xl mb-3 text-center">Quotation</h1>
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
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <div>
          <h2 className='flex items-end justify-end text-gray-800 text-xl font-bold'>
            Total: ₹{total.toLocaleString()} /-</h2>
        </div>

    </>

    )
}