import { addDoc, collection, onSnapshot, Timestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, {useState} from 'react'
import { db, storage } from '../../../firebase'

const SkillAdd = () => {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
        createdAt : Timestamp.now().toDate() // funtion format date autonow from firebase
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
        const storageRef = ref(storage, `skills/${formData.image.name}${Date.now()}`) 
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
                    name:"",
                    description: "",
                    image: "",
                    
                });
                getDownloadURL(uploadImage.snapshot.ref)
                .then((url)=>{
                    const skillRef = collection(db, "Skills");
                    addDoc(skillRef, {
                        name: formData.name,
                        description: formData.description,
                        image: url, 
                        createdAt : Timestamp.now().toDate() // funtion format date autonow from firebase
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
    }

    return (
        <div className="px-6 mt-16">
            <form action="">
                <div>
                    <label htmlFor="name"> name</label>
                    <input onChange={(e)=>handeleChange(e)} value={formData.name} type="text" name='name'  />
                </div>
                <div>
                    <label htmlFor="description"> description</label>
                    <textarea onChange={(e)=>handeleChange(e)} value={formData.description} name="description" id="" cols="30" rows="2"></textarea>
                </div>
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


                <div>
                    <button onClick={(e)=>handlePublish(e)} className='bg-gray-600 hover:text-gray-800 px-3 pb-1 rounded-xl'>submit</button>
                </div>

            </form>


        </div>
    )
}

export default SkillAdd