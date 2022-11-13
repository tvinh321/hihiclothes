import React from 'react';

// import {selectCartItems, selectCartTotal} from '../../redux/cart/cart-selectors';

// import {createStructuredSelector} from 'reselect';

// import CheckoutItem from '../../components/checkout-item/CheckoutItem';

// import { connect } from 'react-redux';

// import {
//     CheckoutPageContainer,
//     CheckoutHeaderContainer,
//     HeaderBlockContainer,
//     TotalContainer,
//     WarningContainer
//   } from './checkout-styles';

// const Checkout = ({cartItems, total}) => {
//     return (
//         <CheckoutPageContainer>
//             <CheckoutHeaderContainer>
//                 {
//                     ["Product", "Price", "Quantity","Remove"].map(item => (
//                         <HeaderBlockContainer>
//                             <span>{item}</span>
//                         </HeaderBlockContainer>
//                     ))
//                 }
//             </CheckoutHeaderContainer>
//                 {
//                     cartItems.map(cartItem => (
//                         <CheckoutItem key={cartItem.id} cartItem={cartItem} />
//                     ))
//                 }
//             <TotalContainer>TOTAL: ${total}</TotalContainer>
//             <WarningContainer>
//                 *Please use the following test credit card for payments*<br />
//                 4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
//             </WarningContainer>
//         </CheckoutPageContainer>
//     );
// }

// const mapStateToProps = createStructuredSelector({
//     cartItems: selectCartItems,
//     total: selectCartTotal
// });

// export default connect(mapStateToProps)(Checkout);

import { ReactComponent as HiHiClothesLogo } from '../../assets/hihiclothes-logo.svg';

import Sneakers from '../../assets/sneakers.png';
import Visa from '../../assets/payment_visa.png';
import Master from '../../assets/payment_master.png';
import Paypal from '../../assets/payment_paypal.png';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Checkout = () => (
    <div className="">
        <Header HiHiClothesLogo={HiHiClothesLogo} />

        <div className="relative">
            <div class="pt-40 pl-28 pr-28 text-3xl font-bold">Checkout</div>
            <div class="bg-white mt-8 ml-28 mr-28 mb-32 grid grid-cols-3 gap-8">
                <div class="col-span-2">
                    <div class="border-solid border-2 border-[#874331]">
                        <div class="grid grid-cols-2">
                            <div class="">
                                <div class="pt-2 pl-4 pr-4 text-xl font-semibold leading-loose">Contact Information</div>
                            </div>
                            <div class="">
                                <div class="pt-3 pl-4 pr-4 text-right text-base font-medium leading-loose text-[#874331]">Already have account?</div> 
                            </div>
                        </div>
                        <div className="mt-4 ml-4 mr-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Email*" />
                        </div>
                        <div className="mt-4 ml-4 mr-4 mb-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Phone number*" />
                        </div>
                    </div>
                    <div class="mt-2 border-solid border-2 border-[#874331]">
                        <div class="">
                            <div class="pt-2 pl-4 pr-4 text-xl font-semibold leading-loose">Shipping Address</div>
                        </div>
                        <div class="mt-4 ml-4 mr-4 grid grid-cols-2 gap-4">
                            <div class="">
                                <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="First name*" />                            </div>
                            <div class="">
                                <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Last name*" />                            </div>
                        </div>
                        <div className="mt-4 ml-4 mr-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Company" />
                        </div>
                        <div className="mt-4 ml-4 mr-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Address*" />
                        </div>
                        <div className="mt-4 ml-4 mr-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Apartment*" />
                        </div>
                        <div className="mt-4 ml-4 mr-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="City*" />
                        </div>
                        <div class="mt-4 ml-4 mr-4 mb-4 grid grid-cols-2 gap-4">
                            <div class="">
                                <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Country*" />                            </div>
                            <div class="">
                                <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Postal Code*" />                            </div>
                        </div>
                    </div>
                    {/* <div class="mt-2 border-solid border-2 border-[#874331]">
                        <div class="">
                            <div class="pt-2 pl-4 pr-4 text-xl font-semibold leading-loose">Payment Method</div>
                        </div>
                        <div class="mt-2 ml-4 mr-4 mb-4 grid grid-cols-5 gap-4">
                            <div class="">
                                <img src={Visa} class="object-contain h-15 w-25"/>
                            </div>
                            <div class="">
                                <img src={Master} class="object-contain h-15 w-25"/>
                            </div>
                            <div class="">
                                <img src={Paypal} class="object-contain h-15 w-25"/>
                            </div>
                            <div class="">
                            </div>
                            <div class="">
                            </div>
                            
                        </div>
                        <div className="mt-4 ml-4 mr-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Card number*" />
                        </div>
                        <div className="mt-4 ml-4 mr-4 mb-4">
                            <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Card Holder Name*" />
                        </div>
                        <div class="mt-2 ml-4 mr-4 mb-4 grid grid-cols-3 gap-6">
                            <div class="">
                                <div className="">
                                    <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="mm*" />
                                </div>
                            </div>
                            <div class="">
                                <div className="">
                                    <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="yy*" />
                                </div>
                            </div>
                            <div class="">
                                <div className="">
                                    <input className="border border-[#874331] p-3 rounded-[15px] w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="000*" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div class="">
                    <div class="border-solid border-2 border-[#874331] ">
                        <div class="pt-2 pl-4 pr-4 text-xl font-semibold leading-loose">Promotion</div>
                        <div class="pb-4 pl-4 pr-4 text-base text-[#874331]">Choose or Enter Promote code</div>
                    </div>
                    <div class="mt-2 border-solid border-2 border-[#874331] ">
                        <div class="pt-2 pl-4 pr-4 text-xl font-semibold leading-loose">Your order</div>
                        <div class="pl-4 pr-4 grid grid-cols-3">
                            <div class="">
                                <img src={Sneakers} class="object-contain h-20 w-20"/>
                            </div>
                            <div class="">
                                <div class="grid grid-rows-3">
                                    <div class="row-start-2 text-left font-semibold">x 1</div>
                                </div>
                            </div>
                            <div class="">
                                <div class="grid grid-rows-3">
                                    <div class="row-start-2 text-center font-semibold">$35</div>
                                </div>
                            </div>
                        </div>
                        <div class="pl-4 pr-4 grid grid-cols-3">
                            <div class="">
                                <img src={Sneakers} class="object-contain h-20 w-20"/>
                            </div>
                            <div class="">
                                <div class="grid grid-rows-3">
                                    <div class="row-start-2 text-left font-semibold">x 1</div>
                                </div>
                            </div>
                            <div class="">
                                <div class="grid grid-rows-3">
                                    <div class="row-start-2 text-center font-semibold">$35</div>
                                </div>
                            </div>
                        </div>
                        <div class="pl-4 pr-4 relative flex py-5 items-center">
                            <div class="flex-grow border-t border-gray-400"></div>
                        </div>
                        <div class="pl-4 pr-4 grid grid-cols-3">
                            <div class="">
                                <div class="text-left font-normal">Subtotal</div>
                            </div>
                            <div class=""></div>
                            <div class="">
                                <div class="text-center font-normal">$70</div>
                            </div>
                        </div>
                        <div class="pl-4 pr-4 grid grid-cols-3">
                            <div class="">
                                <div class="text-left font-normal">Shipping fee</div>
                            </div>
                            <div class=""></div>
                            <div class="">
                                <div class="text-center font-normal">Free</div>
                            </div>
                        </div>
                        <div class="mt-1 mb-4 ml-4 mr-4 bg-[#FCEBE2]">
                            <div class="grid grid-cols-2">
                                <div class="">
                                    <div class="pt-1 pl-4 pr-4 pb-1 text-lg font-semibold">Total order</div>
                                </div>
                                <div class="">
                                    <div class="pt-1 pl-4 pr-12 pb-1 text-lg font-semibold text-right">$70</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="mt-3 bg-[#B8583F]">
                        <div class="pt-2 pl-4 pr-4 pb-2 text-center font-semibold text-[#FCEBE2]">Complete Order</div>
                    </div> */}
                    <button className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-[#B8583F]">Complete Order</button>
                </div>
            </div>
        </div>

        <Footer HiHiClothesLogo={HiHiClothesLogo} />
    </div>
);

export default Checkout;