import React from 'react';
import { useState } from 'react';
import { BackButton, Dropdown } from './../ui';
import { useHistory } from 'react-router-dom';

const unitOptions = [
    'pounds',
    'cups',
    'tablespoons',
    'teaspoons',
    'count'
]

export const AddIngredientPage = () => {
    const [name, setName] =  useState('');
    const [amount, setAmount] = useState(0);
    const [units, setUnits] = useState(unitOptions[0]);
    const history = useHistory();

    const addToIngredients = async () => {
        const newIngredient = {
            name,
            amount,
            units,
        }

        await fetch('/ingredients', {
            method: 'post',
            body: JSON.stringify(newIngredient),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        history.push('/');
    }

    return (
        <div className="page">
            <BackButton />
            <div className="centered-container">
                <h1>Add Ingredient</h1>
                <input 
                    type="text" 
                    className="space-before space-after full-width" 
                    placeholder='Enter ingredient name here'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    type="number" 
                    className="space-before space-after full-width" 
                    min={0}
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
                <Dropdown 
                    className="space-before space-after full-width" 
                    value={units}
                    onChange={e => setUnits(e.target.value)}
                    options={unitOptions}
                />
                <button 
                    className="space-before space-after full-width"
                    onClick={addToIngredients}
                >
                    Add
                </button>
            </div>
        </div>
    )
}
