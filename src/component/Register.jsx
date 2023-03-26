import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { regester } from '../services/auth/authSlice';
import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';

const Register = () => {
  const dispatch = useDispatch()

  const {isSuccess,isLoading,isError} = useSelector((state)=>state.auth)
  const navigate =  useNavigate()

  let schema = yup.object().shape({
    firstName: yup.string().required("FirstName is Required"),
    lasttName: yup.string().required("LastName is Required"),
    email: yup.string().email("Email should be valid").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  });

const formik = useFormik({
    initialValues: {
      firstName:"",
      lastName:"",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // dispatch(regester(values));

      console.log(values)
    },
  });


useEffect(()=>{
  if(isSuccess){
    toast.success("Register success")
    navigate("/login")
  }
  if(isError){
    toast.error("Somthing is wrong Pleas try letter")
  }
},[isSuccess,isError])

  return (
    <div className='md:w-[600px] w-full m-auto flex items-center justify-center mt-[140px]'>
        <div className='w-full bg-slate-400 p-4 rounded-2xl'>
            <h1 className='text-[30px] font-bold text-center'>Register</h1>
            <form className='w-full flex flex-col' action='' onSubmit={formik.handleSubmit}>
                <div className='w-full'>
                    <input type="text" placeholder='Enter FirstName' id='firstName' name='firstName' value={formik.values.firstName} onChange={formik.handleChange("firstName")}/>
                      <p className=' text-red-600'>{formik.touched.firstName && formik.errors.firstName}</p>
                </div>

                <div className='w-full'>
                    <input type="text" placeholder='Enter LasttName' id='lastName' name='lastName' value={formik.values.lastName} onChange={formik.handleChange("lastName")}/>
                      <p className=' text-red-600'>{formik.touched.lastName && formik.errors.lastName}</p>
                </div>
                
                <div className='w-full'>
                    <input type="email" placeholder='Email' id='email' name='email' value={formik.values.name} onChange={formik.handleChange("email")}/>
                      <p className=' text-red-600'>{formik.touched.email && formik.errors.email}</p>
                </div>

                <div className='w-full'>
                    <input type="password" placeholder='Password' id='password' name='password' value={formik.values.password} onChange={formik.handleChange("password")}/>
                      <p className='text-red-600'>{formik.touched.password && formik.errors.password}</p>
                </div>
                {/* <div className='flex items-center gap-2'>
                  <input className=' text-[20px]' type="checkbox" id="scales" name="scales"/>
                  <label htmlFor="scales">are you a woner</label>
                </div> */}
                <button type='submit' className='primary flex items-center justify-center'>{isLoading ? ( 
                    <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="40"
                    visible={true}
                  />
                 ) : ("regester")}</button>
                  <div>
                      <p className=' text-center text-[18px]'>Already a mamber?<Link className=' font-bold' to={"/login"}>Login</Link> </p>
                  </div>
            </form>
        </div>
    </div>
  )
}

export default Register



