import GooglePayButton from "@google-pay/button-react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mt-8">
      <GooglePayButton
        environment="TEST"
        buttonSizeMode="static"
        buttonType="plain"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: 'BCR2DN4TWWJ23RTM',
            merchantName: 'Pulkit Jain',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPrice: '2000',
            currencyCode: 'INR',
          },
        }}
        onLoadPaymentData={(paymentData) => {
          console.log('load payment data', paymentData.paymentMethodData);
          navigate('/confirmation', { state: { paymentData } });
        }}
        className="w-auto"
      />
    </div>
  )
}

export default Payment;
