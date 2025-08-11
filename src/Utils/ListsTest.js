export default function listTest() {
    const cars = [
        { carid: 1, carName: "Alto" },
        { carid: 2, carName: "Ertiga" },
        { carid: 3, carName: "Nano" }
    ];
    return (

        <div>
            <h2>List Test</h2>
            <ul>
                {cars.map((c) => <li>Car with ID {c.carid} is a  {c.carName}</li>)}
            </ul>
        </div>
    );
}
