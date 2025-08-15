import {Component,Fragment,createRef} from '@rumious/core';
import Logo from '@assets/testious.webp';


export default class Navbar extends Component<{}>{
  private menuRef = createRef<HTMLDivElement>();
  
  openMenu(){
    this.menuRef.toggleClass("active");
  }
  
  template(){
    return(
      <Fragment>
        <nav class="navbar">
          <div class="navbar-header">
            <button on:click={()=> this.openMenu()} class="navbar-toggle-btn material-symbols-outlined">menu</button>
            <img class="navbar-logo" src={Logo}/>
          </div>
          <div class="navbar-menu" ref={this.menuRef}>
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