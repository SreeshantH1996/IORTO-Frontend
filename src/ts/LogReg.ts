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
export default class LogReg extends Vue {
    public isLoading = false
    public user_type = "";

    public created(){
        console.log("test")
        if(this.$store.state.IsUserLoggedIn){
            router.push("/userhome")
        }
    }
    
    private ToggleFunction() {
        console.log("Toggle function called");
        document.getElementById('main_cont').classList.toggle('s--signup');
    }

    public LoginUser() {
        console.log("test")
        const form: any = document.getElementById('signupform');
        console.log(form)
        const formData = new FormData(form);
        logregserve.UserLoginApi(formData).then((response: any) => {
            console.log(response);
            status = response.data.data.status;
            console.log(status)
            if (status == "true") {
                localStorage.setItem('user', JSON.stringify(response.data.data));
                this.$store.state.IsUserLoggedIn = true;
                let User = JSON.parse(localStorage.getItem('user') || '{}');
                this.$store.state.User = User.username;
                this.user_type = response.data.data.user_type;
                if (this.user_type == "user"){
                    this.$router.push('/userhome');
                }else if(this.user_type == "admin"){
                    this.$router.push('/adminhome');
                }
                let loader = this.$loading.show();
                setTimeout(() => {
                    location.reload();
                    setTimeout(() => {
                        loader.hide()
                    }, 2000);
                }, 200);
                this.$store.state.Loading = false;
                // this.$store.dispatch('showErrorMsg', "Valid username or password");
            } else {
                this.$store.dispatch('showErrorMsg', "Invalid username or password");
                this.$store.state.Loading = false;
            }
        }, (err: any) => {
            console.log("error");
            this.$store.state.Loading = false;
        });
    }
}
