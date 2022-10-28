import FormCreateGame from "components/FormCreateGame";
import NavCrudGames from "components/NavCrudGames";


const Games = () => {
    return (
        <>
        <header>
            <NavCrudGames />
        </header>
        <main>
           <FormCreateGame /> 
        </main>
        </>
    );
}
export default Games;