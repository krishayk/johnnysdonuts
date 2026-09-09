const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');

/** Prefix public files and page links for project repositories on GitHub Pages. */
export function sitePath(path: string): string {
  const [pathname, fragment] = path.split('#');
  const route = pathname.startsWith('/assets/') || pathname.endsWith('/')
    ? pathname
    : `${pathname}/`;
  return `${basePath}${route}${fragment ? `#${fragment}` : ''}`;
}
