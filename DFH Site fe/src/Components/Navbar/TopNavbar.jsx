import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { FaBars, FaXmark, FaChevronDown } from "react-icons/fa6";
import LogoImg from "../../assets/dfh.jpeg";
import Mail from "../../assets/Mail.svg";
import Phone from "../../assets/Phone.svg";

const List = styled.li`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export default function TopNavbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);

  // const isAbout = location.pathname === "/about";
  // const isContact = location.pathname === "/contact";
  // const isCourses = location.pathname === "/courses";

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (navRef.current && !navRef.current.contains(event.target)) {
  //       setSidebarOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <Wrapper>
      <NavInner ref={navRef}>
        <LogoContainer onClick={() => navigate("/")}>
          <img src={LogoImg} alt="logo" height={50} width={50} />
          <h1>Lighthouse</h1>
        </LogoContainer>

        <BurgerButton onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
        </BurgerButton>

        <NavLinks open={sidebarOpen} >
          <NavItem className="list-unstyled" onClick={() => { navigate("/home"), setSidebarOpen(false) }} >
            <Link to="/home" onClick={() => { navigate("/home"), setSidebarOpen(false) }}>
              Home
            </Link>
          </NavItem>
          <NavItem className="list-unstyled" onClick={() => { navigate("/about"), setSidebarOpen(false) }}>
            <Link to="/about" onClick={() => { navigate("/about"), setSidebarOpen(false) }}>
              About Us
            </Link>
          </NavItem>
          <NavItem className="list-unstyled" onClick={() => { navigate("/activities"), setSidebarOpen(false) }} >
            <Link to="/activities" onClick={() => { navigate("/activities"), setSidebarOpen(false) }}>
              Activities
            </Link>
          </NavItem><NavItem className="list-unstyled" onClick={() => { navigate("/life-stories"), setSidebarOpen(false) }} >
            <Link to="/life-stories" onClick={() => { navigate("/life-stories"), setSidebarOpen(false) }}>
             Our Life Stories
            </Link>
          </NavItem>
          <NavItem className="list-unstyled" onClick={() => { navigate("/gallery"), setSidebarOpen(false) }} >
            <Link to="/gallery" onClick={() => { navigate("/gallery"), setSidebarOpen(false) }}>
              Gallery
            </Link>
          </NavItem>
          <NavItem className="list-unstyled" onClick={() => { navigate("/testimonials"), setSidebarOpen(false) }}>
            <Link to="/testimonials" onClick={() => { navigate("/testimonials"), setSidebarOpen(false) }}>
              Testimonials / Feedbacks
            </Link>
          </NavItem>  <NavItem className="list-unstyled" onClick={() => { navigate("/contact"), setSidebarOpen(false) }} >
            <Link to="/contact" onClick={() => { navigate("/contact"), setSidebarOpen(false) }}>
              Contact
            </Link>
          </NavItem>

        </NavLinks>

        <ContactInfo>
          <List>
            <img src={Mail} alt="logo" height={20} width={20} /> desperateforhimcanada@gmail.com
          </List>
          <List>
            <img src={Phone} alt="logo" height={20} width={20} /> +1 519 377 7466
          </List>
        </ContactInfo>
      </NavInner>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: white;
  padding: 15px 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  h1 {
    margin-left: 15px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 10px;
  margin-left: auto;
  margin-right: 30px;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
`;

const ContactInfo = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 14px;
  color: #333;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    color: #d24d4d;
  }
`;

const menuTraining = (navigate) => (
  <Menu>
    <Menu.Item key="1" onClick={() => navigate("/training/it-training")}>
      IT Training
    </Menu.Item>
    <Menu.Item key="2" onClick={() => navigate("/training/non-it-training")}>
      Non-IT Training
    </Menu.Item>
    <Menu.Item key="3" onClick={() => navigate("/training/tax-training")}>
      Tax Training
    </Menu.Item>
  </Menu>
);

const menuCareer = (navigate) => (
  <Menu>
    <Menu.Item key="1" onClick={() => navigate("/career/counseling")}>
      Career Counseling
    </Menu.Item>
    <Menu.Item key="2" onClick={() => navigate("/career/job-search")}>
      Job Search
    </Menu.Item>
    <Menu.Item key="3" onClick={() => navigate("/career/internships")}>
      Internships
    </Menu.Item>
  </Menu>
);

const menuEvents = (navigate) => (
  <Menu>
    <Menu.Item key="1" onClick={() => navigate("/events/webinars")}>
      Webinars
    </Menu.Item>
    <Menu.Item key="2" onClick={() => navigate("/events/workshops")}>
      Workshops
    </Menu.Item>
    <Menu.Item key="3" onClick={() => navigate("/events/hackathons")}>
      Hackathons
    </Menu.Item>
  </Menu>
);
