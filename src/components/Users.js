import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';

export const Users = () => {
    const [userData, setUserData] = useState([]);

    const fetchUserData = async () => {
        try {
            const userData = await fetch('http://localhost:3001/users');
            setUserData(await userData.json());
        }
        catch (e) {
            console.log(e.message);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const formatTable = userData => {
        if (!userData.length) return;

        const keyTracker = userData.reduce((keyTracker, user) => {
            Object.keys(user).forEach(key => keyTracker[key] = '');
            return keyTracker;
        }, {});
        const cols = Object.keys(keyTracker);
        const thTags = cols.map((col, idx) => (<th key={idx}>{col}</th>));
        const tHeader = (<thead>
            <tr>
                {thTags}
            </tr>
        </thead>);

        const tBody = (<tbody>
            {userData.map(user =>
            (<tr>{Object.keys(user).map((key, idx) =>
                (<td key={idx}>{user[key]}</td>)
            )}</tr>)
            )}
        </tbody>);
        return (<Table striped bordered hover>
            {tHeader}
            {tBody}
        </Table>)
    }

    return (
        <>
            {(<div>

                {formatTable(userData)}

            </div>)}
        </>

    )
};