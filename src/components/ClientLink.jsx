'use client';
import { Link as RouterLink, useInRouterContext } from 'react-router-dom';

export default function ClientLink({
  to,
  href,
  children,
  className,
  role,
  title,
  ariaLabel,
  onClick,
  ...rest
}) {
  const inRouter = useInRouterContext();
  const targetHref = to || href;
  const isExternal =
    typeof targetHref === 'string' &&
    !(targetHref.startsWith('/') || targetHref.startsWith('#'));

  if (inRouter && to) {
    return (
      <RouterLink
        to={to}
        className={className}
        role={role}
        title={title}
        aria-label={ariaLabel}
        {...rest}
      >
        {children}
      </RouterLink>
    );
  }

  return (
    <a
      href={targetHref}
      className={className}
      role={role}
      title={title}
      aria-label={ariaLabel}
      onClick={(e) => {
        if (onClick) onClick(e);
        if (e.defaultPrevented) return;
        // Allow normal navigation for external links
        if (isExternal) return;
        // SPA navigation for internal links when outside Router context
        if (targetHref) {
          e.preventDefault();
          window.history.pushState({}, '', targetHref);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
