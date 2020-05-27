let imgArr = ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxwqqD9g1kBdN0laBPiPL4FWQdMIrZyBB__JhuBGwu_OxiOM8T&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI9M-LkV9J_fpfE-oLJbZI-gmqwmZ-yJWW-nzAQvIQyb7Jp6jO&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRR_y47N6hz4P_tGNhesmMdrpaEpEim11yTNJsda-s_lxfKLLS&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHPuZ0y-jN7YgJuURiSkkwIuP2Uk8ClwkGOMkWA7TILuFbgFA7&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx9F4Hzy7iB6i8fiGXGaekvcLgHsxonwglu-umez6jT2FnyWRe&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiNOkBZuBivsOJ3-g47QECiDHr_b2P8w6WO2kEz09rkwZ4OOEX&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6plFhTb1Lo-WQLMOF0vy4oEoz0-L-UNAGdxEr891nXRtZgHUc&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQA-v5PCARCVtOeJ90FSykimtqK3gSbBfNt_GPakJZez66zpmQm&usqp=CAU'];



 imgArr.forEach(element => {
     document.querySelector('.img-galery').innerHTML += `<img src= ${element}/>`
 });


let currentPos = 0;
setImg = () => {
  if (++currentPos >= imgArr.length) currentPos = 0;
  p = imgArr[currentPos];
  document.querySelector(".img-galery").innerHTML = `<img src="${p}"/>`;
};
setInterval(setImg, 500);

