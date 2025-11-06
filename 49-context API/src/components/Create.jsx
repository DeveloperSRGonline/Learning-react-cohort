import { useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const Create = ({ todos, setTodos }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = (data) => {
    // console.log(data);
    data.isCompleted = false;
    data.id = nanoid();
    // console.log(data)

    const copyTodos = [...todos];
    copyTodos.push(data);
    setTodos(copyTodos);
    // in short
    // setTodos([...todos,data])
    toast.success("Task create successfully!")
    reset();
  };

  return (
    <>
      <div className="create-task-section">
        <h1>Create</h1>
        <form onSubmit={handleSubmit(submitHandler)} className="task-form">
          <input
            {...register("title", { required: "Title can not be empty!" })}
            type="text"
            placeholder="Title"
          />
          <small className="error">{errors?.title?.message}</small>
          <input {...register("desc", { required: "Description can not be empty!" })} type="text" placeholder="Description" />
          <small className="error">{errors?.desc?.message}</small>
          <div className="imp">
            <input
              className="check"
              {...register("important")}
              type="checkbox"
              id=""
            />
            <span>Important</span>
          </div>
          <button type="submit">create task</button>
        </form>
      </div>
    </>
  );
};

export default Create;
