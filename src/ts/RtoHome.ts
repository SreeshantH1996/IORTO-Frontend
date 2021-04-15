import { Component, Prop, Vue } from 'vue-property-decorator'
import { BModal, VBModal } from "bootstrap-vue";
import LogRestService from '../services/LogReg';
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
export default class UserHome extends Vue {
    public user_id = "";
    public UserStatus = "";
    public RenewalStatus = "";

    public created(){
        if(!this.$store.state.IsUserLoggedIn){
            router.push("/")
        }else{
            const userFromStorage = localStorage.getItem("user");
            console.log(userFromStorage)
            const user = JSON.parse(userFromStorage || "") as any;
            console.log(user)
            if (user !== null) {
                this.user_id = user.user_id;
                if(user.user_type == "admin"){
                    router.push("/adminhome")
                }else if(user.user_type == "user"){
                    router.push("/userhome")
                }else if(user.user_type == "rto"){
                    router.push("/rtohome")
                }
            }
        }
        // this.getUserStatus()
    }
}