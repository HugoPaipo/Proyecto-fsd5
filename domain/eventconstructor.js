class Eventomain{
    constructor(id,nombre,fecha,lugar,hora,genero){
           this.id = id,
           this.nombre = nombre, 
           this.fecha = fecha,
           this.lugar = lugar,
           this.hora = hora,
           this.genero = genero   
        }

innerHTMLForEvents(){
    return(`<div class="event"${this.id}>
                  
                            
                               
                <img class="mainflyer" src="proyecto assets/evento warp.jpg"  width="90px" height="143px" alt="imagen"/>
                 <h4 class="maintitle">${this.nombre}</h4>
                <div class="maintext">
            
                    <span><b>Fecha: </b> ${this.fecha}</span>
                    <span><b>Lugar: </b> ${this.lugar}</span>
                    <span><b>Hora: </b> ${this.hora}</span>
                    <span><b>Genero: </b> ${this.genero}</span>
                </div>
            </div>`
)
}
}
             