import { Component, Prop, Vue } from 'vue-property-decorator'
import { BModal, VBModal } from "bootstrap-vue";
import LogRestService from '../services/LogReg';
// import { Razorpay } from 'razorpay'
import Razorpay from 'razorpay';

const logregserve = new LogRestService();

@Component({
    components: {
        BModal,
        Razorpay,
    },
    directives: {
        'b-modal': VBModal
    },
})
export default class UploadDocuments extends Vue {
    
}