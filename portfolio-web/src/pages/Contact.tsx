import MainLayout from '../components/layout/MainLayout';
import BookingForm from '../components/contact/BookingForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
    return (
        <MainLayout>
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
                    {/* Left Column: Info */}
                    <div className="order-2 lg:order-1">
                        <ContactInfo />
                    </div>

                    {/* Right Column: Form */}
                    <div className="order-1 lg:order-2">
                        <BookingForm />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Contact;
