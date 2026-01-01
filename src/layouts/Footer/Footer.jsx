import "./Footer.scss";
import Socials from "@/components/Socials";

const Footer = () => {
  const menuItems = [
    {
      title: "Home",
      href: "/",
      links: [
        { label: "Categories", href: "/#categories" },
        { label: "Devices", href: "/#devices" },
        { label: "Pricing", href: "/#pricing" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Movies",
      href: "/movies",
      links: [
        { label: "Gernes", href: "/#gernes" },
        { label: "Trending", href: "/#trending" },
        { label: "New Release", href: "/#release" },
        { label: "Popular", href: "/#popular" },
      ],
    },
    {
      title: "Shows",
      href: "/movies",
      links: [
        { label: "Gernes", href: "/#gernes" },
        { label: "Trending", href: "/#trending" },
        { label: "New Release", href: "/#release" },
        { label: "Popular", href: "/#popular" },
      ],
    },
    { title: "Support", href: "/support", links: [{ label: "Contact Us", href: "/#contact-us" }] },
    {
      title: "Subscription",
      href: "/subscription",
      links: [
        { label: "Plans", href: "/#plans" },
        { label: "Features", href: "/#features" },
      ],
    },
    {
      title: "Connect With Us",
      href: "#",
      socialLinks: [
        { label: "FaceBook", iconName: "facebook", href: "https://www.facebook.com/" },
        { label: "Twitter", iconName: "twitter", href: "https://x.com/" },
        { label: "LinkedIn", iconName: "linkedin", href: "https://www.linkedin.com/" },
      ],
    },
  ];
  const extraLinks = [
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ];

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItems.map(({ title, href, links, socialLinks }, index) => (
            <div className="footer__menu-column" key={index}>
              <a className="footer__menu-title h6" href={href}>
                {title}
              </a>
              {links?.length > 0 && (
                <ul className="footer__menu-list">
                  {links.map(({ label, href }, index) => (
                    <li className="footer__menu-item" key={index}>
                      <a className="footer__menu-link" href={href}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {socialLinks?.length > 0 && <Socials className="footer__socials" links={socialLinks} />}
            </div>
          ))}
        </nav>
        <div className="footer__extra">
          <p className="footer__copyright">
            @<time dateTime="2023">2023</time> streamvib, All Rights Reserved
          </p>
          <div className="footer__extra-links">
            {extraLinks.map(({ label, href }, index) => (
              <a className="footer__extra-link" href={href} key={index}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
