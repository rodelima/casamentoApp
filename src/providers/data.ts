import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import { AngularFire } from 'angularfire2';
import { Transfer } from 'ionic-native';

declare var cordova: any;

@Injectable()
export class Data {
  listaRecados:any;

  constructor(public http: Http, private af: AngularFire) {
    this.listaRecados = af.database.list('recados').map(arr=> arr.reverse()).subscribe(data=>{
      this.salvarData('recados', data);
    });
  }

  getData(key){
    var item = window.localStorage[key];
    if (item){
      return JSON.parse(item);
    }
    else return null;
  }

  getRecados(){
    return this.listaRecados
  }

  salvarData(chave, novaData){
    window.localStorage[chave] = JSON.stringify(novaData);
  }

  getFireBase(diretorio){
    return new Promise((resolve, reject) => {
      this.af.database.object(diretorio).subscribe(data=> {
        this.salvarData('data', data);
        resolve (true);
      })
    })
  }

  downloadImagens(){
    return new Promise ((resolve, reject) => {
      this.af.database.object('imagens').subscribe(imagens => {
        Promise.all(imagens.map(imagem => {
          return this.download(imagem.url, imagem.fileName)
        })).then(()=>{
          resolve (true);
        })
      })
    })
  }

  download(url, fileName) {
    return new Promise ((resolve, reject) => {
      const fileTransfer = new Transfer();
      fileTransfer.download(url, cordova.file.dataDirectory + fileName).then(()=>{
        resolve (true);
      });
    })
  }

  getCordovaDirectory(url){
    try{
      return cordova.file.dataDirectory +  url;
    }
    catch(err){}
  }

  enviarRecado(novoNome, novoRecado, timestamp){
    return new Promise((resolve, reject) => {
      let recado = this.af.database.list('recados');
      let newPush = recado.push({nome: novoNome, recado: novoRecado, timestamp: timestamp });
      let key = newPush.key;
      newPush.then(()=> {
        let recado = this.af.database.object('recados/'+key);
        let time;
        recado.forEach(objetoRecado => {
          time = objetoRecado.timestamp;
        })
          let data = new Date(time);
          let diaMesAno = data.getDate() + ' de ' + this.getMes(data.getMonth()) + ' de ' + data.getFullYear();
          let horasMinutos = data.getHours() + ':' + ((data.getMinutes() < 10)? "0"+data.getMinutes():data.getMinutes()) ;
          recado.update({data: diaMesAno, horario: horasMinutos}).then(()=>{
            resolve(true);
          })
      })
    })
  }

  getMes(mes){
    if(mes == 0){
      return "jan";
    } else if (mes == 1){
      return "fev"
    } else if (mes == 2){
      return "mar"
    } else if (mes == 3){
      return "abr"
    } else if (mes == 4){
      return "mai"
    } else if (mes == 5){
      return "jun"
    } else if (mes == 6){
      return "jul"
    } else if (mes == 7){
      return "ago"
    } else if (mes == 8){
      return "set"
    } else if (mes == 9){
      return "out"
    } else if (mes == 10){
      return "nov"
    } else if (mes == 11){
      return "dez"
    }
  }
}
