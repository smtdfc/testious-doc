import {Context} from '@rumious/core';

interface AppContext{
  lang:"vn";
  pageMap: string[];
  pageIndex: Record<string, string>;
}

const appContext = new Context<AppContext>({
  lang:"vn",
  pageMap:[],
  pageIndex:{}
});

export default appContext;