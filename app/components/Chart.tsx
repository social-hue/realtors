"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, AreaChart } from 'recharts';

const data = [
    { name: '2010', price: 500, priceRange: '150-200' },
    { name: '2012', price: 1000, priceRange: '200-250' }, 
    { name: '2014', price: 2000, priceRange: '1,800-2,200' },
    { name: '2016', price: 4500, priceRange: '4,000-5,000' },
    { name: '2018', price: 6000, priceRange: '5,500-6,500' },
    { name: '2020', price: 6000, priceRange: '5,500-6,500' },
    { name: '2022', price: 7000, priceRange: '6,500-7,500' },
    { name: '2024', price: 8000, priceRange: '7,500-8,500' },
    { name: '2026', price: 9000, priceRange: '8,500-9,500' },
];

// Custom tooltip component for premium look
const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { payload: { priceRange: string } }[]; label?: string }) => {
    if (active && payload && payload.length) {
        const priceRange = payload[0].payload.priceRange;
        return (
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-4 py-3 rounded-xl shadow-2xl border border-slate-700/50 backdrop-blur-sm">
                <p className="text-amber-400 font-semibold text-sm mb-1">{label}</p>
                <p className="text-white text-lg font-bold">
                    ₹{priceRange}
                    <span className="text-slate-400 text-xs font-normal ml-1">/ sq. yard</span>
                </p>
            </div>
        );
    }
    return null;
};

// Custom legend component
const CustomLegend = () => {
    return (
        <div className="flex justify-center items-center gap-2 pt-4">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500"></div>
            <span className="text-slate-300 text-sm font-medium">Price Per Sqr.Yard</span>
        </div>
    );
};

export default function PriceChart() {
    return (
        <div className="w-full h-[420px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 rounded-xl shadow-2xl border border-slate-700/30 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-3xl"></div>

            {/* Chart Title */}
            <h3 className="text-white text-lg font-semibold mb-2 text-center tracking-wide">
                Dholera Land Price Trend
            </h3>
            <p className="text-slate-400 text-xs text-center mb-4">Historical price appreciation over time</p>
            <ResponsiveContainer width="100%" height="85%">
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10b981" stopOpacity={0.4} />
                            <stop offset="50%" stopColor="#06b6d4" stopOpacity={0.2} />
                            <stop offset="100%" stopColor="#0f172a" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="50%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                    </defs>
                    <CartesianGrid 
                        strokeDasharray="3 3"
                        stroke="#334155"
                        strokeOpacity={0.4}
                        vertical={false}
                    />
                    <XAxis
                        dataKey="name"
                        stroke="#64748b"
                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                        axisLine={{ stroke: '#475569', strokeWidth: 1 }}
                        tickLine={{ stroke: '#475569' }}
                    />
                    <YAxis
                        stroke="#64748b"
                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                        axisLine={{ stroke: '#475569', strokeWidth: 1 }}
                        tickLine={{ stroke: '#475569' }}
                        tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}k`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend content={<CustomLegend />} />
                    <Area
                        type="monotone" 
                        dataKey="price"
                        stroke="url(#lineGradient)"
                        strokeWidth={3}
                        fill="url(#priceGradient)" 
                        dot={{
                            r: 5,
                            fill: '#10b981',
                            stroke: '#fff',
                            strokeWidth: 2,
                        }}
                        activeDot={{
                            r: 8,
                            fill: '#06b6d4',
                            stroke: '#fff',
                            strokeWidth: 3, 
                            filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))'
                        }}
                    />
                </AreaChart>                                                       
            </ResponsiveContainer>
        </div>
    );
}