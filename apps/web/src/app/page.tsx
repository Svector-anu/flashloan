'use client';

import { useState } from 'react';

export default function Home() {
    const [achievement, setAchievement] = useState('');
    const [baseStatus, setBaseStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
    const [stacksStatus, setStacksStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
    const [baseHash, setBaseHash] = useState('');
    const [stacksHash, setStacksHash] = useState('');

    const mintOnBase = async () => {
        if (!achievement) return;
        setBaseStatus('pending');
        try {
            // Simulate interaction
            await new Promise(r => setTimeout(r, 2000));
            setBaseHash('0x123...abc');
            setBaseStatus('success');
        } catch (e) {
            setBaseStatus('error');
        }
    };

    const mintOnStacks = async () => {
        if (!achievement) return;
        setStacksStatus('pending');
        try {
            // Simulate interaction
            await new Promise(r => setTimeout(r, 2000));
            setStacksHash('0x456...def');
            setStacksStatus('success');
        } catch (e) {
            setStacksStatus('error');
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Mint Your Achievements
                </h2>
                <p className="text-xl text-muted-foreground">
                    Create soulbound badges that prove your skills forever on Base and Stacks.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Base Card */}
                <div className="border rounded-xl p-6 space-y-4 bg-card text-card-foreground shadow-sm">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold">Base (EVM)</h3>
                        <div className="px-2 py-1 bg-secondary rounded text-xs font-mono">Chain ID: 8453</div>
                    </div>
                    <p className="text-muted-foreground">Mint using Solidity contracts on Base network.</p>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Achievement Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Solidity Master"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={achievement}
                            onChange={(e) => setAchievement(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={mintOnBase}
                        disabled={!achievement || baseStatus === 'pending'}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    >
                        {baseStatus === 'pending' ? 'Minting...' : 'Mint on Base'}
                    </button>

                    {baseStatus === 'success' && (
                        <div className="p-4 bg-secondary rounded-lg text-sm break-all">
                            <p className="font-semibold text-green-600 mb-1">Success!</p>
                            <p className="font-mono text-muted-foreground">{baseHash}</p>
                        </div>
                    )}
                </div>

                {/* Stacks Card */}
                <div className="border rounded-xl p-6 space-y-4 bg-card text-card-foreground shadow-sm">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold">Stacks</h3>
                        <div className="px-2 py-1 bg-secondary rounded text-xs font-mono">Mainnet</div>
                    </div>
                    <p className="text-muted-foreground">Mint using Clarity contracts on Stacks network.</p>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Achievement Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Clarity Expert"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={achievement}
                            onChange={(e) => setAchievement(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={mintOnStacks}
                        disabled={!achievement || stacksStatus === 'pending'}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    >
                        {stacksStatus === 'pending' ? 'Minting...' : 'Mint on Stacks'}
                    </button>

                    {stacksStatus === 'success' && (
                        <div className="p-4 bg-secondary rounded-lg text-sm break-all">
                            <p className="font-semibold text-green-600 mb-1">Success!</p>
                            <p className="font-mono text-muted-foreground">{stacksHash}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="border-t pt-12">
                <h3 className="text-2xl font-bold mb-6">Recent Activity</h3>
                <div className="border rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-secondary">
                            <tr>
                                <th className="px-4 py-3 text-left font-medium">Platform</th>
                                <th className="px-4 py-3 text-left font-medium">Action</th>
                                <th className="px-4 py-3 text-left font-medium">Status</th>
                                <th className="px-4 py-3 text-right font-medium">Hash</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            <tr>
                                <td className="px-4 py-3">Base</td>
                                <td className="px-4 py-3">Mint Badge</td>
                                <td className="px-4 py-3"><span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Pending</span></td>
                                <td className="px-4 py-3 text-right font-mono text-muted-foreground">Waiting...</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">Stacks</td>
                                <td className="px-4 py-3">Mint Badge</td>
                                <td className="px-4 py-3"><span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Success</span></td>
                                <td className="px-4 py-3 text-right font-mono text-muted-foreground">0xabc...123</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
