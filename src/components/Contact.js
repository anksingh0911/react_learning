const Contact =  ()=>{
  return(
    <div className="p-4">
      <h2 className="text-lg font-semibold">Contact Us</h2>
      <input type='text' className="p-1 border-gray-950 border-[1px] rounded-md  mr-2" placeholder="Name"/>
      <input type='text' className="p-1 border-gray-950 border-[1px] rounded-md mr-2" placeholder="Query"/>
      <button className="bg-green-500 py-1 px-2 rounded-md">Submit</button>
    </div>
  )
}
export default Contact;