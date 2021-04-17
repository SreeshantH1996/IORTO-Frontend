import { Component, Prop, Vue } from 'vue-property-decorator'
import { BModal, VBModal } from "bootstrap-vue";
import LogRestService from '../services/LogReg';
import Razorpay from 'razorpay';
import router from '@/router';

const logregserve = new LogRestService();

@Component({
    components: {
        BModal,
        Razorpay
    },
    directives: {
        'b-modal': VBModal
    },
})
export default class RenewalApplicationDetails extends Vue {
    public user_id = "";
    public application_id = "";
    public application_details = "";
    public document_list = "";
    public other_documents = "";

    public created() {
        // alert(this.$route.params.id);
        this.application_id = this.$route.params.id;        
        if (!this.$store.state.IsUserLoggedIn) {
            router.push("/")
        } else {
            const userFromStorage = localStorage.getItem("user");
            console.log(userFromStorage)
            const user = JSON.parse(userFromStorage || "") as any;
            console.log(user)
            if (user !== null) {
                this.user_id = user.user_id;
            }
        }
        this.getUserDetials();
    }

    public getUserDetials(){
        let loader = this.$loading.show();
        var data = {"user_id":this.user_id,"app_id":this.application_id}
        logregserve.licenceApplication(data).then((response: any) => {
            console.log(response.data.data.status);
            this.application_details = response.data.data.application_details;
            this.document_list = response.data.data.documents;
            this.other_documents = response.data.data.other_documents;
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

    public StatusChangeRTO(id:any){
        let loader = this.$loading.show();
        const form: any = document.getElementById('statusChange');
        console.log(form)
        const formData = new FormData(form);
        formData.append('user_id', id);
        logregserve.RtoStatusChange(formData).then((response: any) => {
            console.log(response.data.data.status);
            var status = response.data.data.status
            if (status){
                setTimeout(() => {
                    loader.hide()
                },200) 
                this.$router.push("/renewallist");    
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