import classes from './ErrorModal.module.css';
import Button from './Button';
import Card from './Card.js';
const ErrorModal = (props) => {
return <div>
<div onClick = {props.onConfirm} className={classes.backdrop} />
<Card className={classes.modal}>
<header className={classes.header}>
    <h2>{props.title}</h2>
</header>
<div className={classes.content}>
    <p>{props.message}</p>
</div>
<footer className={classes.actions}>
<Button onClick={props.onConfirm} >Okay</Button>
</footer>
</Card>
</div>
};
export default ErrorModal;