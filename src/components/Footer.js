import React from 'react';

function Footer () {
    return (
        <footer className="bg-dark">
            
            <div className="footer__item">
                <strong>Rafael's Stuffed Animal</strong>
                <p>9 King Street</p>
                <p>London</p>
                <p>SE86 1NZ</p>
                <p>England</p>
            </div>
            
            <div className="footer__item">
                <strong>For Employee</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis culpa dolore ea
                    eligendi, enim esse est et laboriosam, laborum magnam, numquam sunt suscipit unde voluptates. Ea
                    quia repellat tempora!</p>
                <a href="" className="btn">Go to Inventory</a>
            </div>
            
            <div className="footer__item">
                <strong>You can find us in</strong>
                <div className="footer__social-buttons">
                    <a className="btn btn-primary" style={ {backgroundColor: '#3b5998'} } href="#" role="button">
                        <i className="fab fa-facebook-f social-icon"/>
                    </a>
                    
                    <a className="btn btn-primary" style={ {backgroundColor: '#55acee'} } href="#" role="button">
                        <i className="fab fa-twitter social-icon"/>
                    </a>
                    
                    <a className="btn btn-primary" style={ {backgroundColor: '#dd4b39'} } href="#" role="button">
                        <i className="fab fa-google social-icon"/>
                    </a>
                    
                    <a className="btn btn-primary" style={ {backgroundColor: '#ac2bac'} } href="#" role="button">
                        <i className="fab fa-instagram social-icon"/>
                    </a>
                    
                    <a className="btn btn-primary" style={ {backgroundColor: '#0082ca'} } href="#" role="button">
                        <i className="fab fa-linkedin-in social-icon"/>
                    </a>
                </div>
            </div>
        
        </footer>
    );
}

export default Footer;
