import { Component, createRef, watch,unwatch } from '@rumious/core';
import { RouteProps, RouteComponent } from '@rumious/router';
import { ContentService } from '@services/content';
import MarkdownIt from 'markdown-it';
import styles from '@styles/pages/doc.module.css';

const md = new MarkdownIt();

export default class Page extends Component < RouteProps > {
  static tagName = "doc-page";
  private pageRef = createRef < HTMLDivElement > ();
  
  async renderPageContent(pageName: string) {
    let content = await ContentService.getPageContent(
      "vn",
      pageName
    );
    const result = md.render(content);
    this.pageRef.html = result;
  }
  
  onParamsChange() {
    let { routeData: { params } } = this.props;
    let pageName = params.getKey("name");
    if(pageName) this.renderPageContent(pageName);
  }
  
  onRender() {
    let { routeData: { params } } = this.props;
    watch(params,this.onParamsChange.bind(this));
    this.onParamsChange();
  }
  
  onDestroy() {
    let { routeData: { params } } = this.props;
    unwatch(params,this.onParamsChange.bind(this));
  }
  
  template() {
    return (
      <div class={styles.page} ref={this.pageRef}></div>
    );
  }
}