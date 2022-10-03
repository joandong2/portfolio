import React from 'react'
import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
  inquiry: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  };
};

const InquiryForm:React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <form onSubmit={onSubmit} className="">
        <input className="bg-[#303030] shadow appearance-none w-full p-3 text-[#909090] mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register("firstName")} placeholder="First Name" />
        {errors?.firstName && <p>{errors.firstName.message}</p>}
        <input className="bg-[#303030] shadow appearance-none w-full p-3 text-[#909090] mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register("lastName")} placeholder="Last Name" />
        {errors?.lastName && <p>{errors.lastName.message}</p>}
        <textarea className="bg-[#303030] shadow appearance-none w-full p-3 text-[#909090] mb-3 leading-tight focus:outline-none focus:shadow-outline min-h-[150px]" {...register("inquiry")} placeholder="Message"></textarea>
        <input type="submit" value="Send Message" className="border border-[#303030] text-[#909090] py-2 px-4 focus:outline-none focus:shadow-outline cursor-pointer hover:text-white hover:border-white"/>
      </form>
    </>
  );
}

export default InquiryForm