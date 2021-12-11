import React from 'react'

export const FacebookHome = () => {
    return (
        <div style={{
            display: 'flex',
            flexFlow: 'column',
            height: '1000px',
            width: '100%',
            backgroundColor: '#F0F8FF',
            border: '10px solid',
            justifyContent: 'center'
        }}>
            <div style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '50%',
                padding: '10px',
                textAlign: 'center',
            }}>
                <h1 style={{ color: 'blue', fontFamily: 'Arial', fontSize: '56px' }}>facebook</h1>
            </div>

            <div style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '25px',
                width: '50%',
                padding: '10px',
                textAlign: 'center',
                backgroundColor: 'white'
            }}>
                <form style={{ margin: 'auto' }}>
                    <label>
                        <input type="text" placeholder="Email or phone number " name="name" style={{ borderColor: '#87CEFA', display: 'block', width: '75%', height: '35px', backgroundColor: '#f1f1f1', borderRadius: '3px', margin: 'auto', marginBottom: '10px' }} />
                    </label>
                    <label>
                        <input type="text" placeholder="Password" name="password" style={{ borderColor: '#87CEFA', display: 'block', width: '75%', height: '35px', backgroundColor: '#f1f1f1', borderRadius: '3px', margin: 'auto', marginBottom: '10px' }} />
                    </label>
                    <input type="submit" value="Log In" style={{ fontSize: '20px', color: 'white', borderColor: '#87CEFA', display: 'block', width: '75%', height: '35px', backgroundColor: 'blue', borderRadius: '3px', margin: 'auto', marginBottom: '10px' }} />
                    <a href='#'>Forgot Password</a>
                    <div style={{ marginTop: '10px', borderTop: '2px solid' }} />

                    <input type="submit" value="Create new Account" style={{ fontSize: '20px', color: 'white', borderColor: '#87CEFA', display: 'block', width: '75%', height: '35px', backgroundColor: 'green', borderRadius: '3px', margin: 'auto', marginTop: '10px' }} />

                </form>
            </div>

        </div>
    )
}
