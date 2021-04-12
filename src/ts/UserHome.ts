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
            setTimeout(() => {
                loader.hide()
            },200) 
        }, (err: any) => {
            console.log("error");
            loader.hide()
        });

    }
}