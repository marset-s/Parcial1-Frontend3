import React from "react";
import { useState } from "react";
import Card from "./Card"

const Form = () => {
	const [user, setUser] = useState({
		nombre: "",
		pais: "",
		cancion: "",
	});

	const [show, setShow] = useState(false);

	const [error, setError] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (user.nombre.length > 3 && user.pais.length > 6) {
			setShow(true);
			setError(false);
		} else {
			setShow(false);
			setError(true);
		}
	};

	return (
		<>
			<form>
				<label>Nombre completo: </label>
				<input
					type="text"
					value={user.nombre}
					onChange={(event) => setUser({ ...user, nombre: event.target.value })}
				/>
				<label>País: </label>
				<input
					type="text"
					value={user.pais}
					onChange={(event) => setUser({ ...user, pais: event.target.value })}
				/>
				<label>Canción favorita: </label>
				<input
					type="text"
					value={user.cancion}
					onChange={(event) =>
						setUser({ ...user, cancion: event.target.value })
					}
				/>
				<button onClick={handleSubmit}>Enviar</button>

				{error && (
					<h4 style={{ color: "red" }}>
						{" "}
						Por favor ingrese información válida
					</h4>
				)}
			</form>

			{show ? <Card user={user} /> : null}
		</>
	);
};

export default Form;
