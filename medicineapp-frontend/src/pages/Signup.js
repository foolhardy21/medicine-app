import { useState } from "react"
import { useHistory } from "react-router"
import { postUser } from "../services/users"

const SignUp = () => {
    const history = useHistory()

    async function handleSignUpSubmit(e) {
        e.preventDefault()

        const userObj = {
            username: e.target.username.value,
            password: e.target.password_input.value,
            age: e.target.age_input.value,
            gender: e.target.gender_input.value,
            contact: e.target.contact_input.value,
            name: e.target.name_input.value,
            address: e.target.address_input.value
        }
        const response = await postUser(userObj)
        e.target.username.value = ''
        e.target.password_input.value = ''
        e.target.age_input.value = ''
        e.target.gender_input.value = ''
        e.target.contact_input.value = ''
        e.target.name_input.value = ''
        e.target.address_input.value = ''

        alert('Account has been created.')
        history.push('/login')
    }
    return (
    
      
      <form onSubmit={handleSignUpSubmit} className="bg-info rounded">
        <section className="vh-100 ">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong">
                  <div className="card-body p-3 text-center bg-light">
                    <h3 className="mb-4 ">Sign Up</h3>
                    <div className="form-floating mb-4">
                        <label htmlFor="username" className="col-md-4 col-form-label text-md-right">Username : </label>
                        <input id="username" type='text' placeholder="Enter username" autoComplete = 'none'/>

                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password : </label>
                        <input name='password_input' id="password" type='password' placeholder="Enter password"/>

                        <label htmlFor="age" className="col-md-4 col-form-label text-md-right">Age : </label>
                        <input name='age_input' id="age" type='number' placeholder="Enter age"/>

                        <label htmlFor="gender" className="col-md-4 col-form-label text-md-right">Gender : </label>
                        <input type='text' list="gender" name='gender_input' placeholder="Gender"/>
                        <datalist id="gender">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </datalist>

                        <label htmlFor="contact" className="col-md-4 col-form-label text-md-right">Contact : </label>
                        <input name='contact_input' id="contact" type='number' minLength="9" maxLength="9" placeholder="Enter Contact"/>

                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Enter Name : </label>
                        <input name='name_input' id="name" type='text' placeholder="Enter Name" autoComplete = 'none' />

                        <label htmlFor="address" className="col-md-4 col-form-label text-md-right">Address : </label>
                        <input name='address_input' id="address" type='text' placeholder="Enter Address" autoComplete = 'none'/>
                    </div>
                    <input type='submit' value='signup' className="btn btn-primary btn-lg btn-block"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </form>
   
    )
}

export default SignUp