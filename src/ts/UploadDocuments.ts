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
export default class UploadDocuments extends Vue {
    public user_id = "";
    public UserDetials = "";
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
        this.getUserDetials()
    }

    public getUserDetials(){
        let loader = this.$loading.show();
        var data = {"user_id":this.user_id}
        logregserve.getUserDetials(data).then((response: any) => {
            console.log(response.data.data.status);
            this.UserDetials = response.data.data.data;
            console.log(this.UserDetials)
            var status = response.data.data.status
            if (status){
                setTimeout(() => {
                    loader.hide()
                },200) 
            }else{
                this.$store.dispatch('showErrorMsg', response.data.data.message);
                loader.hide()
            }
        }, (err: any) => {
            console.log("error");
            loader.hide()
        });
    }
}