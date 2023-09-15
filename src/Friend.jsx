 
export default function Friend({userInfo}){

    const {name, email} = userInfo;

    return (
        <div className="box1">
            <h3>Name: {name} </h3>
            <p>Email: {email} </p>
        </div>
    )
}