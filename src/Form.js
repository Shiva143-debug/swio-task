import axios from "axios"
import { useState } from "react"
import { ProgressSpinner } from 'primereact/progressspinner';

const Form = () => {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")

    const [loading, setLoading] = useState(false)
    const [succesMessage, setShowSuccesMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        const values = { name, number, address }
        axios.post("https://us-central1-hashpro-academy-e69e8.cloudfunctions.net/api/forms/dmx", values)
            .then((res) => console.log(res))
        setName("")
        setNumber("")
        setAddress("")
        setLoading(false)
        setShowSuccesMessage(true)
    }


    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", justifyContent: 'space-around', alignItems: "center", backgroundColor: "whitesmoke", border: "1px solid gray", padding: "50px", borderRadius: "16px" }}>
                <div style={{ marginBottom: "10px" }}>
                    <lable>Name:</lable>
                    <input type="text" pattern="^[A-Za-z\s]+$" onChange={(e) => setName(e.target.value)} maxLength="10" required />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <lable>Phone:</lable>


                    <input
                        type="number"
                        onChange={(e) => {
                            const value = e.target.value;
                            if (!/^\d{10}$/.test(value)) {
                                e.target.setCustomValidity("Please enter exactly 10 digits.");
                            } else {
                                e.target.setCustomValidity("");
                                setNumber(value);
                            }
                        }}
                        required
                    />
                 
                </div>

                <div style={{ marginBottom: "10px" }} >
                    <lable>Address:</lable>
                    <input type="text" maxLength="20" onChange={(e) => setAddress(e.target.value)} required />
                </div>

                {!succesMessage && <button type="submit" style={{ textAlign: "center", backgroundColor: "blue", color: "white", border: "none", padding: "5px", borderRadius: "4px" }}>submit</button>}

                {loading && <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" animationDuration=".5s" />}
                {succesMessage && <button type="submit" style={{ textAlign: "center", backgroundColor: "blue", color: "white", border: "none", padding: "5px", borderRadius: "4px" }}>submitted succesfully</button>}

            </form>
        </div>
    )
}

export default Form