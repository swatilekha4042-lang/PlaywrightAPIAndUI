import fs from 'fs';
import csv from 'csv-parser'
import { resolve } from 'dns';
import { error } from 'console';

export function readCSV(filepath){
    const results =[]
    return new Promise ((resolve,reject) => {
        fs.createReadStream(filepath)
        .pipe(csv())
        .on('data',row => results.push(row))
        .on('end', ()=> {resolve(results)})
        .on('error',()=> {reject(error)})
    });
}