members = [

]

const listadeFuncionarioo = {

    data() {
        return {
            members: window.members,
            newMember:{
                fname: null,
                lname: null,
                cargo: null
            }
        }
    },
    methods: {
        addFuncionario: function(){
            if(this.newMember.fname && this.newMember.lname && this.newMember.cargo){
                this.members.push(this.newMember),
                this.newMember = {}
            }else {
                alert("Preencha todos os campos")
            }
        }
    }

};

Vue.createApp(listadeFuncionarioo).mount('#app');
