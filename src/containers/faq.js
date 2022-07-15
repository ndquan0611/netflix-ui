import faqsData from '~/fixtures/faqs';
import { Accordion, OptForm } from '~/components';

export default function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {faqsData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame>

            <OptForm>
                <OptForm.Text>
                    Ready to watch? Enter your email to create or restart your membership.
                </OptForm.Text>
                <OptForm.Form>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Get Started</OptForm.Button>
                </OptForm.Form>
            </OptForm>
        </Accordion>
    );
}
