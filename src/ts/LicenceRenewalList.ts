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
export default class LicenceRenewalList extends Vue {
    public user_id = "";
    public UserData = "";
    public district = "";

    public created(){
        if(!this.$store.state.IsUserLoggedIn){
            router.push("/")
        }else{
            const userFromStorage = localStorage.getItem("user");
            console.log(userFromStorage)
            const user = JSON.parse(userFromStorage || "") as any;
            console.log(user)
            debugger
            if (user !== null) {
                this.user_id = user.user_id;
                if(user.user_type == "admin"){
                    router.push("/adminhome")
                }else if(user.user_type == "user"){
                    router.push("/userhome")
                }
            }
        }
        this.getLicenceRenewalList()
    }

    public getLicenceRenewalList(){
        let loader = this.$loading.show();
        var data = {"user_id":this.user_id}
        logregserve.licenceRenewalList(data).then((response: any) => {
            console.log(response.data.data.status);
            var status = response.data.data.status
            this.UserData = response.data.data.data
            this.district =  response.data.data.district
            if (status){
                setTimeout(() => {
                    loader.hide()
                },200) 
                // this.$router.push("/licence_renewal_upload_document");    
                this.$store.dispatch('showSuccessMsg', "Application updated successfully");
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