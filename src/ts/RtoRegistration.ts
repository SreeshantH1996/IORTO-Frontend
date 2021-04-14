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
export default class UserRegistration extends Vue {
    public userRegpas = "";
    public userRegrep = "";
    public phnumber = "";

    private RtoRegsitrationSubmit() {
        console.log(this.userRegpas.length)
        if(this.userRegpas.length < 8){
            this.$store.dispatch('showErrorMsg', "Password should have a length of 8 charachters");
            return false; 
        }
        if (this.userRegpas != this.userRegrep){
            this.$store.dispatch('showErrorMsg', "Please enter the same password");
            return false;
        }
        if(this.phnumber.length < 10){
            this.$store.dispatch('showErrorMsg', "Please neter valid phone number");
            return false; 
        }
        const form: any = document.getElementById('rto_registrationfrom');
        const formData = new FormData(form);
        logregserve.rtoOfficerRegistration(formData).then((response: any) => {
            console.log(response.data.data.status);
            var status = response.data.data.status
            if (status){
                this.$router.push("/");
                this.$store.dispatch('showSuccessMsg', "RTO registered successfully, Please Login to continue.");
            }else{
                this.$store.dispatch('showErrorMsg', response.data.data.message);
            }
        }, (err: any) => {
            console.log("error");
        });
    }
}