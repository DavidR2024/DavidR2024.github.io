const _0x242be4=_0x417c;(function(_0x1cdcdc,_0x5b789b){const _0x3dbac9=_0x417c,_0x4ea01a=_0x1cdcdc();while(!![]){try{const _0x52056a=parseInt(_0x3dbac9(0x194))/0x1*(-parseInt(_0x3dbac9(0x1af))/0x2)+parseInt(_0x3dbac9(0x1a7))/0x3+parseInt(_0x3dbac9(0x1a8))/0x4*(-parseInt(_0x3dbac9(0x1ac))/0x5)+-parseInt(_0x3dbac9(0x1a0))/0x6*(-parseInt(_0x3dbac9(0x19c))/0x7)+parseInt(_0x3dbac9(0x1ab))/0x8+parseInt(_0x3dbac9(0x1a2))/0x9*(-parseInt(_0x3dbac9(0x1ad))/0xa)+parseInt(_0x3dbac9(0x1aa))/0xb*(-parseInt(_0x3dbac9(0x1a1))/0xc);if(_0x52056a===_0x5b789b)break;else _0x4ea01a['push'](_0x4ea01a['shift']());}catch(_0x8363a7){_0x4ea01a['push'](_0x4ea01a['shift']());}}}(_0x572a,0x8a806));let size=0x3;function createTable(_0x4d99c5=![]){const _0x13f04c=_0x417c,_0x6e747e=document[_0x13f04c(0x195)](_0x13f04c(0x1a3));_0x6e747e[_0x13f04c(0x191)]='';let _0xe2375=document[_0x13f04c(0x19e)](_0x13f04c(0x1a4));_0xe2375[_0x13f04c(0x1ae)]('id',_0x13f04c(0x19d));for(let _0x3b43c7=0x0;_0x3b43c7<(_0x4d99c5?size+0x1:size);_0x3b43c7++){let _0x1a255c=document[_0x13f04c(0x19e)]('tr');for(let _0x342eaf=0x0;_0x342eaf<(_0x4d99c5?size+0x1:size);_0x342eaf++){let _0x314c90=document[_0x13f04c(0x19e)]('td');if(_0x3b43c7<size&&_0x342eaf<size)_0x314c90[_0x13f04c(0x1ae)]('id','cell-'+_0x3b43c7+'-'+_0x342eaf),_0x314c90[_0x13f04c(0x1a5)]=Math[_0x13f04c(0x198)](Math[_0x13f04c(0x192)]()*0x32+0x1);else{if(_0x3b43c7<size&&_0x342eaf===size)_0x314c90[_0x13f04c(0x1b4)][_0x13f04c(0x196)](_0x13f04c(0x1b3)),_0x314c90['setAttribute']('id','sum-row-'+_0x3b43c7),_0x314c90[_0x13f04c(0x1a5)]='0';else{if(_0x3b43c7===size&&_0x342eaf<size)_0x314c90[_0x13f04c(0x1b4)][_0x13f04c(0x196)]('sum'),_0x314c90[_0x13f04c(0x1ae)]('id',_0x13f04c(0x19b)+_0x342eaf),_0x314c90[_0x13f04c(0x1a5)]='0';else _0x3b43c7===size&&_0x342eaf===size&&(_0x314c90[_0x13f04c(0x1b4)][_0x13f04c(0x196)](_0x13f04c(0x1b3)),_0x314c90[_0x13f04c(0x1ae)]('id',_0x13f04c(0x199)),_0x314c90[_0x13f04c(0x1a5)]='0');}}_0x1a255c[_0x13f04c(0x19f)](_0x314c90);}_0xe2375['appendChild'](_0x1a255c);}_0x6e747e['appendChild'](_0xe2375);}function generateRandomSquare(){const _0x40fa15=_0x417c;createTable(!![]);for(let _0x52bfa8=0x0;_0x52bfa8<size;_0x52bfa8++){for(let _0x6db35d=0x0;_0x6db35d<size;_0x6db35d++){document[_0x40fa15(0x195)](_0x40fa15(0x1a9)+_0x52bfa8+'-'+_0x6db35d)[_0x40fa15(0x1a5)]=Math[_0x40fa15(0x198)](Math[_0x40fa15(0x192)]()*0x32+0x1);}}document[_0x40fa15(0x195)](_0x40fa15(0x1b5))[_0x40fa15(0x1a5)]=_0x40fa15(0x1b0);}function calculateSums(){const _0x4a14da=_0x417c;let _0x388192=Array(size)['fill'](0x0),_0x53a19d=Array(size)['fill'](0x0),_0x30d10e=0x0,_0x5257e7=0x0;for(let _0x518dcf=0x0;_0x518dcf<size;_0x518dcf++){for(let _0x247ab1=0x0;_0x247ab1<size;_0x247ab1++){let _0x29d66d=parseInt(document[_0x4a14da(0x195)](_0x4a14da(0x1a9)+_0x518dcf+'-'+_0x247ab1)[_0x4a14da(0x1a5)])||0x0;_0x388192[_0x518dcf]+=_0x29d66d,_0x53a19d[_0x247ab1]+=_0x29d66d;if(_0x518dcf===_0x247ab1)_0x30d10e+=_0x29d66d;if(_0x518dcf+_0x247ab1===size-0x1)_0x5257e7+=_0x29d66d;}}for(let _0x557b5a=0x0;_0x557b5a<size;_0x557b5a++){document[_0x4a14da(0x195)](_0x4a14da(0x1b1)+_0x557b5a)[_0x4a14da(0x1a5)]=_0x388192[_0x557b5a],document[_0x4a14da(0x195)](_0x4a14da(0x19b)+_0x557b5a)[_0x4a14da(0x1a5)]=_0x53a19d[_0x557b5a];}document['getElementById']('sum-diag')['textContent']='D1:'+_0x30d10e+'\x20D2:'+_0x5257e7;let _0x5adf16=[..._0x388192,..._0x53a19d,_0x30d10e,_0x5257e7],_0x5e12c0=_0x5adf16[_0x4a14da(0x1a6)](_0x284c4c=>_0x284c4c===_0x5adf16[0x0]);document[_0x4a14da(0x195)](_0x4a14da(0x1b5))[_0x4a14da(0x1a5)]=_0x5e12c0?_0x4a14da(0x193):_0x4a14da(0x1b0);}function _0x572a(){const _0x15fd7b=['getElementById','add','onload','floor','sum-diag','fill','sum-col-','1771tToKjr','magicSquare','createElement','appendChild','9726TyTuyC','9348ZfpcPr','171tsNnLq','table-container','table','textContent','every','2491317WCamND','4TPJJpK','cell-','1793zkNDMk','5984608WEICpm','2219335XjwSrf','326030LPMAQU','setAttribute','462050RhcIih','No\x20es\x20un\x20cuadrado\x20mágico','sum-row-','from','sum','classList','result','innerHTML','random','Sí\x20es\x20un\x20cuadrado\x20mágico','1xQpAHg'];_0x572a=function(){return _0x15fd7b;};return _0x572a();}function generateExampleAndCalculate(){generateRandomSquare(),calculateSums();}function _0x417c(_0x16f844,_0x538543){const _0x572a65=_0x572a();return _0x417c=function(_0x417c52,_0x2fe3fc){_0x417c52=_0x417c52-0x191;let _0x84b0db=_0x572a65[_0x417c52];return _0x84b0db;},_0x417c(_0x16f844,_0x538543);}function generateMagicSquare(){const _0x936dd=_0x417c;let _0x32889b=[];if(size===0x3)_0x32889b=[[0x8,0x1,0x6],[0x3,0x5,0x7],[0x4,0x9,0x2]];else{if(size===0x4)_0x32889b=[[0x1,0xf,0xe,0x4],[0xc,0x6,0x7,0x9],[0x8,0xa,0xb,0x5],[0xd,0x3,0x2,0x10]];else{if(size===0x2)_0x32889b=[[0x1,0x2],[0x3,0x4]];else{if(size===0x5)_0x32889b=[[0x11,0x18,0x1,0x8,0xf],[0x17,0x5,0x7,0xe,0x10],[0x4,0x6,0xd,0x14,0x16],[0xa,0xc,0x13,0x15,0x3],[0xb,0x12,0x19,0x2,0x9]];else{_0x32889b=Array[_0x936dd(0x1b2)]({'length':size},()=>Array(size)[_0x936dd(0x19a)](0x0));for(let _0x5ad0f0=0x0;_0x5ad0f0<size;_0x5ad0f0++){for(let _0x311c03=0x0;_0x311c03<size;_0x311c03++){_0x32889b[_0x5ad0f0][_0x311c03]=Math[_0x936dd(0x198)](Math['random']()*0x32+0x1);}}}}}}createTable(!![]);for(let _0x47b001=0x0;_0x47b001<size;_0x47b001++){for(let _0x43b39e=0x0;_0x43b39e<size;_0x43b39e++){document[_0x936dd(0x195)](_0x936dd(0x1a9)+_0x47b001+'-'+_0x43b39e)[_0x936dd(0x1a5)]=_0x32889b[_0x47b001][_0x43b39e];}}calculateSums();}function changeSize(_0x41206a){size=_0x41206a,generateRandomSquare();}window[_0x242be4(0x197)]=function(){createTable(!![]),generateRandomSquare();};