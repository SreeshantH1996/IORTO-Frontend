import { Component, Prop, Vue } from 'vue-property-decorator'
import { BModal, VBModal } from "bootstrap-vue";
import LogRestService from '../services/LogReg';

const logregserve = new LogRestService();

@Component({
    components: {
        BModal,
    },
    directives: {
        'b-modal': VBModal
    },
})
export default class LogReg extends Vue {
    public userRegNam = "";
    public userRegAdd = "";
    public userRegAge = "";
    public userRegDis = "";
    public userRegUna = "";
    public userRegpas = "";
    public userRegrep = ""
    private ToggleFunction() {
        console.log("Toggle function called");
        document.getElementById('main_cont').classList.toggle('s--signup');
    }
    private UserRegsitrationSubmit() {
        if (!this.userRegNam || !this.userRegAdd || !this.userRegDis || !this.userRegUna || !this.userRegpas || !this.userRegAge || !this.userRegrep){
            this.$store.dispatch('showErrorMsg', "Fields marked as '*' are required");
            return false;
        }
        if(this.userRegpas.length < 8){
            this.$store.dispatch('showErrorMsg', "Password should have a length of 8 charachters");
            return false; 
        }
        if (this.userRegpas != this.userRegrep){
            this.$store.dispatch('showErrorMsg', "Please enter the same password");
            return false;
        }
        const form: any = document.getElementById('user_registrationfrom');
        const formData = new FormData(form);
        logregserve.postUserRegistrationApi(formData).then((response: any) => {
            console.log("Success");
        }, (err: any) => {
            console.log("error");
        });
    }
}
