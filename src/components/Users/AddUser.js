import Card from '../UI/Card.js';
import classes from './AddUser.module.css';
import Button from '../UI/Button.js';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal.js';
const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error,setError] = useState ();
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
           setError({
            title: 'Invalid input',
            message:"Please, enter a valid name and age (non-empty values)."
           });
            return ;
        };
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message:"Please, enter a valid age > 0 (non-empty values)."
               });
            return;
        };
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };
    const errorHandler = () => {
        setError(null);
    };

    return <div>
    {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
     <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input onChange={usernameChangeHandler} value={enteredUsername} id='username' type='text'></input>
            <label htmlFor='age'>Age (years)</label>
            <input onChange={ageChangeHandler} value={enteredAge} id='age' type='number'></input>
            <Button type='submit'> Add User</Button>
        </form>
    </Card>
    </div>
};
export default AddUser;