import { addDoc, collection, onSnapshot, Timestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable, updateDoc, doc,  } from 'firebase/storage'
import React, {useState} from 'react'
import { db, storage } from '../../../firebase'

const ProjectAdd = () => {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
        date_init: "",
        doc: "",
        gitHub: "",
        live: "",
    })

    const handeleChange= e =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handeleImagenChange= e =>{
        setFormData({...formData, image: e.target.files[0] })
    }
    const [progres, setProgres] = useState(0)
    const handlePublish = (e)=>{
        console.log(formData)
        if(!formData.name ||!formData.description ||!formData.image) {// see empty
            alert("empty field")
            }

        // create dir firebase to upload all files images
        const storageRef = ref(storage, `projects/${formData.image.name}${Date.now()}`) 
        const uploadImage = uploadBytesResumable(storageRef, formData.image)
        // Progres Percent Upload
        uploadImage.on("state_changed", (snapshot)=>{
            const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100)
            setProgres(progressPercent)
            },
            (err)=> {

                console.log(err);
            },
            ()=>{
                setFormData({
                    name: "",
                    description: "",
                    image: "",
                    date_init: "",
                    doc: "",
                    gitHub: "",
                    live: "",
                    
                });
                getDownloadURL(uploadImage.snapshot.ref)
                .then((url)=>{
                    const skillRef = collection(db, "Projects");
                    addDoc(skillRef, {
                        name: formData.name,
                        description: formData.description,
                        image: url, 
                        date_init: formData.date_init,
                        doc: formData.doc,
                        gitHub: formData.gitHub,
                        live: formData.live,
                    })
                    .then(()=>{
                        alert("Skill add successfully", {type: "success"});
                        setProgres(0)
                    })
                    .catch(err=>{
                        alert("Error", {type: "error"});
                        
                    })
                })
            }
        )
        e.preventDefault();
        e.target.reset();
    }


 


    return (
        <div className="px-6 mt-16 text-xs text-gray-800 bg-gray-200">
            <form action="">
                <div>
                    <input placeholder='name' onChange={(e)=>handeleChange(e)} value={formData.name} type="text" name='name'  />
                </div>
                <div>
                    <input onChange={(e)=>handeleChange(e)} value={formData.date_init} type="date" name='date_init'  />
                </div>
                <div>
                    <textarea  placeholder='description' onChange={(e)=>handeleChange(e)} value={formData.description} name="description" id="" cols="30" rows="2"></textarea>
                </div>
                <div>
                    <textarea  placeholder='doc'  onChange={(e)=>handeleChange(e)} value={formData.doc} name="doc" id="" cols="30" rows="2"></textarea>
                </div>

                {/* links */}
                <div>
                    <input  placeholder='gitHub' onChange={(e)=>handeleChange(e)} value={formData.gitHub} type="url" name='gitHub'  />
                </div>
                <div>
                    <input  placeholder='live' onChange={(e)=>handeleChange(e)} value={formData.live} type="url" name='live'  />
                </div>
                {/* links */}

                {/* imagen to public */}
                <div>
                    <label htmlFor="image" className='h-1'> image</label>
                    <input onChange={(e)=>handeleImagenChange(e)} type="file" accept='images/skills' name='image' />
                </div>
                {progres==!0 &&            
                <div className="w-full bg-gray-200 rounded-full">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-05 leading-none rounded-l-full" 
                    style={{width: "{progres}%"}}> 
                    {progres}%</div>
                </div>
                }
                {/* imagen to public */}


                <div>
                    <button onClick={(e)=>handlePublish(e)} className='bg-gray-600 hover:text-gray-800 px-3 pb-1 rounded-xl'>submit</button>
                </div>

            </form>


        </div>
    )
}

export default ProjectAdd