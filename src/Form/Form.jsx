import {useState} from "react";
import "./Form.css";

function areEqual(string1, string2) {
    return string1 === string2;
}

function Form() {
    const [formState, setFormState] = useState({});
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleChange = (event) => {
        switch (event.target.name) {
            case "name": {
                setFormState({
                    name: event.target.value,
                    age: formState.age,
                    password: formState.password,
                    passwordRepeat: formState.passwordRepeat
                })
                break;
            }
            case "age": {
                setFormState({
                    name: formState.name,
                    age: parseInt(event.target.value),
                    password: formState.password,
                    passwordRepeat: formState.passwordRepeat
                });
                break;
            }
            case "email":{
                setFormState({
                    name: formState.name,
                    age: formState.age,
                    email: event.target.value
                });
                break;
            }
            case "password": {
                setPasswordsMatch(areEqual(event.target.value, formState.passwordRepeat))

                setFormState({
                    name: formState.name,
                    age: formState.age,
                    password: event.target.value,
                    passwordRepeat: formState.passwordRepeat
                });
                break;
            }
            case "passwordRepeat": {
                setPasswordsMatch(areEqual(formState.password, event.target.value))

                setFormState({
                    name: formState.name,
                    age: formState.age,
                    password: formState.password,
                    passwordRepeat: event.target.value,
                });
                break;
            }
        }
    }


    return (
        <form className={"form-grid"}>
            <label>NAME:</label>
            <input name={"name"} type={"text"} onChange={handleChange}/>

            <label>AGE:</label>
            <input name={"age"} type={"number"} onChange={handleChange}/>

            <label>PASSWORD:</label>
            <input name={"password"} type={"password"} onChange={handleChange}/>

            <label>REPEAT PASSWORD:</label>
            <input name={"passwordRepeat"} type={"password"} onChange={handleChange}/>

            {!passwordsMatch && <i>Error: passwords do not match!</i>}
        </form>
    )
}

export default Form;
