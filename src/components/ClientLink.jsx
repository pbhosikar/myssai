'use client';
import Link from 'next/link';

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
  const targetHref = to || href;
  const isExternal =
    typeof targetHref === 'string' &&
    !(targetHref.startsWith('/') || targetHref.startsWith('#'));

  if (isExternal) {
    return (
      <a
        href={targetHref}
        className={className}
        role={role}
        title={title}
        aria-label={ariaLabel}
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={targetHref || ''}
      className={className}
      role={role}
      title={title}
      aria-label={ariaLabel}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Link>
  );
}
