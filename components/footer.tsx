import Link from 'next/link';
import { FunctionComponent} from 'react';
import styles from '../styles/components/footer.module.css'

const Footer: FunctionComponent = () => {
  return (
      <footer className={styles.footer}>
            <div className={styles.contact}>
                <p>2 Tintergel St</p>
                <p>Grahamstown, Eastern Cape</p>
                <a><p className={styles.link}>(206) 123 4567</p></a>
                <a><p className={styles.link}>juicykotas@gmail.com</p></a>
                <div className={styles.socials}>
                    <i className='bi bi-facebook'></i>
                    <i className='bi bi-instagram'></i>
                    <i className='bi bi-twitter'></i>
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.links_container}>
                    <h3>Products</h3>
                    <Link href={'/order'}><p>Order</p></Link>
                    <Link href={'/menu'}><p>Menu</p></Link>
                </div>
                <div className={styles.links_container}>
                    <h3>Resources</h3>
                    <Link href={'/about'}><p>About Us</p></Link>
                    <Link href={'/contact'}><p>Contact</p></Link>
                    <Link href={'/faq'}><p>Frequently Asked Questions</p></Link>
                </div>
            </div>
      </footer>
  );
};

export default Footer;
