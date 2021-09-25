const filtroGenerofield = document.getElementById('Generosel');
const filtroLugarfield = document.getElementById('Lugarsel');

function filtroGenero(Eventomain){ return Eventomain.genero == filtroGenerofield.value;}
                
function filtroLugar(Eventomain){ return Eventomain.lugar == filtroLugarfield.value;}                       
             


              
function filtroGL() {
        if(filtroGenerofield.value !=='' && filtroLugarfield.value !==''){
                let Eventosmain = Eventosmain.filter(Eventomain => filtroGenero(Eventomain) && filtroLugar(Eventomain))
                 Eventosmain.forEach(Eventomain => {     
                 innerHTMLForEventContenedor += Eventomain.innerHTMLForEvents()
                 } ) }
         } 



