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
    
    public LoginUser(){
        console.log("test")
        const form: any = document.getElementById('signupform');
        console.log(form)
        const formData = new FormData(form);
        logregserve.UserLoginApi(formData).then((response: any) => {
            console.log(response);
        }, (err: any) => {
            console.log("error");
        });
    }
}
