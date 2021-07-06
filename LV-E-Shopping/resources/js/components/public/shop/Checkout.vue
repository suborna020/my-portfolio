<template>
<div>
    <section class="pages checkout section-padding">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="main-input single-cart-form padding60">
                        <div class="log-title">
                            <h3><strong>billing details</strong></h3>
                        </div>
                        <div class="custom-input">
                            <form action="mail.php" method="post" @submit.prevent="example()">
                                <input type="text" v-model="form.name" name="name" placeholder="Name here..">
                                <span class="text-danger" v-if="errors['name']">
                                    {{errors['name'][0]}}
                                </span>
                                <input type="text" v-model="form.email" name="email" placeholder="Email Address..">
                                <span class="text-danger" v-if="errors['email']">
                                    {{errors['email'][0]}}
                                </span>
                                <input type="text" v-model="form.phone" name="phone" placeholder="Phone Number..">
                                <span class="text-danger" v-if="errors['phone']">
                                    {{errors['phone'][0]}}
                                </span>
                                <input type="text" v-model="form.address" name="address" placeholder="address">
                                <span class="text-danger" v-if="errors['address']">
                                    {{errors['address'][0]}}
                                </span>
                                <span class="text-danger" style="display:flex">Ship to different Address
                                    <input type="checkbox" style="width:20%" v-model="shippingDisplay"></span>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6" v-if="shippingDisplay">
                    <div class="main-input single-cart-form padding60">
                        <div class="log-title">
                            <h3><strong>ship to different address</strong></h3>
                        </div>
                        <div class="custom-input">
                            <form action="mail.php" method="post" @submit.prevent="example()">
                                <input type="text" v-model="shipping.name" name="name" placeholder="Name here..">
                                <span class="text-danger" v-if="errors['name']">
                                    {{errors['name'][0]}}
                                </span>
                                <input type="text" v-model="shipping.email" name="email" placeholder="Email Address..">
                                <span class="text-danger" v-if="errors['email']">
                                    {{errors['email'][0]}}
                                </span>
                                <input type="text" v-model="shipping.phone" name="phone" placeholder="Phone Number..">
                                <span class="text-danger" v-if="errors['phone']">
                                    {{errors['phone'][0]}}
                                </span>
                                <input type="text" v-model="shipping.address" name="address" placeholder="address">
                                <span class="text-danger" v-if="errors['address']">
                                    {{errors['address'][0]}}
                                </span>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row margin-top">
                <div class="col-xs-12 col-sm-6">
                    <div class="padding60">
                        <div class="log-title">
                            <h3><strong>Our order</strong></h3>
                        </div>
                        <div class="cart-form-text pay-details table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <td>Total</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Men’s White Shirt x 2</th>
                                        <td>$86.00</td>
                                    </tr>
                                    <tr>
                                        <th>Men’s Black Shirt x 1</th>
                                        <td>$69.00</td>
                                    </tr>
                                    <tr>
                                        <th>Cart Subtotal</th>
                                        <td>$155.00</td>
                                    </tr>
                                    <tr>
                                        <th>Shipping and Handing</th>
                                        <td>$15.00</td>
                                    </tr>
                                    <tr>
                                        <th>Vat</th>
                                        <td>$00.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Order total</th>
                                        <td>$325.00</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="padding60">
                        <div class="log-title">
                            <h3><strong>Payment method</strong></h3>
                        </div>
                        <div class="categories">
                                <ul id="accordion" class="panel-group clearfix">
                                    <!-- <li class="panel">
                                    <div data-toggle="collapse" data-parent="#accordion" data-target="#collapse1">
                                        <div class="medium-a">
                                            direct bank transfer
                                        </div>
                                    </div>
                                    <div class="panel-collapse collapse in" id="collapse1">
                                        <div class="normal-a">
                                            <p>Lorem Ipsum is simply in dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                                        </div>
                                    </div>
                                    </li> -->
                                    <li class="panel">
                                        <div class="form-group">
                                            <label for="sel1">Select list:</label>
                                            <select class="form-control" id="sel1" v-model="payment_type">
                                                <option value="cash_on_delivery">cash on delivery</option>
                                                <option value="card_payment">card payment</option>
                                            </select>
                                        </div>
                                        <div class="form-group custom-input" v-if="payment_type === 'card_payment'">
                                            <label for="sel1">card payment</label>
                                            <input type="number" name="" placeholder="Card no.." v-model="cardPayment.cardNumber" required>

                                            <label for="sel1"></label>
                                            <input type="number" name="" placeholder="Card exp  month.." size="2" v-model="cardPayment.expMonth" required>
                                            <label for="sel1"></label>
                                            <input type="number" size="2" name="" placeholder="Card year.." v-model="cardPayment.expYear" required>
                                            <label for="sel1"></label>
                                            <input type="number" size="3" name="" placeholder="Card CVC.." v-model="cardPayment.cvc" required>

                                        </div>
                                    </li>

                                </ul>
                                <div class="submit-text">
                                    <a href="#" @click.prevent="placeOrder">place order</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'Checkout',
    data() {
        return {
            shippingDisplay: false,
            form: {},
            shipping: {

            },
            errors: {},
            payment_type: 'cash_on_delivery',
            cardPayment: {
                cardNumber: '',
                cvc: '',
                expMonth: '',
                expYear: '',

            }
        }
    },
    methods: {
        // cardPayment(){

        // },
        placeOrder(){
            
        }

    }
}
</script>

<style>

</style>
