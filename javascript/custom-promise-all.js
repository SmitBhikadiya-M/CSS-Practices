/* const promiseAll = (promises) => {
  return new Promise(async (resolve, reject)=>{
    if(promises.length <= 0) resolve([]);
    let result = [];
    try{
     for(let i=0;i<promises.length;i++){
        let r = await promises[i];
        result.push(r);
      }
    }catch(e){
      reject(e);
    }
    resolve(result)
    
  })
} */

const promiseAll = (promises) => {
    return new Promise(async (resolve, reject) => {
      if (promises.length <= 0) resolve([]);
      let result = [];
      let counter = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then((r) => {
          result.push(r);
          counter++;
          if(counter === promises.length && promises.length === i+1){
            resolve(result);
          }
        }).catch(e => {
          reject(e);
          counter--;
        });
      }
    })
  }
  
  const p1 = new Promise((resolve, reject) => {
    resolve('p1 resolve')
    //setTimeout(resolve, 1000, 'p1resolve')
  })
  //const p2 = new Promise((resolve, reject) => { setTimeout(resolve, 1000, 'p2 resolve') })
  const p2 = new Promise((resolve, reject) => {
    reject('p2 reject')
      //setTimeout(reject, 1000, 'p2resolve')
  })
  const p3 = new Promise((resolve, reject) => {
    resolve('p3 resolve')
    //setTimeout(resolve, 1000, 'p3resolve')
  })
  
  promiseAll([p1, p2, p3]).then((result) => {
    console.log("1 Resolve: ", result);
  }).catch((result) => {
    console.log("1 Reject: ", result);
  });
  
  const p4 = new Promise((resolve, reject) => {
    resolve('p4 resolve')
    //setTimeout(resolve, 1000, 'p4resolve')
  })
  const p5 = new Promise((resolve, reject) => {
    resolve('p5 resolve')
    //setTimeout(resolve, 1000, 'p5resolve')
  })
  //const p5 = new Promise((resolve, reject) => { setTimeout(reject, 1000, 'p2 reject') })
  const p6 = new Promise((resolve, reject) => {
    resolve('p6 resolve')
    //setTimeout(resolve, 1000, 'p6resolve')
  })
  
  promiseAll([p4, p5, p6]).then((result) => {
    console.log("2 Resolve: ", result);
  }).catch((result) => {
    console.log("2 Reject: ", result);
  });
  