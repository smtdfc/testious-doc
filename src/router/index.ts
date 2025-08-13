import { App } from '@rumious/core';
import { RouterModule, createLoader} from '@rumious/router';

export default function(app: App):RouterModule {
  const router = app.addModule(RouterModule, {
    strategy: 'hash'
  }) as RouterModule;
  
  router.route([
    {
      path: "",
      component:createLoader(async () => (await import("@pages/home")).Page),
    },
  ]);
  
  return router ;
  
}