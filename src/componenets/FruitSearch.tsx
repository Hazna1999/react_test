import {useState} from "react";

function FruitSearch()
{
    const [searchterm, setSearchTerm] = useState("");
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];
    const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes(searchterm.toLowerCase()));




    function handleChange(event)
    {
        setSearchTerm(event.target.value)
    }

    return (
        <div style={{
            padding: "20px",
            textAlign: "center"
        }}>
            <h2>Fruit Search</h2>
            <input style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                outline: "none"
            }} type="text" value={searchterm} onChange={handleChange} placeholder="Enter fruit name..." />
            {filteredFruits.length > 0 ? (
                <ul style={{
                    listStyleType: "none",
                    padding: 0,
                    marginTop: "10px"}
                }>
                    {filteredFruits.map((fruit) => (
                        <li style={{
                            padding: "10px",

                            margin: "5px 0"
                        }}>
                            {fruit}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No fruits found.</p>
            )}
        </div>
    )
}

export default FruitSearch