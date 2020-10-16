import React, {useState} from "react";


export default function Pizza(){
    const [form, setForm] = useState({
        name: '',
        size:'',
        sauce:'',
        toppings:'',
        gluten:false,
        instruction:''
      })

    return (
        <form className='formContainer'>
            <div>
                <h2>Build Your Own Pizza</h2>
                <h3>Name for Order</h3>
                <p>Required.</p>
                <label>
                    <input 
                    type='text'
                    name='name'
                    />
                </label>
            </div>

            <div className='sizes'>
                <h3>Choice of Size</h3>
                <p>Required.</p>
                <label>
                    <select value={form.size}name='size'>
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
                        type='radio'
                        name='original'
                    />
                    Original Red
                </label>
                <label>
                    <input 
                        type='radio'
                        name='garlic'
                    />
                    Garlic Ranch
                </label>
                <label>
                    <input 
                        type='radio'
                        name='bbq'
                    />
                    BBQ Sauce
                </label>
                <label>
                    <input 
                        type='radio'
                        name='spinach'
                    />
                    Spinach Alfredo
                </label>
            </div>
            <div className='toppings'>
                <h3>Add Toppings</h3>
                <p>Choose up to 10.</p>

                <label>
                    <input 
                    type='checkbox'
                    name='pepperoni'
                    />
                    Pepperoni
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='sausage'
                    />
                    Sausage
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='canadian'
                    />
                    Canadian Bacon
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='spicy'
                    />
                    Spicy Italian Sausage
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='onion'
                    />
                    Onions
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='green'
                    />
                    Green Pepper
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='black'
                    />
                    Black Olives
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='three'
                    />
                    Three Cheese
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='pineapple'
                    />
                    Pineapple
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='extra'
                    />
                    Extra Cheese
                </label>
            </div>
            <div className='substitute'>
                <h3>Choice of Substitute</h3>
                <p>Choose up to 1.</p>

                <label>
                    <input 
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
                    type='text'
                    name='instructions'
                    />
                </label>
            </div>
            <div className='order'>
                <h3>Complete Your Order</h3>
                <button>Submit Order</button>
            </div>

        </form>
    )}