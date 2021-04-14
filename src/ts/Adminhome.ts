import { Component, Prop, Vue } from 'vue-property-decorator'
import { BModal, VBModal } from "bootstrap-vue";
import LogRestService from '../services/LogReg';
import $ from 'jquery'
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
export default class Adminhome extends Vue {
    public user_id = "";
    public RtoList = "";
    
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
                if(user.user_type == "user"){
                    router.push("/userhome")
                }
            }
        }
        this.getUserDetials();

    }
    public getUserDetials(){
        $("#rtodistrict").val("");
        $("#rtoid").val("");
        let loader = this.$loading.show();
        logregserve.getRTOList().then((response: any) => {
            console.log(response.data.data.status);
            this.RtoList = response.data.data.data;
            console.log(this.RtoList)
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
    public CreateRTO(){
        let loader = this.$loading.show();
        const form: any = document.getElementById('createRTO');
        const formData = new FormData(form);
        formData.append('user_id', this.user_id);
        logregserve.createRTOOfficer(formData).then((response: any) => {
            console.log(response.data.data.status);
            var status = response.data.data.status
            if (status){
                setTimeout(() => {
                    loader.hide()
                },200) 
                this.getUserDetials();   
                this.$store.dispatch('showSuccessMsg', "RTO entry created successfully");
            }else{
                this.$store.dispatch('showErrorMsg', response.data.data.message);
                loader.hide()
            }
        }, (err: any) => {
            console.log("error");
            loader.hide()
        });
        
    }

    public deleteRTOOfficer(id:any){
        let loader = this.$loading.show();
        var data = {"id":id}
        logregserve.rtoOfficerDelete(data).then((response: any) => {
            console.log(response.data.data.status);
            var status = response.data.data.status
            if (status) {
                setTimeout(() => {
                    loader.hide()
                    this.$store.dispatch('showSuccessMsg', "Officer entry deleted successfully");
                    this.getUserDetials();
                }, 500)
            } else {
                loader.hide()
            }
        }, (err: any) => {
            console.log("error");
            loader.hide()
        });
    }
}