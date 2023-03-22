import logo from "./logo.svg";
import "./App.css";

const number = 5555;
const singer = {
    name: "Dr. Mahfuz",
    job: "Singer",
};

const singer2 = {
    name: "Eva Rahman",
    job: "Singer",
};

const singerStyle = {
    color: "purple",
    backgroundColor: "red",
};

const singers = [
  { name: 'Dr. Mahfuz', job: 'Singer'},
  { name: 'Eva Rahmza', job: 'Singer'},
  { name: 'Agun', job: 'Shopno'},
  { name: 'Shuvro', job: 'Pathor'},
]

function App() {
  const nayoks = ['Rubel', 'BappaDa', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz', 'Anwar'];
    return (
        <div className="App">
            {
              nayoks.map(nayok => <li>Name: {nayok}</li>)
            }

            {/* from array */}
            {/* {
              nayoks.map(nayok => <Person name={nayok}></Person>)
            } */}

            {/* from object */}
            {
              singers.map(singer => <Person name={singer.name} nayika={singer.job}></Person>)
            }

            {/* <Person name={nayoks[0]} nayika="Moushumi"></Person>
            <Person name={nayoks[1]} nayika="Cheka"></Person>
            <Person name={nayoks[2]} nayika="Kopila"></Person> */}
            <h5>New Component.</h5>
            <Friend movie="Singham" phone="01777"></Friend>
            <Friend phone="01999"></Friend>

        </div>
    );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person">
        <h1>{props.name}</h1>
        <p>{props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  return (
    <div className="container">
         <h3>Name: {props.movie}</h3>
         <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
