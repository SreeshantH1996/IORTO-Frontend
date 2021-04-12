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
export default class Payment extends Vue {
    public user_id = "";

    public created() {
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
    }

    public payMoney() {
        console.log("teste");
        var options = {
            "key": "rzp_test_N70K6BWPWPVhjp",
            "key_secret": "qxuImRt1aXItInGV3j3pB4bv",
            "amount": "10000", // 2000 paise = INR 20
            "name": "Merchant Name",
            "description": "Purchase Description",
            "image": "http://localhost:8000/static/Images/logo.jpg",
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "test@test.com"
            },
            "notes": {
                "address": "Hello World"
            },
            "theme": {
                "color": "#9494e6"
            }
        };
        console.log("test")
        document.getElementById("completebutton").style.display = "block";
        var rzp1 = new window.Razorpay(options)
        console.log(rzp1)
        rzp1.open();
        console.log("completed")

    }

    public navigateToHome() {
        let loader = this.$loading.show();
        var data = {
            "user_id": this.user_id,
            "status": "Payment Completed, Waiting for approvall"
        }
        logregserve.userStatusUpdate(data).then((response: any) => {
            console.log(response.data.data.status);
            var status = response.data.data.status
            if (status) {
                setTimeout(() => {
                    loader.hide()
                    this.$router.push("/userhome");
                    this.$store.dispatch('showSuccessMsg', "Your payment will be verified by the respective RTO Officer. Thank you!");
                }, 2000)
            } else {
                this.$store.dispatch('showErrorMsg', response.data.data.message);
                loader.hide()
            }
        }, (err: any) => {
            console.log("error");
            loader.hide()
        });
        
    }
}