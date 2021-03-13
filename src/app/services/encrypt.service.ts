import { Injectable } from '@angular/core';
import SimpleCrypto from "simple-crypto-js"

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  secretKey = "c4df63c68ae748b20d643e9b6de0a718";
  simpleCrypto = new SimpleCrypto(this.secretKey);

  constructor() { }

  encrypt(json: string): string {
    const cipher = this.simpleCrypto.encrypt(json);
    return cipher;
  }

  decrypt(obj: string): string {
    const decipher = this.simpleCrypto.decrypt(obj);
    return decipher.toString();
  }
}
