import { Injectable } from '@angular/core';
// import SimpleCrypto from "simple-crypto-js"
import * as Crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  secretKey = "c4df63c68ae748b20d643e9b6de0a718";

  constructor() { }

  encrypt(json: string): string {
    return Crypto.AES.encrypt(json, this.secretKey.trim()).toString();
  }

  decrypt(obj: string): string {
    let dados = Crypto.AES.decrypt(obj, this.secretKey.trim()).toString(Crypto.enc.Utf8);
    return this.clearData(dados);
  }

  clearData(obj: string): string {
    obj = obj.replace(/[\\]/g, '');
    // obj = obj.replace('""', '');
    return obj;
  }
}
