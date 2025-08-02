import { Field, reduxForm } from "redux-form";

// const radioInput = ({input, value, label, type, name}) => {
//     console.log('radioInput -> ', input);
//     console.log('radioInput value-> ', value);
//     console.log('radioInput type-> ', type);
//     return <label>
//         <input type={type} {...input} value={value} checked={input.value === value}/>{label}
//     </label>
// }

const radioInput = ({input}) => {
    // console.log('radioInput -> ', input);
    return <>
        <label>
            <input {...input} type="radio" value="male" checked={input.value==="male"}/>Male
        </label>
        <label>
            <input {...input} type="radio" value="female" checked={input.value==="female"}/>Female
        </label>
    </>
}
let NameForm = (props) => {
    const {handleSubmit} = props;

    return<div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='fullName'>Enter your Name</label>
                <Field name='fullName' component='input' type="text"/>
            </div>
            <div>
                <label>Gender</label>
                {/* <Field name="gender" component={radioInput} type="radio" value="male" label="Male"/>
                <Field name="gender" component={radioInput} type="radio" value="female" label="Female"/> */}
                <Field name="gender" component={radioInput} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>;
}

NameForm = reduxForm({
    form: 'nameForm'
})(NameForm);

export default NameForm;