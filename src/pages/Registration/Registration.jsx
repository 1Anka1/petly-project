import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import * as SC from '../Login/Login.styled';
import { Section } from '../../components/Layout/Layout.styled';

export default function Registration() {
  return (
    <Section>
      <SC.LoginContainer>
        <RegistrationForm>Outlet</RegistrationForm>
      </SC.LoginContainer>
      <SC.LoginFrame src="/images/LoginPage-dots.png" />
      <SC.Frame src="/images/LoginPage-frame.png" />
    </Section>
  );
}
