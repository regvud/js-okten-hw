import './App.css';
import RickAndMortyComponent from "./components/RickAndMortyComponent/RickAndMortyComponent";
import SimpsonsComponent from "./components/SimpsonsComponent/SimpsonsComponent";

function App() {

    return (
        <>
            <SimpsonsComponent name={'Homer'} surname={'Simpson'} gender={'male'} age={37}
                               photo={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>

            <SimpsonsComponent name={'Bart'} surname={'Simpson'} gender={'male'} age={14}
                               photo={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>

            <SimpsonsComponent name={'Lisa'} surname={'Simpson'} gender={'female'} age={3}
                               photo={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}/>

            <SimpsonsComponent name={'Marge'} surname={'Simpson'} gender={'female'} age={35}
                               photo={'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'}/>


            <RickAndMortyComponent id={152}
                                   name={'Hammerhead Morty'}
                                   status={'unknown'}
                                   species={'Humanoid'}
                                   gender={'Male'}
                                   image={"https://rickandmortyapi.com/api/character/avatar/152.jpeg"}
            />

            <RickAndMortyComponent id={250}
                                   name={"Mrs. Sullivan"}
                                   status={"Dead"}
                                   species={"Human"}
                                   gender={"Female"}
                                   image={"https://rickandmortyapi.com/api/character/avatar/250.jpeg"}
            />

            <RickAndMortyComponent id={4}
                                   name={"Beth Smith"}
                                   status={"Alive"}
                                   species={"Human"}
                                   gender={"Female"}
                                   image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
            />

            <RickAndMortyComponent id={702}
                                   name={"Gun Brain Rick"}
                                   status={"Dead"}
                                   species={"Robot"}
                                   gender={"male"}
                                   image={"https://rickandmortyapi.com/api/character/avatar/702.jpeg"}
            />

            <RickAndMortyComponent id={271}
                                   name={"Principal Vagina"}
                                   status={"Alive"}
                                   species={"Cronenberg"}
                                   gender={"male"}
                                   image={"https://rickandmortyapi.com/api/character/avatar/271.jpeg"}
            />

            <RickAndMortyComponent id={548}
                                   name={"Truckula"}
                                   status={"Alive"}
                                   species={"Mythological Creature"}
                                   gender={"male"}
                                   image={"https://rickandmortyapi.com/api/character/avatar/548.jpeg"}
            />

        </>
    );
}

export default App;
