import styles from './home.module.css'
import { TbLemon, TbSearch, TbDice3 } from 'react-icons/tb'
import { Link, useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()

    const handleClick = (target: string) => {
        navigate(target)
    }

    return (
        <div>
            <h1 className={styles.title}>BarKeep</h1>
            <div className={styles.menu}>
                <div
                    onClick={() => handleClick('/search')}
                    className={styles.menuButton}
                >
                    <Link to="/search"></Link>
                    <TbSearch style={{ fontSize: '8rem' }} /> Search
                </div>
                <div
                    onClick={() => handleClick('/ingredient')}
                    className={styles.menuButton}
                >
                    <TbLemon style={{ fontSize: '8rem' }} /> Ingredient
                </div>
                <div
                    onClick={() => handleClick('/random')}
                    className={styles.menuButton}
                >
                    <TbDice3 style={{ fontSize: '8rem' }} /> Random
                </div>
            </div>
        </div>
    )
}
