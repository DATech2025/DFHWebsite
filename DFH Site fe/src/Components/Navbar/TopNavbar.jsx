import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
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

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close sidebar when route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  // Close sidebar on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/activities", label: "Activities" },
    { path: "/life-stories", label: "Our Life Stories" },
    { path: "/gallery", label: "Gallery" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
  ];

  // Dropdown menus
  const trainingMenu = (
    <Menu>
      <Menu.Item key="1" onClick={() => handleNavigation("/training/it-training")}>
        IT Training
      </Menu.Item>
      <Menu.Item key="2" onClick={() => handleNavigation("/training/non-it-training")}>
        Non-IT Training
      </Menu.Item>
      <Menu.Item key="3" onClick={() => handleNavigation("/training/tax-training")}>
        Tax Training
      </Menu.Item>
    </Menu>
  );

  const careerMenu = (
    <Menu>
      <Menu.Item key="1" onClick={() => handleNavigation("/career/counseling")}>
        Career Counseling
      </Menu.Item>
      <Menu.Item key="2" onClick={() => handleNavigation("/career/job-search")}>
        Job Search
      </Menu.Item>
      <Menu.Item key="3" onClick={() => handleNavigation("/career/internships")}>
        Internships
      </Menu.Item>
    </Menu>
  );

  const eventsMenu = (
    <Menu>
      <Menu.Item key="1" onClick={() => handleNavigation("/events/webinars")}>
        Webinars
      </Menu.Item>
      <Menu.Item key="2" onClick={() => handleNavigation("/events/workshops")}>
        Workshops
      </Menu.Item>
      <Menu.Item key="3" onClick={() => handleNavigation("/events/hackathons")}>
        Hackathons
      </Menu.Item>
    </Menu>
  );

  return (
    <Wrapper>
      <NavInner ref={navRef}>
        <LogoContainer onClick={() => handleNavigation("/")}>
          <img src={LogoImg} alt="logo" height={50} width={50} />
          <h1>Lighthouse</h1>
        </LogoContainer>

        <BurgerButton 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle navigation menu"
        >
          {sidebarOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
        </BurgerButton>

        <NavLinks open={sidebarOpen}>
          {navItems.map((item) => (
            <NavItem 
              key={item.path}
              className="list-unstyled"
              active={location.pathname === item.path}
              onClick={() => handleNavigation(item.path)}
            >
              {item.label}
            </NavItem>
          ))}
        </NavLinks>

        <ContactInfo>
          <List>
            <img src={Mail} alt="email" height={20} width={20} />
            <span>desperateforhimcanada@gmail.com</span>
          </List>
          <List>
            <img src={Phone} alt="phone" height={20} width={20} />
            <span>+1 519 377 7466</span>
          </List>
        </ContactInfo>
      </NavInner>

      {/* Overlay for mobile */}
      <Overlay open={sidebarOpen} onClick={() => setSidebarOpen(false)} />
    </Wrapper>
  );
}

// ===== STYLED COMPONENTS =====

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: white;
  padding: 12px 0;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;

  img {
    border-radius: 50%;
    object-fit: cover;
  }

  h1 {
    margin-left: 12px;
    font-size: 22px;
    font-weight: 700;
    color: #1a1a2e;
    letter-spacing: -0.5px;
    
    @media (max-width: 480px) {
      font-size: 18px;
      margin-left: 8px;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 40px !important;
      width: 40px !important;
    }
  }
`;

const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  color: #1a1a2e;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 1024px) {
    display: block;
    z-index: 1001;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0 20px 0 auto;
  list-style: none;

  @media (max-width: 1024px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    flex-direction: column;
    background: white;
    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
    padding: 80px 20px 30px;
    margin: 0;
    gap: 4px;
    overflow-y: auto;
    animation: slideIn 0.3s ease;
    z-index: 1000;
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 80px 16px 30px;
  }
`;

const NavItem = styled.li`
  padding: 10px 18px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: ${({ active }) => (active ? "#d24d4d" : "#1a1a2e")};
  border-radius: 8px;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    width: ${({ active }) => (active ? "60%" : "0")};
    height: 3px;
    background: #d24d4d;
    border-radius: 2px;
    transform: translateX(-50%);
    transition: all 0.3s ease;
  }

  &:hover {
    color: #d24d4d;
    background: rgba(210, 77, 77, 0.06);

    &::after {
      width: 60%;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 12px 16px;
    white-space: normal;
    font-size: 16px;

    &::after {
      display: none;
    }

    &:hover {
      background: rgba(210, 77, 77, 0.08);
    }
  }
`;

const DropdownContainer = styled.div`
  padding: 0 8px;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 4px 0;
  }
`;

const DropdownTrigger = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: #1a1a2e;
  border-radius: 8px;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #d24d4d;
    background: rgba(210, 77, 77, 0.06);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(180deg);
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 12px 16px;
    white-space: normal;
    font-size: 16px;
    justify-content: space-between;

    &:hover {
      background: rgba(210, 77, 77, 0.08);
    }
  }
`;

const ContactInfo = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-size: 13px;
  color: #333;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-shrink: 0;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 0;
  }

  img {
    flex-shrink: 0;
  }

  span {
    white-space: nowrap;
    font-size: 13px;
    color: #555;
  }

  @media (max-width: 1200px) {
    span {
      font-size: 12px;
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

// Mobile overlay
const Overlay = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (min-width: 1025px) {
    display: none !important;
  }
`;

// Export dropdown menus for use elsewhere
export const menuTraining = (navigate) => (
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

export const menuCareer = (navigate) => (
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

export const menuEvents = (navigate) => (
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