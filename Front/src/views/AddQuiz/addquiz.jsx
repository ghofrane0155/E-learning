import { useState } from "react"
import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"

import axiosApi from "../../config/axios"
import Swal from "sweetalert2";

export default () => {
    const[question,setquestion]=useState('')
    const[rep1,setrep1]=useState('')
    const [rep2,setrep2]=useState('')
    const [rep3,setrep3]=useState('')
    const [answer,setanswer]=useState('')
    /////add sans file//////////////////////////////////
    const addQuiz=()=>{
        let data={
            question:question,
            rep1:rep1,
            rep2:rep2,
            rep3:rep3,
            answer:answer
        }
        axiosApi.post("http://localhost:5000/quizs",data).then((res)=>{
            if(res.status=== 201){
                Swal.fire(
                    'Good job!',
                    'Quiz created Succesfully',
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
                    <h6 className="section-title bg-white text-center text-primary px-3">Add Quiz</h6>
                    <h1 className="mb-5">Quiz</h1>
                </div>
                <div className="row g-4">  
                    <div class="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">

                        <div className="row g-3">

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="Question" placeholder="Question" 
                                        onChange={(e)=>setquestion(e.target.value)}/>
                                    <label htmlFor="Question">Question</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="rep1" placeholder="Reponse 1" 
                                        onChange={(e)=>setrep1(e.target.value)}/>
                                    <label htmlFor="rep1">Reponse 1</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="rep2" placeholder="Reponse 2" 
                                        onChange={(e)=>setrep2(e.target.value)}/>
                                    <label htmlFor="rep2">Reponse 2</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="rep3" placeholder="Reponse 3" 
                                        onChange={(e)=>setrep3(e.target.value)}/>
                                    <label htmlFor="rep3">Reponse 3</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="answer" placeholder="Answer" 
                                        onChange={(e)=>setanswer(e.target.value)}/>
                                    <label htmlFor="answer">answer</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit"
                                    onClick={addQuiz}>Add Quiz</button>
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