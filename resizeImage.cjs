#!/usr/bin/node
const assets = './src/assets';
const outputPath = assets + "/resized"
const fs = require('fs');
const { basename } = require('path');
const sharp = require('sharp')


const targetWidth = [1920, 1280, 640, 320]
const acceptedFileTypes = ["jpg","jpeg","png","bmp"]

fs.readdir(assets, (err, files) => {
  files.forEach(file => {
    const path = assets + "/" + file
    const split = file.split('.')
    const baseName = split[0]
    const extension = split[1]
    fs.stat(path, (err, stats) => {
      if(!stats.isDirectory()){
        if(acceptedFileTypes.includes(extension)){
          targetWidth.forEach(width =>{
            sharp(path)
              .resize({width: width})
              .toFile(`${outputPath}/${baseName}-${width}.jpg`)
            sharp(path)
              .resize({width: width})
              .toFile(`${outputPath}/${baseName}-${width}.webp`)
          })
      }}
    })
  });
});