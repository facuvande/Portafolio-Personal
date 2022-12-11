import './Footer.css'

const Footer = () =>{
    return (
        <footer className="footer">
            <div className="footer_container">
                <div className="footer_top">
                    <div className="company_info">
                        <h2 className="company_logo">Facundo Vandecaveye</h2>
                        <p className="company_description">Desarrollador web</p>
                        <ul className="footer_list">
                            <li className="footer_list-item">
                                <a href="#" className="footer_list-link">
                                    <i className="ri-facebook-circle-line"></i>
                                </a>
                            </li>
                            {/* other items */}
                        </ul>
                        <span className="copyright">Todos los derechos reservados.</span>
                    </div>
                    <div>
                        <h6 className="footer_title">Facundo Vandecaveye</h6>
                        <ul className="footer_list">
                            <li className="footer_list-item">
                                <a href="https://www.linkedin.com/in/facundo-vandecaveye-b4726319b/" className="footer_list-link">Linkedin</a><br></br>
                                <a href="https://www.instagram.com/facu_vande/" className="footer_list-link">Instagram</a><br></br>
                                <a href="https://github.com/facuvande" className="footer_list-link">Github</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer