const steps = [
    { number: '01', title: 'Consultation', description: 'We meet to discuss your vision, style preferences, and event details.' },
    { number: '02', title: 'Proposal', description: 'You receive a custom quote tailored to your specific needs.' },
    { number: '03', title: 'Booking', description: 'Secure your date with a contract and deposit.' },
    { number: '04', title: 'Planning', description: 'Final details review and timeline creation 2 weeks before.' },
    { number: '05', title: 'The Event', description: 'We capture your moments while you enjoy the celebration.' },
    { number: '06', title: 'Delivery', description: 'Receive your curated, edited gallery within 4-6 weeks.' },
];

const ProcessTimeline = () => {
    return (
        <div className="relative">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-gold/50 to-transparent" />

            <div className="space-y-12 md:space-y-24">
                {steps.map((step, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        <div className="flex-1 w-full md:w-1/2 p-6 text-center md:text-left">
                            <div className={`md:max-w-xs ${index % 2 === 0 ? 'mr-auto md:text-right' : 'ml-auto'}`}>
                                <h3 className="text-2xl font-serif text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.description}</p>
                            </div>
                        </div>

                        {/* Number Indicator */}
                        <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-accent-gold bg-primary z-10 my-4 md:my-0">
                            <span className="font-serif text-accent-gold">{step.number}</span>
                        </div>

                        <div className="flex-1 w-full md:w-1/2" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProcessTimeline;
