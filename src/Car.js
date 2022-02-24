function Car(props) {

    const shoot = (variables, event) => {
        alert(`Great Shoot ${variables}`);
        console.log(event);
    }

    return (
        <button onClick={(event) => shoot("Cris", event)}>Take A Shoot</button>
    )
}

export default Car;
