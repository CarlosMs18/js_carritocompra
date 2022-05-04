
class Shop{
    constructor(){
        this.lista = []
    }


    agregarShop(curso){
       
        const ShopIndex = this.lista.findIndex(p => {
            return p.id === curso.id
        })

        let newQuantity;
        const updatedShop = [...this.lista]
        if(ShopIndex >=0){
            newQuantity  = this.lista[ShopIndex].cantidad + 1
            updatedShop[ShopIndex].cantidad  =  newQuantity            
        }else{
            this.lista.push(curso)
        }
        
    
      
    }


    eliminarCurso(idCurso){
       
      
       this.lista = this.lista.filter(p => p.id != idCurso)
     
    }

    vaciarProductos(){
        this.lista = []
    }
}

const shop = new Shop()


export default shop
