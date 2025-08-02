import NameForm from "./NameForm";


const NameMainForm = ()=>{

    const submit = values =>{
        console.log('form values -> ', values);
    };

    return <div>
        <h1>Form</h1>
        <NameForm onSubmit={submit} />
    </div>;
}

export default  NameMainForm;