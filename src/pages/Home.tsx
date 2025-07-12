import Keyboard from "../components/Keyboard";
import StatisticsSection from "../components/StatisticsSection";
import WordsScreen from "../components/WordsScreen";



const Home = () => {


    return (
        <div className="flex flex-col items-center justify-end h-screen pb-10 relative">
            <StatisticsSection />
            <WordsScreen />
            <Keyboard />
        </div>
    )
}

export default Home;