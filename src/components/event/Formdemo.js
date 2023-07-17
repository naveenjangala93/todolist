// import React from 'react'
import { useForm } from 'react-hook-form'

import { AiOutlineUserAdd } from 'react-icons/ai'


function Formdemo() {
  let { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors)
  let submitForm =
    (data) => {
      console.log(data)

      fetch("http://localhost:4000/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(message => console.log(message))
        .catch(err => console.log(err))
    };

  return (
    <div className='container'>
      <h1 className='text-danger text-center mt-3 '>
        User Registration Form
      </h1>
      <div className='row '>

        <div className='col-11 col-sm-8 col-md-6 col-lg-5 d-block m-auto  border  p-3  '>
          <form onSubmit={handleSubmit(submitForm)}>

            <div className="form-floating">
              <input
                type="text"
                className='form-control mb-3 '
                placeholder='Type your name here..'
                {...register("Username", { required: "true", minLength: "4", maxLength: "6" })}

              />
              <label htmlFor="">username</label>

            </div>
            {errors.Username?.type === "required" && <p className='text-danger'>*User name is required</p>}
            {errors.Username?.type === "minLength" && <p className='text-danger'>*Min length is required</p>}

            <input
              type="date"
              className='  mb-3 form-control '
              {...register("dateOfBirth")}
            />
            <div className='form-check'>
              <input
                type="radio"
                className='form-check-input  border border-dark'
                value="male"
                {...register("gender", { required: true })}
              />
              <label htmlFor='male ' className=' ms-2 form-check-label'>
                Male
              </label>

            </div>
            <div className='form-check'>
              <input
                type="radio"
                className='form-check-input  border border-dark'
                value="female"
                {...register("gender")}
              />
              <label htmlFor='female ' className=' ms-2 form-check-label'>
                Female
              </label>
            </div>

            {errors.gender?.type === "required" && <p className='text-danger'>*choose gender</p>}

            <select
              {...register("state")} className='form-select mt-3 mb-3' defaultValue={"DEFAULT"} >
              <option value="DEFAULT" disabled >Choose your state...</option>
              <option value="telangana"> Telangana</option>
              <option value="ap"> Andhra</option>
              <option value="csk"> Chennai</option>
            </select>

            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-add1"><AiOutlineUserAdd className='fs-3' /></span>

              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="form-check">
              <input type="checkbox"

                className='form-check-input'
              />
              <label className='form-check-label' > Telangana</label>
            </div>
            <div className="form-check">
              <input type="checkbox"

                className='form-check-input'
                value=""
                {...register("state")}
              />
              <label className='form-check-label' > Ap</label>
            </div>


            <button type="submit" className='btn btn-success  p-2'><AiOutlineUserAdd className='fs-4 mb-2' />Add user </button>
          </form>

        </div>
      </div>


    </div>
  )
}

export default Formdemo