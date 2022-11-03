import Header from "../../components/Header.vue";

export default {
    name:"Home",
    components:{
        Header
    },
    data(){
        return {

        }
    },
    methods:{
        getElement(selector){
            const el = document.querySelector(selector);
            return el;
        },
        removerPositionRelative(seletor){
            const el = this.getElement(seletor);
            el.style.position = '';
        },
        adicionarPositionRelative(seletor){
            const el = this.getElement(seletor);
            el.style.position = 'relative';
        },
        showPopUp(seletor){
            const dropdown = this.getElement(seletor);
            if(dropdown.style.display == ''){
                this.removerPositionRelative(".btn-task-infos-container");
                dropdown.style.display = 'block';
            }else{
                dropdown.style.display = '';
                this.adicionarPositionRelative(".btn-task-infos-container");
            }
        },
    }
}