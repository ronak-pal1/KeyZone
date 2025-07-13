import Keyboard from "../components/Keyboard";
import WordsScreen from "../components/WordsScreen";



const Home = () => {


    return (
        <div className="flex flex-col items-center justify-end h-screen pb-10 relative">
            <WordsScreen />
            <Keyboard />
        </div>
    )
}

export default Home;