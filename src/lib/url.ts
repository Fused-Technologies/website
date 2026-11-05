/** Clean public path for a page: no ".html" and no trailing slash ("/about-us"). */
export function cleanPath(pathname: string): string {
  const p = pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/+$/, '');
  return p || '/';
}
