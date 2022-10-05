import React from 'react'
import { SubmitHandler, useForm, Resolver } from 'react-hook-form';
import { GoStop } from 'react-icons/go';
import emailjs from '@emailjs/browser';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  inquiry: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
        name: {
            type: 'required',
            message: 'Name is required.',
          },
        email: {
            type: 'required',
            message: 'Email address is required.',
          },
        phone: {
            type: 'required',
            message: 'Phone Number is required.',
          },
        inquiry: {
            type: 'required',
            message: 'Inquiry is required.',
          },
        }
      : {},
  };
};

const InquiryForm:React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  
  const onSubmit: SubmitHandler<FormValues> = (data: any)=> {
    emailjs.sendForm('service_0x7fznh', 'template_uw78xko', data as HTMLFormElement, 'GaczygC3Z26vSk_Y6')
      .then((result) => {
          console.log('hello', result.text);
      }, (error) => {
          console.log('err', error.text);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="bg-[#303030] shadow appearance-none w-full p-3 text-[#909090] mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register("name")} placeholder="Name" />
        {errors?.name && <p className="mb-1 mt-[-0.25rem]"><GoStop /> {errors.name.message}</p>}
        <input className="bg-[#303030] shadow appearance-none w-full p-3 text-[#909090] mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register("email")} placeholder="Email Address" />
        {errors?.email && <p className="mb-1 mt-[-0.25rem]"><GoStop /> {errors.email.message}</p>}
        <input className="bg-[#303030] shadow appearance-none w-full p-3 text-[#909090] mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register("phone")} placeholder="Phone Number" />
        {errors?.phone && <p className="mb-1 mt-[-0.25rem]"><GoStop /> {errors.phone.message}</p>}
        <textarea className="bg-[#303030] shadow appearance-none w-full p-3 text-[#909090] mb-1 leading-tight focus:outline-none focus:shadow-outline min-h-[150px]" {...register("inquiry")} placeholder="Message"></textarea>
        {errors?.inquiry && <p className="mb-1 mt-[-0.25rem]"><GoStop /> {errors.inquiry.message}</p>}
        <input type="submit" value="Send Message" className="border border-[#303030] text-[#909090] py-2 px-4 focus:outline-none focus:shadow-outline cursor-pointer hover:text-white hover:border-white"/>
      </form>
    </>
  );
}

export default InquiryForm