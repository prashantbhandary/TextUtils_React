import React , {useState} from 'react'


export default function TextForm(props) {
    
    const handleUppercase = () =>
    {
            console.log("uppercase ")
             let newText=  text.toUpperCase();
             setText(newText);
             props.showalert(" Converted to upper case","Sucess")
    }
    const handleChange = (event) =>
    {
                 setText(event.target.value)
        }

    const handleLowercase = () =>
            {
                     console.log("uppercase ")
                     let newText=  text.toLowerCase();
                     setText(newText);
                     props.showalert(" Converted to lower case","Sucess")
            }

     const handleClearText = () =>
            {
                setText(" ")
                props.showalert(" Clear Text","Sucess")
            }

    const [text, setText] = useState('');

    
  return (
    <>
    <div className="bg-gray-100 py-12">
     <div className="flex justify-center items-center flex-col">
        <div className="w-1/2">
          <label htmlFor="message" className="block text-2xl font-bold text-gray-800 mb-4">
        {props.heading}
      </label>
      <textarea
        placeholder="Enter your message here..."
        id="message"
        name="message"
        value={text}
        onChange={handleChange}
        className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        rows="8"
      ></textarea>
      <p className="text-gray-600 mt-2">Words: {text.split(" ").filter(Boolean).length} | Characters: {text.length}</p>
      <p className="text-gray-600">Estimated Read Time: {0.008 * text.split(" ").filter(Boolean).length} Minutes</p>
    </div>
    <div className="w-1/2 mt-4">
      <button className=" mx-2 bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded transition " onClick={handleUppercase}>

        Convert to Uppercase
      </button>
      <button className=" mt-3 mx-2 bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded transition" onClick={handleLowercase}>
        Convert to Lowercase
      </button>

      <button className=" mt-3 mx-2 bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded transition" onClick={handleLowercase}>
        Convert to ??
      </button>

      <button className=" mt-3 mx-2 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded transition" onClick={handleClearText}>
        Clear Text
      </button>
    </div>
  </div>

        <div className="flex justify-center w-full mt-6">
            <div className="w-1/2">
            <h3 className="font-bold text-2xl text-gray-800 mb-4">Preview</h3>
            <p className="border border-gray-300 p-4 rounded-md text-gray-700">{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </div>
    </div>
    </>
  )
}
