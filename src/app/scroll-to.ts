/**
 * Scroll a una sección por id. Se usa en lugar de los anchors nativos porque
 * con `<base href="./">` (GitHub Pages) un `href="#id"` puede resolver a otra URL
 * y recargar la página.
 */
export function scrollToSection(event: Event, id: string): void {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.replaceState(null, '', `#${id}`);
}
