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
    public renew_reason ="";
    public renew_payment = "";
    public new_payment = "";

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
        this.getUserStatus()
    }

    public getUserStatus(){
        let loader = this.$loading.show();
        var data = {"user_id":this.user_id}
        logregserve.getUserStatus(data).then((response: any) => {
            console.log(response.data.data.status);
            this.UserStatus = response.data.data.user_status;
            this.RenewalStatus = response.data.data.renewal_status;
            this.renew_reason = response.data.data.renew_reason;
            this.renew_payment = response.data.data.renewal_payment_status;
            this.new_payment = response.data.data.new_payment_status;
            if(!this.RenewalStatus){
                this.RenewalStatus = "Not yet Applied";
            }
            if(!this.UserStatus){
                this.UserStatus = "Not yet Applied";
            }
            setTimeout(() => {
                loader.hide()
            },200) 
        }, (err: any) => {
            console.log("error");
            loader.hide()
        });

    }
}