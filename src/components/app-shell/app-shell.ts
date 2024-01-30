import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Application shell component.
 *
 * Acts as a coordinator and provides the application layout.
 */
@customElement('app-shell')
export class AppShell extends LitElement {
  render() {
    return html` <slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-shell': AppShell;
  }
}
