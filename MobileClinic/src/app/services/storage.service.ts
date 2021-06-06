/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {


  constructor() {
    // this.init();
  }

  // async init() {
  //   // If using, define drivers here: await this.storage.defineDriver(/*...*/);
  //   const storage = await this.storage.create();
  //   this.storage = storage;
  // }

  // Create and expose methods that users of this service can
  // call, for example:
  // async store(key: string, value: any) {
  //   const encryptedValue = btoa(escape(JSON.stringify(value)));
  //   await this.storage?.set(key, encryptedValue);
  // }
  async set(storageKey: string, value: any) {
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await Storage.set({
      key: storageKey,
      value: encryptedValue,
    });
  }
  // call, for example:
  async get(storageKey: any) {
    const ret = await Storage.get({ key: storageKey });

    if (!ret.value) {return false;}
    return JSON.parse(unescape(atob(ret.value)));
  }

  async removeStorageItem(storageKey: string) {
    await Storage.remove({ key: storageKey });
  }
  async remove(storageKey: string) {
    await Storage.remove({ key: storageKey });
  }

  // Clear storage
  async clear() {
    await Storage.clear();
  }
}
