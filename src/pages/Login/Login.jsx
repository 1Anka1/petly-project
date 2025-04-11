import LoginForm from '../../components/LoginFrom/LoginFrom';
import * as SC from './Login.styled';
import { Section } from '../../components/Layout/Layout.styled';

export default function Login() {
  return (
    <Section>
      <SC.LoginContainer>
        <LoginForm>Outlet</LoginForm>
      </SC.LoginContainer>
      <SC.LoginFrame src="/images/LoginPage-dots.png" />
      <SC.Frame src="/images/LoginPage-frame.png" />
    </Section>
  );
}
