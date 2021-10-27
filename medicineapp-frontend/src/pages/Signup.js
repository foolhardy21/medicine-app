import { useState } from "react"
import { useHistory } from "react-router"
import { postUser } from "../services/users"

const SignUp = () => {
    const history = useHistory()

    async function handleSignUpSubmit(e) {
        e.preventDefault()

        const userObj = {
            username: e.target.username_input.value,
            password: e.target.password_input.value,
            age: e.target.age_input.value,
            gender: e.target.gender_input.value,
            contact: e.target.contact_input.value,
            name: e.target.name_input.value,
            address: e.target.address_input.value
        }
        const response = await postUser(userObj)
        e.target.username_input.value = ''
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
        <form onSubmit={handleSignUpSubmit}>
            <label htmlFor='username_input'>username</label>
            <input name='username_input' type='text'/><br/>
            <label htmlFor='password_input'>password</label>
            <input name='password_input' type='password' /><br/>
            <label htmlFor='age_input'>age</label>
            <input name='age_input' type='number'/><br/>
            <label htmlFor='gender_input'>gender</label>
            <input type='text' name='gender_input'/><br/>
            <label htmlFor='contact_input'>contact</label>
            <input name='contact_input' type='number' /><br/>
            <label htmlFor='name_input'>name</label>
            <input name='name_input' type='text' /><br/>
            <label htmlFor='address_input'>address</label>
            <input name='address_input' type='text' /><br />
            <input type='submit' value='signup'/>
        </form>
    )
}

export default SignUp