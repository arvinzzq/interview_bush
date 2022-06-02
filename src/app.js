import aaa from './libTest.mjs'

console.log('aaa: ', aaa);

setTimeout(() => {
  let a2;
  console.log('23333', a2);
  import('./libTest.mjs').then(res => {
    a2 = 111;
    res.default();
  });
}, 100);