const {createApp} = Vue;

createApp({
    data(){
        return{
            errorString: '',
            newMessageString: '',
            tasks:[
                {
                    text:'Prendere il pane',
                    done: false
                },
                {
                    text:'Prendere il latte',
                    done: false
                },
                {
                    text:'Portare fuori il cane',
                    done: true
                }
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
        },
        createTask(){
            this.tasks.text='';
            this.errorString='';
            if(this.newMessageString.length < 5){
                this.errorString = 'Attenzione il promemoria deve avere una lunghezza minima di 5 caratteri o già presente';
            // }else if(this.newMessageString == this.tasks){
            //     this.errorString = 'il promemoria è già presente';
            }else{
                const newTask={
                    text: this.newMessageString,
                    done:false
                }
                this.tasks.unshift(newTask);
                this.newMessageString= '';
            }
        }
    },
    mounted(){
        console.log('Montata');
    }
}).mount('#app');