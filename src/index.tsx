import {
  Fragment,
  createApp,
} from '@rumious/core';
import initRouter from './router';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import "./styles/index.css";


const app = createApp({
  root: document.getElementById("app")
});

const router = initRouter(app);
app.setRootLayout(
  <Fragment>
    <Navbar/>
    <div class="container">
      {router.rootSlot}
    </div>
    <Footer/>
  </Fragment>
);

app.start();