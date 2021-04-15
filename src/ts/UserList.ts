import { Component, Prop, Vue } from 'vue-property-decorator'
import { BModal, VBModal } from "bootstrap-vue";
import LogRestService from '../services/LogReg';
import router from '@/router';
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
export default class UserList extends Vue {
    public user_id = "";
    public UserData = "";

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
                }
            }
        }
        this.getUserList()
    }

    public getUserList(){
        let loader = this.$loading.show();
        logregserve.getUserList().then((response: any) => {
            console.log(response.data.data.status);
            this.UserData = response.data.data.data;
            setTimeout(() => {
                loader.hide()
            },200) 
        }, (err: any) => {
            console.log("error");
            loader.hide()
        });
    }

}