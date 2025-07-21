import React, { useState } from 'react'

const Foam = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='text'>
            <h1>Registration</h1>
            <p>Welcome to Monsterlessons Academy</p>
            <div className='rohit'>
                <form>
                    <label>Name:
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                    </label>

                </form>
                <div>
                    <form>
                        <label>Email:
                            <input
                                type='text'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </label>

                    </form>
                    <div >
                        <form>
                            <label>Password:
                                <input
                                    type='text'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                            </label>

                        </form>
                    </div>
                </div>
                <div>
                    <button type="submit">Register</button>

                </div>
                <div className='click'>
                    <h5>Login</h5>
                    <h6>Forgot password</h6>

                </div>
            </div>
        </div>
    )
}

export default Foam 