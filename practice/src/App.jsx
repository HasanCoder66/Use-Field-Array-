import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
// import './App.css'

function App() {
  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <>
      <form>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
      </form>
    </>
  );
}

export default App;
