function e(e,t,o="text/csv;charset=utf-8;"){const n=new Blob([e],{type:o});if(navigator.msSaveBlob)navigator.msSaveBlob(n,t);else{const e=document.createElement("a");e.href=window.URL.createObjectURL(n),e.setAttribute("download",t),document.body.appendChild(e),e.click(),document.body.removeChild(e)}}const t=(e,t)=>{let o=null;return(...n)=>{clearTimeout(o),o=setTimeout((()=>e(...n)),t)}};export{e as a,t as d};