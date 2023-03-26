import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../services/auth/authSlice';
import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';

const Login = () => {
  const dispatch = useDispatch()

  const {isSuccess,isLoading,isError,user,loginData} = useSelector((state)=>state.auth)
  const navigate =  useNavigate()

  let schema = yup.object().shape({
    email: yup.string().email("Email should be valid").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  });

const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });


useEffect(()=>{
  if(isSuccess && loginData){
    toast.success("Login success")
    navigate("/")
  }
  if(isError){
    toast.error("Somthing is wrong Pleas try letter")
  }
},[isSuccess,isError,loginData])

  return (
    <div className='md:w-[600px] w-full m-auto flex items-center justify-center mt-[140px]'>
        <div className='w-full'>
            <h1 className='text-[30px] font-bold text-center'>Log In</h1>
            <form className='w-full flex flex-col' action='' onSubmit={formik.handleSubmit}> 
                <div className='w-full'>
                    <input type="email" placeholder='Email' id='email' name='email' value={formik.values.name} onChange={formik.handleChange("email")}/>
                      <p className=' text-red-600'>{formik.touched.email && formik.errors.email}</p>
                </div>

                <div className='w-full'>
                    <input type="password" placeholder='Password' id='password' name='password' value={formik.values.password} onChange={formik.handleChange("password")}/>
                      <p className='text-red-600'>{formik.touched.password && formik.errors.password}</p>
                </div>
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
                      <p className=' text-center text-[18px]'>Creacte a mamber?<Link className=' font-bold' to={"/signup"}>Register</Link> </p>
                  </div>
            </form>
        </div>
    </div>
  )
}

export default Login



