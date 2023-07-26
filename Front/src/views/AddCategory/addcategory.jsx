import { useState } from "react"
import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"
import axiosApi from "../../config/axios"
import Swal from "sweetalert2";

export default () => {
    const[name,setname]=useState('')
    const[description,setdescription]=useState('')
    const [file,setfile]=useState(null)

    // const handleChange=(event)=>{
    //     console.log(event,'eeeeeeee***************');
    // }
    console.log(name)
    console.log(description)
    /////add avec file//////////////////////////////////
    const addCategory=()=>{
        const data=new FormData()
        data.append('name',name)
        data.append('description',description)
        data.append('file',file)
        axiosApi.post("http://localhost:5000/categories",data).then((res)=>{
            if(res.status=== 201){
                Swal.fire(
                    'Good job!',
                    'Category created Succesfully',
                    'success'
                  )
            }  
        }).catch((err)=>{
            console.log(err.message);
        })
    }    
    return(
        <>
        <Navbar/>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Add Category</h6>
                <h1 className="mb-5">Category</h1>
            </div>
            <div className="row g-4">  
                <div class="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row g-3">
                        <div className="col-12">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="Name" placeholder="Name" 
                                    onChange={(e)=>setname(e.target.value)}/>
                                <label htmlFor="Name">Name</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating">
                                <input type="file" className="form-control" id="File" placeholder="File" 
                                    onChange={(e)=>setfile(e.target.files[0])}/>
                                <label htmlFor="File">File</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="Description" placeholder="Description" 
                                    onChange={(e)=>setdescription(e.target.value)}/>
                                <label htmlFor="Description">Description</label>
                            </div>
                        </div>

                
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit" 
                                onClick={addCategory}>Add Category</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}