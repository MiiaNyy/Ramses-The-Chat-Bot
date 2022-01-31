import React from 'react';
import footerLogo from "../assets/favicon-32x32.png";

function Footer () {
    return (
        <footer className="bg-dark">
            <div style={{gap: "1em"}} className={`d-flex justify-content-center align-items-center`}>
                <img width={30} height={30} src={footerLogo} alt="logo"/>
                <p className="footer__title">RSA - Rafael's Stuffed Animals</p>
            </div>
            
            <div className="footer__flex">
                
                <div className="footer__item">
                    <p className="footer__item-title"><strong>For Employee</strong></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis culpa dolore ea
                        eligendi, enim esse est et laboriosam, laborum magnam, numquam sunt suscipit unde voluptates. Ea
                        quia repellat tempora!</p>
                    <a href="https://rafaels-inventory.herokuapp.com/" className="btn footer__btn">Go to Inventory</a>
                </div>
                
                <div className="footer__item">
                    <p className="footer__item-title"><strong>Where to find us</strong></p>
                    <div className="footer__item-address">
                        <p>9 King Street</p>
                        <p>London</p>
                        <p>SE86 1NZ</p>
                        <p>England</p>
                        <p><strong>email:</strong> lorem@rsa.com </p>
                        <p><strong>phone:</strong> (123) 123 123</p>
                    </div>
                </div>
                
                <div className="footer__social-buttons">
                    <a className="btn btn-primary" style={ {backgroundColor: '#3b5998'} } href="https://www.facebook.com/miia.nyyssonen.3" role="button">
                        <i className="fab fa-facebook-f social-icon"/>
                    </a>
                    
                    <a className="btn btn-primary" style={ {backgroundColor: '#55acee'} } href="https://twitter.com/BuffyTVS" role="button">
                        <i className="fab fa-twitter social-icon"/>
                    </a>
                    
                    <a className="btn btn-primary" style={ {backgroundColor: '#dd4b39'} } href="https://www.google.com/search?q=buffy+the+vampire+slayer&sxsrf=AOaemvIMy7LUXzQDZgyeEHH5YKvUy3s5mA%3A1640166663524&ei=B_XCYderH7CIxc8PzIquqAI&ved=0ahUKEwiXy-f6kPf0AhUwRPEDHUyFCyUQ4dUDCA4&uact=5&oq=buffy+the+vampire+slayer&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQguEMsBMgUILhDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywE6BAgAEEdKBAhBGABKBAhGGABQ0gFYigdg9gloAHADeACAAdADiAGYC5IBCTAuMS4yLjEuMZgBAKABAcgBCMABAQ&sclient=gws-wiz" role="button">
                        <i className="fab fa-google social-icon"/>
                    </a>
                    
                    <a className="btn btn-primary" style={ {backgroundColor: '#ac2bac'} } href="https://www.instagram.com/miiemilia/" role="button">
                        <i className="fab fa-instagram social-icon"/>
                    </a>
                    
                    <a className="btn btn-primary" style={ {backgroundColor: '#0082ca'} } href="https://www.linkedin.com/in/miia-nyyss%C3%B6nen-66a0881b8/" role="button">
                        <i className="fab fa-linkedin-in social-icon"/>
                    </a>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;
