const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let voucher = [
  {
    name: 'gohebat',
    diskon: 0.07,
    lastest: '6/30/2023',
  },
  {
    name: 'webhebat',
    diskon: 0.1,
    lastest: '6/22/2023',
  },
  {
    name: 'gomantap',
    diskon: 0.1,
    lastest: '6/30/2023',
  },
];

const date = new Date().toLocaleDateString();

function getVoucher(name, price, date, priceNormal) {
  let getName = voucher.find((v) => name === v.name); //mencari nama diskon yang sesuai
  //validasi jika nama diskon ditemukan dan voucher belum exp
  if (getName && date <= getName.lastest) {
    let priceAfterDiskon = price - price * getName.diskon; //harga setelah dikurangi diskon
    console.log(priceAfterDiskon);
    //validasi  diskon tidak boleh lebih dari 50% harga normal || harga setelah diskon tidak boleh kurang dari 50% harga normal
    if (priceAfterDiskon <= 0.5 * priceNormal) {
      return priceNormal * 0.5;
    } else return pricAfterDiskon;
  } else {
    console.log('Voucher not found');
    return price;
  }
}

console.log(getVoucher('gomantap', 2000000, date));
