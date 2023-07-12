import React from 'react';
import '../styles/footer.scss';

const Footer = () => {
    return (
        <div className="footers">
            <div className="mainFooter py-5 container">
                <div className="row">
                    <div className="col-4">
                        <h1 className='h1DarzBor'>Darz Bór</h1> 
                    </div>
                    <div className="col-4">
                        <h1>Nawigacja</h1>
                        <ul>
                            <li>Strona Główna</li>
                            <li>Historia</li>
                            <li>Prawo</li>
                            <li>Kontakt</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h1>Kontakt</h1>
                        <p>Koło Łowieckie "Darz Bór"</p>
                        <p>ul. Jakaś</p>
                        <p>38-500 Sanok</p>
                        <p>email: </p>
                    </div>
                </div>
            
            </div>
            <div className='postFooter'>
                <p>© 2023 Koło Łowieckie Darz Bór. Realizacja - <a href="https://github.com/bqoe">bqoe</a></p>
            </div>
        </div>
    )
}

export default Footer;