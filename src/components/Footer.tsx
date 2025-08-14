import { Component } from '@rumious/core';


export default class Footer extends Component<{}> {
  template() {
    return (
      <footer class="footer">
        <div class="footer-container">
          <p>Testious v1.0.0 — by <strong>smtdfc team</strong>. <br/>Made with ❤️ and zero sleep</p>
          <br/>
          <p>
            <a href="https://github.com/your-repo/testious" target="_blank">GitHub</a> |
            <a href="/docs">Docs</a> |
          </p>
        </div>
      </footer>
    );
  }
}