import { Banner } from "../../../components/Banner"
import { ListLogements } from "../../../components/ListLogements"
import '../../../assets/scss/Pages/home.scss'

export const Home = () => {
    return (
        <div className="accueil-container">
            <Banner />
            <ListLogements />
        </div>
    )
}
