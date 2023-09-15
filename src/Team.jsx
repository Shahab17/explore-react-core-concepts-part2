import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11)

    const handleAdd=()=>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove=()=>{
        const removePlayer = team -1;
        setTeam(removePlayer);
    }

    const teamStyle={
        border: '2px solid blue',
        margin: '20px',
        padding: '20px',
        borderRadius: '12px',
         
    }

    return (
        <div style={teamStyle}>
            <h3>player: {team} </h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}