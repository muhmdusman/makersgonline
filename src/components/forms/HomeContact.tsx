"use client"
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   name: string;
   email: string;
   message: string;
   web: string;
}

const schema = yup
   .object({
      name: yup.string().required().label("Name"),
      email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
      web: yup.string().required().label("Website"),
   })
   .required();

const HomeContact = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = (data: FormData) => {
      const notify = () => toast('Comment sent successfully', { position: 'top-center' });
      notify();
      reset();
   };

   return (
      <div className="consulting-contact-form" onSubmit={handleSubmit(onSubmit)}>
         <h3>Get in touch with us</h3>
         <p className="mb-4">Ready to transform your digital presence? Reach out to our team to discuss your web development, app development, or SEO needs. We&apos;re here to help your business succeed online.</p>
         <div className="row">
            <div className="col-lg-6">
               <div className="single-input-inner style-border">
               <input type="text" {...register("name")} placeholder="Full Name" />
               <p className="form_error">{errors.name?.message}</p>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="single-input-inner style-border">
               <input type="text" {...register("email")} placeholder="Email Address" />
               <p className="form_error">{errors.email?.message}</p>
               </div>
            </div>
            <div className="col-12">
               <div className="single-input-inner style-border">
               <textarea {...register("message")} placeholder="Message"></textarea>
               <p className="form_error">{errors.message?.message}</p>
               </div>
            </div>
            <div className="col-12 pb-3">
               <button className="it-btn btn-gradient">Discover more</button>
            </div>
         </div>
      </div>
   )
}

export default HomeContact
