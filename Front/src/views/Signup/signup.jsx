import { useState } from "react"
import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"
import axiosApi from "../../config/axios"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

export default () => {
    const[fullname,setfullname]=useState('')
    const[username,setusername]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[adress,setadress]=useState('')
    const[phone,setphone]=useState(0)

    const navigate=useNavigate()

    /////add sans file//////////////////////////////////
    const signUp=()=>{
        let data={
            items:'Student',
            fullName:fullname,
            userName:username,
            email:email,
            password:password,
            adress:adress,
            phone:phone
        }
        axiosApi.post("http://localhost:5000/users",data).then((res)=>{
            if(res.status=== 201){
                Swal.fire(
                    'Good job!',
                    'User created Succesfully',
                    'success'
                  )
                navigate("/Signin")
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
                <h6 className="section-title bg-white text-center text-primary px-3">Join Us Today!</h6>
                <h1 className="mb-5">Sign Up</h1>
            </div>
            <div className="row g-4">  
                <div class="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">

                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" 
                                    onChange={(e)=>setfullname(e.target.value)}/>
                                <label htmlFor="name">Your Name</label>
                            </div>
                        </div>
                    
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" 
                                    onChange={(e)=>setemail(e.target.value)}/>
                                <label htmlFor="email">Your Email</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="Username" placeholder="Username" 
                                    onChange={(e)=>setusername(e.target.value)}/>
                                <label htmlFor="Username">Username</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating">
                                <input type="Password" className="form-control" id="Password" placeholder="Password" 
                                    onChange={(e)=>setpassword(e.target.value)}/>
                                <label htmlFor="Password">Password</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="Adress" placeholder="Adress" 
                                    onChange={(e)=>setadress(e.target.value)}/>
                                <label htmlFor="Adress">Adress</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="Phone" placeholder="Phone" 
                                    onChange={(e)=>setphone(e.target.value)}/>
                                <label htmlFor="Phone">Phone</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit"
                                onClick={signUp}>Sign Up</button>
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