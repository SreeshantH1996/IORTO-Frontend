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
export default class UserHome extends Vue {

}