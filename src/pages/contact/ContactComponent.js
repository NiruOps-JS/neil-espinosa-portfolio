import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData, greeting } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const contactUsSection = contactPageData.contactUsSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      toast: null,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;

    if (!name || !email || !message) {
      this.setState({
        toast: { type: "error", text: "Please fill in all fields." },
      });
      setTimeout(() => this.setState({ toast: null }), 3000);
      return;
    }

    const mailTo = `mailto:${contactUsSection.email}?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(
      name
    )} (${encodeURIComponent(email)})`;
    window.open(mailTo);

    this.setState({
      name: "",
      email: "",
      message: "",
      toast: { type: "success", text: "Mail client opened — thank you!" },
    });
    setTimeout(() => this.setState({ toast: null }), 4000);
  };

  render() {
    const theme = this.props.theme;
    const { name, email, message, toast } = this.state;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          {/* ── Section 1: Contact Heading ── */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                {ContactData["profile_image_path"] ? (
                  <img
                    src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                    alt=""
                  />
                ) : null}
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    href={greeting.resumeLink}
                    newTab={true}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>

          {/* ── Section 2: Contact Us Form + BlogsImg ── */}
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1
                  className="blog-heading-text"
                  style={{ color: theme.text }}
                >
                  {contactUsSection.title}
                </h1>

                <div className="contact-us-body">
                  {/* Left column – info */}
                  <div className="contact-info-col">
                    <div className="contact-info-item">
                      <div className="contact-info-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div className="contact-info-text">
                        <h4 style={{ color: theme.text }}>Call</h4>
                        <p style={{ color: theme.secondaryText }}>
                          {contactUsSection.call}
                        </p>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="contact-info-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="M22 7l-10 7L2 7" />
                        </svg>
                      </div>
                      <div className="contact-info-text">
                        <h4 style={{ color: theme.text }}>Email</h4>
                        <p style={{ color: theme.secondaryText }}>
                          {contactUsSection.email}
                        </p>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="contact-info-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div className="contact-info-text">
                        <h4 style={{ color: theme.text }}>Location</h4>
                        <p style={{ color: theme.secondaryText }}>
                          {contactUsSection.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right column – form */}
                  <form
                    className="contact-form-col"
                    onSubmit={this.handleSubmit}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={this.handleChange}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={email}
                      onChange={this.handleChange}
                    />
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={message}
                      onChange={this.handleChange}
                    />
                    <div className="send-btn-div">
                      <a
                        className="main-button"
                        href="#contact"
                        onClick={this.handleSubmit}
                        style={{
                          color: theme.body,
                          backgroundColor: theme.text,
                          border: `solid 1px ${theme.text}`,
                        }}
                      >
                        Send Now
                      </a>
                    </div>
                    {toast && (
                      <div className={`contact-toast ${toast.type}`}>
                        {toast.text}
                      </div>
                    )}
                  </form>
                </div>
              </div>
              <div className="blog-heading-img-div">
                <BlogsImg theme={theme} />
              </div>
            </div>
          </Fade>

          {/* ── Section 3: Address ── */}
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {phoneSection["subtitle"]}
                </p>
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
