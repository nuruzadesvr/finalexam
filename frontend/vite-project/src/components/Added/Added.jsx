import React from 'react'
import {Helmet} from "react-helmet";

import axios from 'axios';

import {Formik} from 'formik'
import * as Yup from "yup"
import "./Added.scss"
function Added() {
  return (
   <>

   
       <Helmet>
        <title>Add</title>
   
    </Helmet>
   <section className='added__container'>
   <Formik
       initialValues={{ name: '', price: '' }}
       validationSchema={Yup.object({
        name : Yup.string().required("Name is required"),
        price: Yup.number().required("Price is required")
       })}
       onSubmit={(values, { setSubmitting, resetForm }) => {
         axios.post(`http://localhost:8080/products/`, values).then((res)=>{
            console.log(res.data)
            setSubmitting(false)
            resetForm(true)
         })
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
          <div className='inputdiv'> <input
             type="name"
             name="name"
             placeholder='Name'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           /> <br />
           {errors.name && touched.name && errors.name}
           <br />  <br /><input
             type="price"
             name="price"
             placeholder='Price'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           /><br />
           {errors.price && touched.price && errors.price}
           <br />  <br /><button type="submit" disabled={isSubmitting}>
             Submit
           </button></div>
         </form>
       )}
     </Formik>

   </section>
   <Helmet/></>
  )
}

export default Added



