import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'

const AddExpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    description: "",
    exp: false,
    date_init: "",
    gitHub: "",
    webLink: "",
  })

  const handeleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePublish = (e) => {
    console.log(formData)
    if (!formData.name || !formData.description || !formData.place || !formData.date_init) {// see empty
      alert("empty field")
    }
    const skillRef = collection(db, "ExpForm");
    addDoc(skillRef, {
      name: formData.name,
      place: formData.place,
      description: formData.description,
      exp: formData.exp,
      date_init: formData.date_init,
      gitHub: formData.gitHub,
      webLink: formData.webLink,
    })
      .then(() => {
        alert("Add successfully", { type: "success" });
      })
      .catch(err => {
        alert("Error", { type: "error" });
      })
      setFormData({
        name: "",
        place: "",
        description: "",
        exp: false,
        date_init: "",
        gitHub: "",
        webLink: "",
      })
      e.preventDefault();
  }

  useEffect(() => {
    
    console.log(formData)

  }, [formData])
  

  return (
    <div className="flex justify-center mx-0 px-6 mt-16 ">
      <form className='bg-gray-900 w-1/2 m-8 p-2' action="">
        <div className="flex justify-center">
          <h1 className=''>add exp or formation</h1>
        </div>
        <div>
          <input
            className=' w-full leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded'
            placeholder='name' onChange={(e) => handeleChange(e)} value={formData.name} type="text" name='name' />
        </div>
        <div>
          <input
            className='leading-none w-full text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded'
            placeholder='place' onChange={(e) => handeleChange(e)} value={formData.place} type="text" name='place' />
        </div>
        <div>
          <textarea
            className='leading-non w-full text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded'
            placeholder='description' onChange={(e) => handeleChange(e)} value={formData.description} name="description" id="" cols="30" rows="2"></textarea>
        </div>
        <div>
          <label htmlFor="exp">is exp? </label>
          <input onChange={(e) =>  setFormData({ ...formData, [e.target.name]: !formData.exp })} value={formData.exp} type="checkbox" name="exp" id="exp" />
        </div>
        <div>
          <input
            className='leading-none w-full text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded'
            onChange={(e) => handeleChange(e)} value={formData.date_init} type="date" name='date_init' />
        </div>

        {/* links */}
        <div>
          <input
            className='leading-none w-full text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded'
            placeholder='gitHub' onChange={(e) => handeleChange(e)} value={formData.gitHub} type="url" name='gitHub' />
        </div>
        <div>
          <input
            className='leading-none w-full text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded'
            placeholder='live' onChange={(e) => handeleChange(e)} value={formData.webLink} type="url" name='webLink' />
        </div>
        {/* links */}



        <div className='flex justify-center'>
          <button onClick={(e) => handlePublish(e)} className=' bg-gray-600 hover:text-gray-800 mt-3 px-3 pb-1 rounded-xl'>submit</button>
        </div>

      </form>


    </div>
  )
}

export default AddExpForm