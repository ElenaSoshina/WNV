import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import InquiryBanner from "../../components/InquiryBanner/InquiryBanner.jsx";
import ServicesSection from "../../components/ServicesSection/ServicesSection.jsx";
import Modal from '../../components/Modal/Modal';
import ContactAndReviews from "../../components/ContactAndReviews/ContactAndReviews.jsx";
import AboutSection from "../../components/AboutSection/AboutSection.jsx";
import Reasons from "../../components/Reasons/Reasons.jsx";
import ContactSection from "../../components/ContactSection/ContactSection.jsx";

export default function HomePage() {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <InquiryBanner onOpenModal={() => setModalOpen(true)} />
            <AboutSection />
            <ContactAndReviews />
            <Reasons />
            <ContactSection />
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
}
