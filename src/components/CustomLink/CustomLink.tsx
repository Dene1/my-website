import styles from './_customLink.module.scss';
import React from "react";
import {Link} from "wouter";

interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'content'> {
  href: string;
  content?: React.ReactNode;
  variant?: Variant;
  className?: string;
  to?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: { border?: string; backgroundColor?: string };
  isActive?: boolean;
}

type Variant =
  | "linksButton"
  | "linksMain"
  | "linksHeader"
  | "linksMessage"
  | "linkContacts"
  | "linkTheme";

const variantClasses: Record<Variant, string> = {
  linksButton: styles.linkButton,
  linksMain: styles.linkMain,
  linksMessage: styles.linkMain || styles.linkMail,
  linksHeader: styles.linkHeader,
  linkContacts: styles.linkContacts,
  linkTheme: styles.linkTheme
};

export const CustomLink = ({
                             content = 'link',
                             variant = 'linksMain',
                             disabled = false,
                             onClick,
                             style,
                             href,
                             to,
                             className = "",
                             isActive = false,
                             ...props
                           }: LinkProps) => {
  const variantClass = variantClasses[variant] || styles.linkMain;
  const activeClass = isActive ? styles.active : '';

  const commonProps = {
    className: `${variantClass} ${activeClass} ${className}`.trim(),
    onClick: disabled ? undefined : onClick,
    style: disabled ? {
      ...style,
      opacity: 0.5,
      pointerEvents: 'none' as React.CSSProperties['pointerEvents']
    } : style,
    ...props,
  };


  if (to) {
    return <Link to={to}>{content}</Link>
  }

  return (
    <a href={href ? `${href}` : "#"}
       {...commonProps}
    >
      {content}
    </a>
  );
}