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
    public UserDetials:any = [];
    public UserDocuments = "";
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
            this.UserDocuments = response.data.data.documents;
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

    public UploadDocuments(){
        let loader = this.$loading.show();
        const form: any = document.getElementById('uploaddocuments');
        const formData = new FormData(form);
        formData.append('user_id', this.user_id);
        formData.append('reneweldata',"False");
        logregserve.documentUploadApi(formData).then((response: any) => {
            console.log(response.data.data.status);
            var status = response.data.data.status
            if (status){
                setTimeout(() => {
                    loader.hide()
                },200) 
                if(this.UserDetials.payment_status == "Success"){
                    this.$router.push("/userhome"); 
                }else{
                    this.$router.push("/payments");    
                }
                this.$store.dispatch('showSuccessMsg', "Documents uploaded successfully");
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