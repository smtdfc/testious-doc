import {Context} from '@rumious/core';


interface AppContext{
  lang:string;
  pageMap: string[];
  pageIndex: Record<string, string>;
}

let currentLang = localStorage.getItem("lang");
if(!currentLang){
  localStorage.setItem("lang","vn");
  currentLang = "vn";
}

const appContext = new Context<AppContext>({
  lang:currentLang,
  pageMap:[],
  pageIndex:{}
});

export default appContext;