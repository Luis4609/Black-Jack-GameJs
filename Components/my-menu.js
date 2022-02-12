import { LitElement, html } from "lit";

export class MyElement extends LitElement {
  static properties = {
    name: { type: String },
    url: { type: String },
  };

  constructor() {
    super();
    this.name = "Somebody";
    this.url = "#";
  }

  render() {
    return html`
      <li><a href=${this.url} data-text=${this.name}>${this.name}</a></li>
    `;
  }
}
customElements.define("my-menu", MyElement);
