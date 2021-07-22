import React, { useState } from 'react';

export default function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('http://localhost:8000/authenticate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('ihu', data);
			})
	};

	return (
		<form action="/authenticate" method="POST" onSubmit={handleSubmit}>
			<fieldset>
				<label htmlFor="email">E-mail</label>
				<input onChange={(e) => setEmail(e.target.value)} id="email" value={email} type="text" inputMode="email" autoComplete="username" />
			</fieldset>
	
			<fieldset>
				<label htmlFor="password">Senha</label>
				<input onChange={(e) => setPassword(e.target.value)} id="password" value={password} type="password" inputMode="email" autoComplete="current-password" />
			</fieldset>
			<button type="submit">Enviar</button>
		</form>
	);
}
