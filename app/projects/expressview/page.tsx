
import React from 'react';
import { Metadata } from 'next';
import Expressview from '@/app/components/Expressview';

export const metadata: Metadata = {
    title: 'Expressview By Kavvan | Luxury Living in Dholera SIR',
    description: 'Experience luxury living with Expressview By Kavvan in Dholera SIR. Premium residential project offering world-class amenities and sustainable living.',
};

const ElysianPage = () => {
    return (
       <Expressview/>
    );
};

export default ElysianPage;
