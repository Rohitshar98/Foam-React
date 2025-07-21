import React from 'react'

const Card = (props) => {

    return (
        <div>
            <div style={{
                marginRight: "20px", backgroundColor: "white", display: "inline-block", padding: "6px", textAlign: "center",
                borderRadius: "10px", marginBottom: "40px"
            }}>
                <img style={{ marginLeft: "10px", height: "200px", width: "200px", borderRadius: "50px", marginBottom: "20px" }}
                    src={props.image} alt="" />

                <h1 style={{ fontsize: "35px", fontweight: "400", marginBottom: "10px", textTransform: "capitalize", }}>{props.username}</h1>
                <h4 style={{ color: "blue",fontSize:"60px" }}>{props.profession}</h4>

                <h2>{props.city}, {props.age}</h2>

                <button style={{
                    marginTop: "20px", backgroundColor: "blue", color: "white",
                    paddinbg: "10px 20px", borderRadius: "20px", fontSize: "20px"
                }}>Add Friend</button>

            </div>
        </div>
    )
}

export default Card