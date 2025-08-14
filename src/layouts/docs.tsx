import { Component, For, Context, createRef } from '@rumious/core';
import { RouteProps, RouteComponent } from '@rumious/router';
import { ContentService } from '@services/content';
import AppContext from '../context';
import styles from '@styles/layouts/doc.module.css';


class Menu extends Component < { controller: Context < object > } > {
  private menuRef = createRef < HTMLDivElement > ();
  
  onRender() {
    let { controller } = this.props;
    let overlay = document.querySelector("#mainOverlay")!;
    controller.on("open", () =>{
      this.menuRef.addClass(styles.active)
      overlay.classList.add("active");
    });
    
    controller.on("close", () =>{
      this.menuRef.removeClass(styles.active);
      overlay.classList.remove("active");
    });
  }
  
  async template() {
    let { controller } = this.props;
    let pageIndex = AppContext.getKey('pageIndex');
    if (Object.keys(pageIndex).length == 0) pageIndex = await ContentService.getListPageByLang("vn");
    
    return (
      <div class={styles.menu} ref={this.menuRef}>
        <button class={styles.menuBtn +" material-symbols-outlined"} on:click={()=> controller.emit("close",{})} >close</button>
        <ul>
          <For
            template={
              (d: unknown)=> <li><a href={"#/documentation/"+d}>{pageIndex[d]}</a></li>
            }
            list={AppContext.reactiveKey('pageMap')}
          />
        </ul>
      </div>
    );
  }
}


export default class Layout extends Component < RouteProps > {
  static tagName = "doc-layout";
  private menuControl = new Context({});
  template() {
    let { routeSlot } = this.props;
    
    return (
      <div class={styles.layout}>
        <Menu controller={this.menuControl}/>
        <button class={styles.openMenuBtn} on:click={()=> this.menuControl.emit("open",{})}><i class="material-symbols-outlined">menu</i>Menu</button>
        <span>{routeSlot}</span>
      </div>
    );
  }
}