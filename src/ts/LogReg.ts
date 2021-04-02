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
    private created() {
        console.log("Page Loads");
    }
    private ToggleFunction() {
        console.log("Toggle function called");
        document.getElementById('main_cont').classList.toggle('s--signup');
    }
    private UserRegsitrationSubmit() {
        const data = { "test": "test" }
        logregserve.postUserRegistrationApi(data).then((response: any) => {
            console.log("Success");
        }, (err: any) => {
            console.log("error");
        });
    }
}
