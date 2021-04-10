import { Component, Prop, Vue } from 'vue-property-decorator'
import { BModal, VBModal } from "bootstrap-vue";
import LogRestService from '../services/LogReg';
import Razorpay from 'razorpay';

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

    public payMoney(){
        // static/Images/logo.jpg
        console.log("teste");
        var options = {
            "key": "rzp_test_N70K6BWPWPVhjp",
            "key_secret":"qxuImRt1aXItInGV3j3pB4bv",
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
        var rzp1 = new window.Razorpay(options)
        // var rzp1 = new Razorpay(options);
        console.log(rzp1)
        rzp1.open();
        console.log("completed")
        
        // document.getElementById('rzp-button1').onclick = function(e){
        //     e.preventDefault();
        // }
    }
}