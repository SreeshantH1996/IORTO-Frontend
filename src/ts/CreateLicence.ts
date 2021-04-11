import { Component, Prop, Vue } from 'vue-property-decorator'
import { BModal, VBModal } from "bootstrap-vue";
import LogRestService from '../services/LogReg';
import $ from 'jquery'
import router from '@/router';

const logregserve = new LogRestService();

@Component({
    components: {
        BModal,
    },
    directives: {
        'b-modal': VBModal
    },
})
export default class CreateLicence extends Vue {
    public created(){
        if(!this.$store.state.IsUserLoggedIn){
            router.push("/")
        }
    }

    public SameAsAboveClick() {
        console.log("Click on button")
        var element = <HTMLInputElement>document.getElementById("is3dCheckBox");
        var isChecked = element.checked;
        console.log(isChecked);
        if(isChecked){
            $("#temporaryadd").hide();
        }else{
            $("#temporaryadd").show();
        }
    }

    public CreateLicence(){
        console.log("test")
        const form: any = document.getElementById('createlicence');
        console.log(form)
        const formData = new FormData(form);
    }
}