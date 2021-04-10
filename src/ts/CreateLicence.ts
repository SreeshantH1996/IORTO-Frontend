import { Component, Prop, Vue } from 'vue-property-decorator'
import { BModal, VBModal } from "bootstrap-vue";
import LogRestService from '../services/LogReg';
import $ from 'jquery'

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
    // public created(){
    //     alert();
    // }

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
}