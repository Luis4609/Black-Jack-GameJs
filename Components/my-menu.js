import { LitElement, html } from "lit";

export class MyElement extends LitElement {
  static get styles() {
    return css`
    @import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      overflow: hidden;
    }
    h1 {
      color: #000;
      font-size: 62px;
      font-weight: 800;
      line-height: 72px;
      margin-top: 2em;
      text-align: center;
      text-transform: uppercase;
    }
    ul {
      position: relative;
    }
    ul li {
      list-style: none;
      text-align: center;
    }
    ul li a {
      color: #333;
      text-decoration: none;
      font-size: 3em;
      padding: 5px 20px;
      display: inline-flex;
      font-weight: 700;
      transition: 0.5s;
    }
    ul:hover li a {
      color: #0002;
    }
    ul li:hover a {
      color: #000;
      background: rgba(255, 255, 255, 1);
    }
    ul li a:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 40%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 5em;
      color: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      z-index: -1;
      opacity: 0;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 500px;
      transition: letter-spacing 0.5s, left 0.5s;
    }
    ul li a:hover:before {
      content: attr(data-text);
      opacity: 1;
      left: 50%;
      letter-spacing: 10px;
      width: 1800px;
      height: 1800px;
    }
    ul li:nth-child(6n + 1) a:before {
      background: #81ecec;
    }
    ul li:nth-child(6n + 2) a:before {
      background: #ff7675;
    }
    ul li:nth-child(6n + 3) a:before {
      background: #55efc4;
    }
    ul li:nth-child(6n + 4) a:before {
      background: #a29bfe;
    }
    ul li:nth-child(6n + 5) a:before {
      background: #fd79a8;
    }
    ul li:nth-child(6n + 6) a:before {
      background: #ffeaa7;
    }
    
    `;
  }
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
