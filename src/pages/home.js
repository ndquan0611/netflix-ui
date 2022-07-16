import { OptForm, Feature } from '~/components';
import { HeaderContainer, JumbotronContainer, FaqsContainer, FooterContainer } from '~/containers';

export default function Hone() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or restart your membership.
                        </OptForm.Text>
                        <OptForm.Form>
                            <OptForm.Input placeholder="Email address" />
                            <OptForm.Button>Get Started</OptForm.Button>
                        </OptForm.Form>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}
