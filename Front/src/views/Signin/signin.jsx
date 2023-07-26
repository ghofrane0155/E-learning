import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"

import axiosApi from "../../config/axios"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default () => {
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')
    const navigate=useNavigate()
    /////sign in//////////////////////////////////
    const signIn=()=>{
        let data={
            userName:username,
            password:password
        }
        axiosApi.post("http://localhost:5000/auth/signin",data).then((res)=>{
            if(res.status=== 201){
                Swal.fire(
                    'Welcome!',
                    'sign in',
                    'success'
                  )
                  localStorage.setItem('user',JSON.stringify(res.data)) //save currentUser
                navigate("/")
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
                <h6 className="section-title bg-white text-center text-primary px-3">Welcome Back !</h6>
                <h1 className="mb-5">Sign In</h1>
            </div>
            <div className="row g-4">  
                <div class="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">

                    <div className="row g-3">

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
                            <button className="btn btn-primary w-100 py-3" type="submit"
                                onClick={signIn}>Sign In</button>
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