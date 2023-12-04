import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setChinese, setEnglish} from '../redux/actions/utilityAction';
import {useTranslation} from "react-i18next";
import i18n from '../text/i18n';

//false = chinese, true = eng
const Navbarr = (props) => {
    const {t} = useTranslation();
    const [isclicked, setIsclicked] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        // console.log(location.pathname);
        if (!isclicked) {
            setIsclicked(true);

            // navigate("../FAQ_en", { replace: true });
        } else if (isclicked) {
            setIsclicked(false);
            // navigate("../FAQ", { replace: true });
        }
        if (i18n.language == 'en') {
            i18n.changeLanguage('zh');
            if (location.pathname == "/FAQ" || location.pathname == "/FAQ_en") {
                navigate("../FAQ", {replace: true});
            }
        } else {
            i18n.changeLanguage('en');
            if (location.pathname == "/FAQ_en" || location.pathname == "/FAQ") {
                navigate("../FAQ_en", {replace: true});
            }
        }


    }
    const location = useLocation();
    //flex-grow-1 justify-content-evenly
    return (
        <div>
            {/* bg="light" */}
            <Navbar sticky='top' expand="xl">
                <Container>
                    {/*<Navbar.Toggle className='m-auto' aria-controls="basic-navbar-nav"/>*/}
                    {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                    {/*    <Nav className='m-auto '>*/}

                            <Nav.Link as={NavLink} to='/' style={{
                                fontSize: "20px",
                                marginLeft: '50px',
                                letterSpacing: "2px"
                            }}>{t('navbar.item1')}</Nav.Link>
                            <NavDropdown style={{fontSize: "20px", marginLeft: '50px', letterSpacing: "2px"}}
                                         title={t("navbar.item2.item2")}>


                                <NavDropdown.Item as={NavLink} to='/FlatMarkers' style={{
                                    fontSize: "20px",
                                    letterSpacing: "0px"
                                }}>{t("navbar.item2.subitem1")}</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to='/SlantMarkers' style={{
                                    fontSize: "20px",
                                    letterSpacing: "0px"
                                }}>{t("navbar.item2.subitem2")} </NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to='/SingleMonument' style={{
                                    fontSize: "20px",
                                    letterSpacing: "0px"
                                }}>{t("navbar.item2.subitem3")}</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to='/DoubleMonument' style={{
                                    fontSize: "20px",
                                    letterSpacing: "0px"
                                }}>{t("navbar.item2.subitem4")}</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to='/FamilyMonument' style={{
                                    fontSize: "20px",
                                    letterSpacing: "0px"
                                }}>{t("navbar.item2.subitem5")}</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to='/MemorialArches' style={{
                                    fontSize: "20px",
                                    letterSpacing: "0px"
                                }}>{t("navbar.item2.subitem6")}</NavDropdown.Item>

                            </NavDropdown>

                            <NavDropdown style={{fontSize: "20px", marginLeft: '50px', letterSpacing: "2px"}}
                                         title={t("navbar.item3.item3")}>

                                <div>

                                    <NavDropdown.Item as={NavLink} to='/FlatMarkers_en' style={{
                                        fontSize: "20px",
                                        letterSpacing: "0px"
                                    }}>{t("navbar.item3.subitem1")}</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to='/SlantMarkers_en' style={{
                                        fontSize: "20px",
                                        letterSpacing: "0px"
                                    }}>{t("navbar.item3.subitem2")} </NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to='/SingleMonument_en' style={{
                                        fontSize: "20px",
                                        letterSpacing: "0px"
                                    }}>{t("navbar.item3.subitem3")}</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to='/DoubleMonument_en' style={{
                                        fontSize: "20px",
                                        letterSpacing: "0px"
                                    }}>{t("navbar.item3.subitem4")}</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to='/ShapedMonument' style={{
                                        fontSize: "20px",
                                        letterSpacing: "0px"
                                    }}>{t("navbar.item3.subitem5")}</NavDropdown.Item>

                                </div>


                            </NavDropdown>
                            {/*吉盅*/}

                            {/*<NavDropdown style={{fontSize: "25px", marginLeft: '50px', letterSpacing: "2px"}}*/}
                            {/*             title={t("navbar.item4.item4")}>*/}


                            {/*    <div>*/}


                            {/*        <NavDropdown.Item href="#action/3.2" style={{*/}
                            {/*            fontSize: "20px",*/}
                            {/*            letterSpacing: "0px"*/}
                            {/*        }}>{t("navbar.item4.subitem1")}</NavDropdown.Item>*/}
                            {/*        <NavDropdown.Item href="#action/3.3" style={{*/}
                            {/*            fontSize: "20px",*/}
                            {/*            letterSpacing: "0px"*/}
                            {/*        }}>{t("navbar.item4.subitem2")}</NavDropdown.Item>*/}


                            {/*    </div>*/}

                            {/*</NavDropdown>*/}
                            <Nav.Link href="#home" style={{fontSize: "20px", marginLeft: '50px', letterSpacing: "2px"}}
                                      as={NavLink} to='/Urn'>{t("navbar.item4")} </Nav.Link>

                            {/*公司簡介*/}
                            <NavDropdown style={{fontSize: "20px", marginLeft: '50px', letterSpacing: "2px"}}
                                         title={t("navbar.item5.item5")}>


                                <div>

                                    <NavDropdown.Item href="#action/3.1"
                                                      style={{fontSize: "20px", letterSpacing: "0px"}} as={NavLink}
                                                      to='/About_us'>{t("navbar.item5.subitem1")}</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1"
                                                      style={{fontSize: "20px", letterSpacing: "0px"}} as={NavLink}
                                                      to='/ProductAndService'>{t("navbar.item5.subitem2")}</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2"
                                                      style={{fontSize: "20px", letterSpacing: "0px"}} as={NavLink}
                                                      to='/HowToOrder'>{t("navbar.item5.subitem3")}</NavDropdown.Item>
                                    {/* <NavDropdown.Item href="#action/3.3" style={{fontSize:"20px"}} as={NavLink} to= '/FAQ'>{t("navbar.item5.subitem4")}</NavDropdown.Item> */}
                                    {/* <NavDropdown.Item href="#action/3.3" style={{fontSize:"20px"}} as={NavLink} to= '/FAQ' state={{ isclicked }}>{t("navbar.item5.subitem4")}</NavDropdown.Item> */}
                                    {

                                        i18n.language == "en" ? <NavDropdown.Item href="#action/3.3" style={{
                                                fontSize: "20px",
                                                letterSpacing: "0px"
                                            }} as={NavLink} to='/FAQ_en'>{t("navbar.item5.subitem4")}</NavDropdown.Item>
                                            : <NavDropdown.Item href="#action/3.3"
                                                                style={{fontSize: "20px", letterSpacing: "0px"}}
                                                                as={NavLink}
                                                                to='/FAQ'>{t("navbar.item5.subitem4")}</NavDropdown.Item>
                                    }


                                    <NavDropdown.Item href="#action/3.3"
                                                      style={{fontSize: "20px", letterSpacing: "2px"}} as={NavLink}
                                                      to='/Privacy'>{t("navbar.item5.subitem5")}</NavDropdown.Item>

                                </div>

                            </NavDropdown>


                            <Nav.Link href="#home" style={{fontSize: "20px", marginLeft: '50px', letterSpacing: "2px"}}
                                      as={NavLink} to='/ContactUs'>{t("navbar.item6")} </Nav.Link>


                            <Nav.Link onClick={() => handleClick(location)} style={{
                                fontSize: "20px",
                                marginLeft: '50px',
                                letterSpacing: "2px"
                            }}>{t("navbar.item7")} </Nav.Link>


                        {/*</Nav>*/}
                    {/*</Navbar.Collapse>*/}
                </Container>
            </Navbar>
        </div>
    );
}


Navbarr.propTypes = {
    setEnglish: PropTypes.func.isRequired,
    setChinese: PropTypes.func.isRequired,
    isEnglish: PropTypes.bool,
    isChinese: PropTypes.bool,
}

const mapStateToProps = state => ({
    isEnglish: state.utility.isEnglish,
    isChinese: state.utility.isChinese,
});


export default connect(mapStateToProps, {setEnglish, setChinese})(Navbarr); //,login
