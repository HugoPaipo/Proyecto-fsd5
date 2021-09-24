const filtroGenerofield = document.getElementById('Generosel')
const filtroLugarfield = document.getElementById('Lugarsel')
const botonFiltro = document.getElementById('filtros')

let EventContenedor = document.getElementById('eventContenedor');
        EventContenedor.innerHTML = ''

      
        let innerHTMLForEventContenedor = ''
                Eventosmain.forEach(Eventomain => {     
                innerHTMLForEventContenedor += Eventomain.innerHTMLForEvents()
                } )

        EventContenedor.innerHTML = innerHTMLForEventContenedor;

let filtroPor = Eventosmain;

Eventosmain
                .filter(Eventomain => Eventomain.filtroGenero())
               
Eventosmain
                .filter(Eventomain => Eventomain.filtroLugar())
                
function filtroGenero(){Eventosmain,this.genero == filtroGenerofield.value;}
                
 function filtroLugar(){Eventosmain,this.lugar == filtroLugarfield.value;}                       
             
               
                

function filtroGL() {
        if(filtroGenerofield.value !=='' && filtroLugarfield.value !==''){
               filtroGenero() + filtroLugar() ; Eventosmain.forEach(Eventomain => {     
                innerHTMLForEventContenedor += Eventomain.innerHTMLForEvents()
                } ) }
        }
                                    
        

console.log()


/*
function filtroGenero(genero) {
        filtroGenerofield.value == Eventosmain.filter(Eventomain =>Eventomain.genero == genero)
        }  
        function filtroLugar(lugar){
        filtroLugarfield.value == Eventosmain.filter(Eventomain =>Eventomain.lugar == lugar)   
        }
        
        botonFiltro.addEventListener('click',() => {
                if(filtroGenerofield.value !=='' && filtroLugarfield.value !==''){
                        filtroGenero() + filtroLugar() ;  Eventosmain.forEach(Eventomain => {     
                                innerHTMLForEventContenedor += Eventomain.innerHTMLForEvents()
                                } )
        
                }
        
        })
        

*/
