let filtroGenerofield = document.getElementById('Generosel');
let filtroLugarfield = document.getElementById('Lugarsel');
const botonFiltros = document.getElementById('botonfiltro');

    
function filtroGenero(Eventomain){ return Eventomain.genero == filtroGenerofield.value;}
  
      
function filtroLugar(Eventomain){ return Eventomain.lugar == filtroLugarfield.value;}  

              
function filtroGL(){ 
        let filtrados = '';
        if (filtroGenerofield.value !=='' && filtroLugarfield.value ==''){
                filtrados = Eventosmain.filter(filtroGenero);}

        else if (filtroGenerofield.value =='' && filtroLugarfield.value !==''){   
               filtrados = Eventosmain.filter(filtroLugar);}

        else if (filtroGenerofield.value !=='' && filtroLugarfield.value !==''){
                 filtrados = Eventosmain.filter(filtroGenero).filter(filtroLugar);}

            else if (filtroGenerofield.value =='' && filtroLugarfield.value ==''){  
               
               filtrados = Eventosmain;}
        
        let EventContenedortemp = document.getElementById('eventContenedor');
         EventContenedortemp.innerHTML = ''

  
        let innerHTMLForEventContenedortemp = ''
            filtrados.forEach(Eventomain => {     
            innerHTMLForEventContenedortemp += Eventomain.innerHTMLForEvents()
            } )

    EventContenedortemp.innerHTML = innerHTMLForEventContenedortemp;
 }  

botonFiltros.addEventListener("click",(filtroGL));

       