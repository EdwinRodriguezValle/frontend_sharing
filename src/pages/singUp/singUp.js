import React, {useState} from "react";
import "./singUp.css"
import {useForm} from "react-hook-form";

function SingUp (){

    const [formState, setFormState] = useState({
        name: "",
        lastName: "",
        birthday: "",
        gender : "",
        email: "",
        telephone: "",
        address: "",
        language: "",
        notas: "",
        subcribe: "",
    })

    const {register, handleSubmit} = useForm();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // handleFormChange wordt afgevuurd bij elke verandering en zorgt dan dat het huidige state object wordt gekopieerd
    // alleen de object key van het bijbehorende inputveld wordt overschreven met een nieuwe waarde
    function handleFormChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });

        console.log(`The value of input ${e.target.name} has just been set to ${e.target.value}`);
    }


    return(
        <>


            <form onSubmit={handleSubmit} id="formulario">
                <h3>Complete the form</h3>

                <fieldset>
                    <legend>PERSONAL INFORMATION</legend>
                    <label htmlFor="details-name">
                        Name:
                        <input
                            type="text"
                            {...register("name")}
                            id="details-name"
                            value={formState.name}
                            onChange={handleFormChange}

                        />
                    </label>

                    <label htmlFor="details-name">
                        Last Name:
                        <input
                            type="text"
                            {...register("lastName")}
                            id="details-LastName"
                            value ={formState.lastName}
                            onChange={handleFormChange}
                        />
                    </label>

                    <label htmlFor="details-age">
                        Age:
                        <input
                            type="date"
                            {...register("age")}
                            id="details-age"
                            value={formState.age}
                            onChange={handleFormChange}
                        />
                    </label>

                    <label htmlFor="details-gender">
                        Gender:
                        <select
                            type="text"
                            {...register("gender")}
                            value={formState.gender}
                            onChange={handleFormChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>

                    <label htmlFor="details-email">
                        Email:
                        <input
                            type="text"
                            {...register("email")}
                            id="details-email"
                            value={formState.email}
                            onChange={handleFormChange}
                        />
                    </label>

                    <label htmlFor="details-telephone">
                        Telephone number:
                        <input
                            type="number"
                            {...register("telephone")}
                            id="details- telephone"
                            value={formState.telephone}
                            onChange={handleFormChange}
                        />
                    </label>

                    <label htmlFor="details-address">
                        Address:
                        <input
                            type="text"
                            {...register("address")}
                            id="details-address"
                            value={formState.address}
                            onChange={handleFormChange}
                        />
                    </label>

                    <label htmlFor="details-language">
                        Language:
                        <select
                            {...register("language")}
                            value={formState.language}
                            onChange={handleFormChange}>
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                            <option value="quechua">Quechua</option>
                            <option value="aymara">Aymara</option>
                            <option value="witoto">Witoto</option>
                            <option value="ashianinka">Ashianinka</option>
                            <option value="dutch">Dutch</option>
                        </select>
                    </label>
                </fieldset>

                <fieldset>
                    <legend>ADDITIONAL INFORMATION</legend>
                    <label htmlFor="recipe-comments">
                        Notas:
                        <textarea
                            {...register("notas")}
                            id="notas"
                            rows="10"
                            cols="100"
                            placeholder="Please, write dawn additional information you want tell us?"
                            value={formState.notas}
                            onChange={handleFormChange}
                        >
                        </textarea>
                    </label>
                </fieldset>

                <fieldset >
                    <label htmlFor="recipe-newsletter" className="check" >
                        <input className="caja"
                               type="checkbox"
                               {...register("newsletter")}
                               checked={formState.newsletter}
                               onChange={handleFormChange}
                        />
                        Subscribe to our news latter
                    </label>


                </fieldset>
                <fieldset className="boton">
                    <button type="submit"  className="send">
                        Submit
                    </button>
                </fieldset>
            </form>
        </>
    );
}


export default SingUp;