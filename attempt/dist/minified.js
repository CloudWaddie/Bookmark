async function a(A,_,c,d){await new Promise(B=>A.root.getFile(_,{},C=>C.remove(B),B));return await new Promise(_a=>A.root.getFile(_,{create:!0},D=>D.createWriter(_A=>{_A.write(new Blob([d], {type:c}));_a(D.toURL())})))}async function b(e){prompt('Your finished persistence URL:',await a(e,'page.html','text/html',`<h1>It Works!</h1>
`))}webkitRequestFileSystem(window.TEMPORARY,1024*1024,b);
