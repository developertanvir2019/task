import Link from 'next/link';
import styles from '../styles/navbar.module.scss'
const Navbar = () => {
    return (
        <nav className={styles['navbar']}>
            <div> <a href="#" className="logo">Logo</a></div>
            <ul className="nav-items">
                <li><Link href="/" className="nav-link">Home</Link></li>
                <li><Link href="/login" className="nav-link">Login</Link></li>
                <li><Link href="/signup" className="nav-link">SignUp</Link></li>
            </ul>
        </nav>

    );
};

export default Navbar;