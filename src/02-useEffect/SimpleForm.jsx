import { useEffect, useState } from "react";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "Goks",
        email: "goks123@gmail.com",
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    useEffect(() => {
        console.log("useEffect called!");
    }, []);

    useEffect(() => {
        console.log("useEffect changed!");
    }, [formState]);

    useEffect(() => {
        console.log("email changed!");
    }, [email]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="juan@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
        </>
    );
};
