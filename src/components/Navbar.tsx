import { Component, Fragment, createRef } from '@rumious/core';
import Logo from '@assets/logo.webp';


export default class Navbar extends Component < {} > {
  static tagName = "page-navbar";
  private menuRef = createRef < HTMLDivElement > ();
  
  openMenu() {
    this.menuRef.toggleClass("active");
  }
  
  template() {
    return (
      <Fragment>
        <nav class="navbar">
          <div class="navbar-header">
            <button on:click={()=> this.openMenu()} class="navbar-toggle-btn material-symbols-outlined">menu</button>
            <img alt="logo" class="navbar-logo" src={Logo} width="50"  height="50" fetchpriority="high"decoding="async" />          
          </div>
          <div class="navbar-menu navbar--hidden" ref={this.menuRef}>
            <button on:click={()=> this.openMenu()} class="navbar-toggle-btn material-symbols-outlined">close</button>
            <ul>
              <li><a href="#/">Home</a></li>
              <li><a href="#/documentation/introduction">Documentation</a></li>
              <li><a href="https://github.com/smtdfc/testious">Github</a></li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}