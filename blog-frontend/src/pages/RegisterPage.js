import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

//회원가입
const RegisterPage = () => {
    return (
        <AuthTemplate>
          <RegisterForm />
        </AuthTemplate>
      );
};

export default RegisterPage;