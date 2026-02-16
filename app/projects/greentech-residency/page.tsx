
import React from 'react';
import { Metadata } from 'next';
import GreentechCity from '@/app/components/GreentechCity';

export const metadata: Metadata = {
    title: 'GreenTech Residency (Nestoria) | Eco-Friendly Living in Dholera',
    description: 'GreenTech Residency (Nestoria) offers eco-friendly residential plots in Dholera SIR. Sustainable community living with modern infrastructure.',
};

const GreenTechPage = () => {
    return (
      <GreentechCity/>
    );
};

export default GreenTechPage;
