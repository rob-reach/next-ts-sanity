import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

/**
 * Types
 */
type Inputs = {
  name: string;
  message: string;
};

/**
 * Example form component
 *
 * @return {JSX.Element} JSX Code for an example form
 */
export default function TestForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  /**
   * Submit function for form
   *
   * TODO: Error handling
   * TODO: Convert to async await
   *
   * @param {Object} data Form submission data
   */
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios({
      method: "post",
      url: "/api/contact",
      data,
    }).then((response) => {
      reset();
      console.log(response);
    });
  };

  /**
   * Reset the form on component mount.
   */
  useEffect(() => {
    reset();
  }, []);

  return (
    <form
      className="bg-grey-100 p-4 my-4 rounded-md shadow-md max-w-xs"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="your-name-field">
        Your Name
        <input
          className="p-2 block mb-2 rounded-sm"
          id="your-name-field"
          placeholder="Your Name..."
          type="text"
          {...register("name")}
        />
      </label>
      <label htmlFor="your-message-field">
        Your message
        <textarea
          className="block rounded-sm resize-none p-2 max-w-full"
          id="your-message-field"
          placeholder="Your message..."
          cols={30}
          rows={10}
          {...register("message", { required: true })}
        />
      </label>
      {errors.message && <span>This field is required!</span>}
      <button className="block mt-4" type="submit">
        Submit
      </button>
    </form>
  );
}
