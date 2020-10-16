import React, {useState, useEffect } from "react";
import * as yup from 'yup';
import axios from 'axios'


//Checklist
const schema = yup.object().shape({
    name:yup.string().required('Name is required!').min(2, 'At least 2 characters reuired'),
    sauce:yup.string().oneOf(['original', 'garlic', 'bbq', 'spinach'], 'Must select a sauce!'),
    size:yup.string().oneOf(['large', 'medium', 'small'], 'Must select a size!'),
    pepperoni:yup.boolean(),
    sausage:yup.boolean(),
    olives:yup.boolean(),
    pineapple:yup.boolean(),
    gluten:yup.boolean(),
})

export default function Pizza(){
    //States Declared
    const [form, setForm] = useState({
        name: '',
        size:'',
        sauce:'',
        pepperoni:false,
        sausage:false,
        olives:false,
        pineapple:false,
        gluten:false,
        instruction:''
      })
    const [disabled, setDisabled] = useState(true)


    //On Change Events and Effect
    const change = event =>{
        const {checked, value, name, type} = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setForm({...form, [name]: valueToUse})
    }

    useEffect(() =>{
        schema.isValid(form).then(valid =>setDisabled(!valid))
    },[form])

    const submit = event =>{
        event.preventDefault()
        const newUser = {
            name: form.name.trim(),
            size: form.size,
            sauce: form.sauce,
            pepperoni: form.pepperoni,
            sausage: form.sausage,
            olives: form.olives,
            pineapple: form.pineapple,
            gluten: form.gluten,
            instruction: form.instruction,
        }
        axios.post('https:/reqres.in/api/users', newUser)
            .then(res =>{
                console.log(res.data)

            })
            .catch(err =>{
                debugger
            })
    }

    return (
        <form onSubmit={submit}>
            <div>
                <h2>Build Your Own Pizza</h2>
                <h3>Name for Order</h3>
                <p>Required.</p>
                <label>
                    <input 
                    onChange={change}
                    value={form.name}
                    type='text'
                    name='name'
                    />
                </label>
            </div>

            <div className='sizes'>
                <h3>Choice of Size</h3>
                <p>Required.</p>
                <label>
                    <select onChange={change} value={form.size}name='size'>
                        <option value='large'>Large (20 inch)</option>
                        <option value='medium'>Medium (15 inch)</option>
                        <option value='small'>Small (10 inch)</option>
                    </select>
                </label>
            </div>
            <div className='sauces'>
                <h3>Choice of Sauce</h3>
                <p>Required.</p>
                <label>
                    <input 
                        onChange={change}
                        checked={form.sauce === 'original'}
                        value='original'
                        type='radio'
                        name='sauce'
                    />
                    Original Red
                </label>
                <label>
                    <input
                        onChange={change} 
                        checked={form.sauce === 'garlic'}
                        value='garlic'
                        type='radio'
                        name='sauce'
                    />
                    Garlic Ranch
                </label>
                <label>
                    <input 
                        onChange={change}
                        checked={form.sauce === 'bbq'}
                        value='bbq'
                        name='sauce'
                        type='radio'
                    />
                    BBQ Sauce
                </label>
                <label>
                    <input 
                        onChange={change}
                        checked={form.sauce === 'spinach'}
                        value='spinach'
                        name='sauce'
                        type='radio'
                    />
                    Spinach Alfredo
                </label>
            </div>
            <div className='toppings'>
                <h3>Add Toppings</h3>
                <p>Choose up to 4.</p>

                <label>
                    <input 
                    onChange={change}
                    checked={form.toppings}
                    type='checkbox'
                    name='pepperoni'
                    />
                    Pepperoni
                </label>
                <label>
                    <input 
                    onChange={change}
                    checked={form.toppings}
                    type='checkbox'
                    name='sausage'
                    />
                    Sausage
                </label>
                <label>
                    <input 
                    onChange={change}
                    checked={form.toppings}
                    type='checkbox'
                    name='black'
                    />
                    Black Olives
                </label>
                <label>
                    <input 
                    onChange={change}
                    checked={form.toppings}
                    type='checkbox'
                    name='pineapple'
                    />
                    Pineapple
                </label>
            </div>
            <div className='substitute'>
                <h3>Choice of Substitute</h3>
                <p>Choose up to 1.</p>

                <label>
                    <input 
                    onChange={change}
                    checked={form.gluten}
                    type='checkbox'
                    name='gluten'
                    />
                    Gluten Free Crust (+ $1.00)
                </label>
            </div>
            <div className='instructions'>
                <h3>Special Instructions</h3>
                <label>
                    <input 
                    onChange={change}
                    value={form.instruction}
                    type='text'
                    name='instruction'
                    />
                </label>
            </div>
            <div className='order'>
                <h3>Complete Your Order</h3>
                <button disabled ={disabled}>Submit Order</button>
            </div>

        </form>
    )}