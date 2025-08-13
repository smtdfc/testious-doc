import {createContext} from '@rumious/core';

interface AppContext{
  lang:"vi"
}

const appContext = createContext<AppContext>({
  lang:"vi"
});

export default appContext;