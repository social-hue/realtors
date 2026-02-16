
import React from 'react';
import { Metadata } from 'next';
import Elsyian from '@/app/components/Elsyian';

export const metadata: Metadata = {
    title: 'Elysian By Singla | Luxury Living in Dholera SIR',
    description: 'Experience luxury living with Elysian By Singla in Dholera SIR. Premium residential project offering world-class amenities and sustainable living.',
};

const ElysianPage = () => {
    return (
       <Elsyian/>
    );
};

export default ElysianPage;
