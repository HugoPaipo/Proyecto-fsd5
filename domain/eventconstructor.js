class Eventomain {
    constructor(id,nombre,fecha,lugar,hora,genero){
           this.id = id,
           this.nombre = nombre; 
           this.fecha = fecha;
           this.lugar = lugar;
           this.hora = hora;
           this.genero = genero;   
        }
         

innerHTMLForEvents(){
    return(`<div class="event" onclick=openevent(${this.id})>
                  
                            
                               
                <img class="mainflyer" src="proyecto assets/evento ${this.id}.jpg"  width="90px" height="143px" alt="${this.nombre}"/>
                 <h4 class="maintitle">${this.nombre}</h4>
                <div class="maintext">
            
                    <span><b>Fecha: </b> ${this.fecha}</span>
                    <span><b>Lugar: </b> ${this.lugar}</span>
                    <span><b>Hora: </b> ${this.hora}</span>
                    <span><b>Género: </b> ${this.genero}</span>
                </div>
            </div>`
)
}
} 
  

let Eventosmain = [
    new Eventomain(1,'WARP', '27/09/2021', 'Montevideo', '23:00', 'Techno'),
    new Eventomain(2,'EVENTO 2','26/09/2021','Maldonado','23:00','Techno'),
    new Eventomain(3,'EVENTO 3','6/10/2021','Maldonado','00:00','Tech house'),
    new Eventomain(4,'EVENTO 4','7/10/2021','Canelones','23:30','Techno'),
    new Eventomain(5,'EVENTO 5','16/10/2021','Montevideo','23:00','Tech house'), 
    new Eventomain(6,'EVENTO 6','27/10/2021','Montevideo','00:00','Techno'),
    new Eventomain(7,'EVENTO 7','15/02/2022','Paysandu','18:00','Otros'),
    new Eventomain(8,'EVENTO 8','18/03/2022','Artigas','21:00','Psytrance')
    ];

    let EventContenedor = document.getElementById('eventContenedor');
    EventContenedor.innerHTML = ''

  
    let innerHTMLForEventContenedor = ''
            Eventosmain.forEach(Eventomain => {     
            innerHTMLForEventContenedor += Eventomain.innerHTMLForEvents()
            } )

    EventContenedor.innerHTML = innerHTMLForEventContenedor;