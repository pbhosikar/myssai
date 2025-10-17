'use client';
import { Link as RouterLink, useInRouterContext } from 'react-router-dom';

export default function ClientLink({ to, href, children, className, role, title, ariaLabel, ...rest }) {
  const inRouter = useInRouterContext();
  const targetHref = to || href;

  if (inRouter && to) {
    return (
      <RouterLink to={to} className={className} role={role} title={title} aria-label={ariaLabel} {...rest}>
        {children}
      </RouterLink>
    );
  }

  return (
    <a href={targetHref} className={className} role={role} title={title} aria-label={ariaLabel} {...rest}>
      {children}
    </a>
  );
}