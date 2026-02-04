import React from 'react';

interface FooterLink {
  href: string;
  text: string;
  isExternal?: boolean;
  iconClass?: string;
}

interface FooterProps {
  quote: string;
  quoteSource: string;
  copyrightText: string;
  links: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({ quote, quoteSource, copyrightText, links }) => {
  return (
    <footer className="py-4 text-white text-center" style={{ backgroundColor: 'var(--dark-background)' }}>
      <div className="container">
        <p className="mb-0">&quot;{quote}&quot; <br /> <small>— {quoteSource}</small></p>
        <p className="mb-0 mt-2">
          {copyrightText} | 
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <a 
                href={link.href} 
                className="text-white text-decoration-none"
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
              >
                {link.iconClass ? <i className={link.iconClass} aria-hidden="true"></i> : link.text}
              </a>
              {index < links.length - 1 && ' | '}
            </React.Fragment>
          ))}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
