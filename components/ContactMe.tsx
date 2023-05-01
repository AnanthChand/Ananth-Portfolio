import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href =
      "mailto.ananthinindia@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. $(formData.message) (${formData.email})";
  };

  return (
    <div
      style={{
        backgroundImage: "url('/bg3.png')",
        backgroundSize: "cover",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen flex relative flex-col text-center md:text-left mx-auto items-center md:flex-row max-w-7xl px-10 justify-evenly "
    >
      <h3 className=" absolute top-24 uppercase tracking-[5px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 text-black absolute top-32">
        <h4 className="text-2xl font-semibold text-center">
          I have got what you need.
          <span className="decoration-[#f7ab0a]/40 ">Lets Talk.</span>
        </h4>

        <div>
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]" />
            <p>8762653711</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]" />
            <p>ananthinindia@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]" />
            <p>Mankalale village, Sagar Talluk, Shivamogga District</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          action="post"
          className="flex flex-col space-y-2 mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="E-mail"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;