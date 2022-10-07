import React, { useEffect } from 'react';
import Button from '../common/Button';

const Payment = ({total}, effect,deps) => {
    useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "http://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);

        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        }
    }, []);

    const onClickPayment = () => {
        const { IMP ,} = window; IMP.init('imp47532801'); //가맹점 식별코드, 결제 데이터 정의
        const data = {
            pg: 'html5_inicis', // PG사 (필수항목)
            pay_method: 'card', // 결제 수단 (필수 항목)
            merchant_uid: `mid_${new Date().getTime}`, // 결제 금액 (필수 항목)
            name: '결제 테스트', // 주문명(필수 항목)
            amount: total, // 금액 (필수 항목 )
            custom_data: { name: '부가정보', desc: '세부 부가정보' },
            buyer_name: '밍밍이', // 구매자 이름
            buyer_tel: '01012345678', // 구매자 전화번호 (필수 항목)
            buyer_email: 'suhee523@naver.com', // 구매자 이메일
            buyer_addr: '구월동 365-13',
            buyer_postalcode: '05258'
        };
        IMP.request_pay(data, callback);
    }

    const callback = (response) => {
        const { success, error_msg, 
            // imp_uid, merchant_uid, pay_method, paid_amount, status
         }
        = response;
        if(success) {
            alert('결제 성공');
        } else {
            alert(`결제 실패 : ${error_msg}`);
        }
    }

    return (
        <>
            <Button onClick={onClickPayment}>결제하기</Button>
        </>
    );
}

export default Payment;



