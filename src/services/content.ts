import ky from 'ky';
import appContext from '../context';
import { watch } from '@rumious/core';


export class ContentService {
  static async getPageMap(): Promise < string[] > {
    try {
      const data = await ky.get('/docs/list.json').json() as any;
      appContext.setKey('pageMap', data.list as string[]);
      return data.list;
    } catch (err) {
      throw err;
    }
  }
  
  static async getPageContent(lang: string, name: string): Promise < string > {
    try {
      const data = await ky.get(`/docs/${lang}/${name}.md`).text();
      return data;
    } catch (err) {
      throw err;
    }
  }
  
  static async getListPageByLang(lang: string): Promise < Record < string, string >> {
    try {
      const data = await ky.get(`/docs/${lang}/dec.json`).json() as any;
      appContext.setKey('pageIndex', data);
      return data;
    } catch (err) {
      throw err;
    }
  }
}

const lang = appContext.reactiveKey('lang');
ContentService.getPageMap();