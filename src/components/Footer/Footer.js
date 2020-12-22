import './footer.css';

const Footer = () => {
    return(
        <footer id="footer-container">
            <div className="attribute">
                <p>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
            </div>
            <p>Copyright &copy; Hanyang Bunshik. All rights reserved</p>
            <div className="store-info">
                <p>Business Hours: 24 / 7</p>
                <p><a href="tel:+19172852257">Tel#: (917) 285-2257</a></p>
                <p>Address: 150-51 Norther Blvd, Flushing NY 11354</p>
            </div>
        </footer>
    )
}

export default Footer;
