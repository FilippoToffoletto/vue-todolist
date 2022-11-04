const {createApp} = Vue;

createApp({
    data(){
        return{
            errorString: '',
            tasks:[
                {
                    text:'Prendere il pane',
                    done: false
                },
            ]
        }
    },
    methods:{
        removeTask(index){
            if(this.tasks[index].done){
                this.tasks.splice(index, 1);
            }else{
                this.errorString = 'Attenzione non puoi eliminare un promemoria se non l hai selezionato';
            }
        }
    },
    mounted(){
        console.log('Montata');
    }
}).mount('#app');