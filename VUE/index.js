var app = new Vue({
    el: '#miAplicacion',
    data: {
      nuevoRecordatorio: "",
      listaRecordatorio: [],
      isButtonDisabled:true
    },

    methods:
    {
        anadirRecordatorio: function()
        {
            this.listaRecordatorio.push({
                titulo:this.nuevoRecordatorio,
                prioridad: 0,
                fechaCreacion: new Date(),
                completado:false
            });
                this.nuevoRecordatorio= "";
        },
        /*cambiarEstadoTarea: function(posicion)
        {
            this.listaRecordatorio[posicion].completado = !this.listaRecordatorio[indexed].completado;
        },*/
        teclaPulsada: function()
        {
            if(this.nuevoRecordatorio.length>0)
            this.isButtonDisabled = false;
            else
            this.isButtonDisabled = true;
        },

        computed:
        {
            totalTareas:function()
            {
                return this.listaRecordatorio.length;
            },

            totalCompletados: function()
            {
                let total = 0;

                for (i=0; i<this.listaRecordatorio.length;i++)
                if (this.listaRecordatorio[i].completado) total++;

                return total;
            }
        }
    }
  })