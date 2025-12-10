import { NavLink as RouterNavLink } from "react-router-dom";
import { forwardRef } from "react";
import styles from "./NavLink.module.css";

const NavLink = forwardRef(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) => {
          let classes = styles.navLink;
          if (isActive) classes += ` ${styles.active}`;
          if (isPending) classes += ` ${styles.pending}`;
          if (className) classes += ` ${className}`;
          return classes;
        }}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };

export { NavLink };
