import { Component } from '@rumious/core';
import {RouteProps,RouteComponent} from '@rumious/router';
import Logo from '@assets/testious.png';
import Prism from "prismjs";
import styles from '@styles/pages/home.module.css';
import "prismjs/themes/prism.css";

export default class Page extends Component<RouteProps>{
  static tagName ="hello-page";
  
  onRender(){
    Prism.highlightAll();
  }
  
  template() {
    return (
      <div class={styles.page}>
        <section class={styles.topSection}>
          <img src={Logo}/>
          <p class="p-2" style="max-width:80%" > Simple testing framework designed to help developers write, organize, and run tests effortlessly with a clean and expressive API. </p>
          <div class={styles.btnGroup}>
            <button style="width:200px" class={styles.cab}>Getting started </button>
          </div>
        </section>
        <section class={styles.featureSection}>
          <h2>Features</h2>
          <div class={styles.featureCardGroup}>
            <div class={styles.featureCard}>
              <i class="material-symbols-outlined">speed</i>
              <span>
                <h3>Lightweight & Fast</h3>
                <p>Minimal dependencies, optimized for performance</p>
              </span>
            </div>
            <div class={styles.featureCard}>
              <i class="material-symbols-outlined">sync</i>
              <span>
                <h3>Asynchronous Support</h3>
                <p>Write async tests with ease using promises or async/await</p>
              </span>
            </div>
            <div class={styles.featureCard}>
              <i class="material-symbols-outlined">electric_bolt</i>
              <span>
                <h3>Flexible Test Structure</h3>
                <p>Minimal dependencies, optimized for performance</p>
              </span>
            </div>
            <div class={styles.featureCard}>
              <i class="material-symbols-outlined">checklist</i>
              <span>
                <h3>Rich Assertions</h3>
                <p>Minimal dependencies, optimized for performance</p>
              </span>
            </div>
            <div class={styles.featureCard}>
              <i class="material-symbols-outlined">rocket_launch</i>
              <span>
                <h3>Extensible</h3>
                <p>Easily extend or customize to fit your project needs</p>
              </span>
            </div>
            <div class={styles.featureCard}>
              <i class="material-symbols-outlined">analytics</i>
              <span>
                <h3>Detailed Reporting</h3>
                <p>Clear test results with pass/fail status and error messages</p>
              </span>
            </div>
          </div>
        </section>
        <section class={styles.quickStartSection}>
          <h2>Quick Start</h2>
    
          <h3 >Init test</h3>
          <pre class={styles.code}><code class="language-bash">{`mkdir test && cd test \ntestious init`}</code></pre>
    
          <h3>Create test entrypoint</h3>
          <p>
            Create a <code>node/index.js</code> file and add it to the{" "}
            <code>testious.config.json</code> file
          </p>
          <pre class={styles.code}><code class="language-json">{`{"nodeTestEntry": "node/index.js"}`}</code></pre>
    
          <h3>Create test group</h3>
          <p>Use this command:</p>
          <pre class={styles.code}><code class="language-bash">{`testious create file node/hello`}</code></pre>
    
          <p>Then edit <code>node/hello.test.js</code> like this:</p>
          <pre class={styles.code}><code class="language-js">{`import { describe, expect } from 'testious';

describe('Array utilities', (g) => {
  g.it('should correctly find the length of an array', () => {
    const arr = [1, 2, 3];
    expect(arr.length).toBe(3);
  });
    
  g.it('should support async operations', async () => {
    const fetchData = () => Promise.resolve('data');
    const data = await fetchData();
    expect(data).toBe('data');
  });
});`}</code></pre>
    
          <p>Import into entry point file:</p>
          <pre class={styles.code}><code class="language-js">{`import "./hello.test.js";`}</code></pre>
    
          <h3>Run tests</h3>
          <pre class={styles.code}><code class="language-bash">{`testious run --bundle`}</code></pre>
        </section>
        <section class={styles.contributeSection}>
          <h2>Contributing</h2>
          <p>Contributions are warmly welcome! Feel free to open issues or submit pull requests at: <a href="https://github.com/smtdfc/testious">Testious Repository</a>
          Please follow the Contributor Covenant Code of Conduct to keep the community positive and respectful.
          </p>
        </section>
      </div>
    );
  }
}