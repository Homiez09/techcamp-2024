import React from 'react'

import Link from 'next/link';

type Props = {}

const teams = [
    { rank: 1, teamID: 'TC2-001', teamName: 'Team Alpha', totalScore: 205, percentageScore: '100%' },
    { rank: 2, teamID: 'TC2-002', teamName: 'Team Beta', totalScore: 195, percentageScore: '95%' },
    { rank: 3, teamID: 'TC2-003', teamName: 'Team Gamma', totalScore: 185, percentageScore: '90%' },
    { rank: 1, teamID: 'TC2-001', teamName: 'Team Alpha', totalScore: 205, percentageScore: '100%' },
    { rank: 2, teamID: 'TC2-002', teamName: 'Team Beta', totalScore: 195, percentageScore: '95%' },
    { rank: 3, teamID: 'TC2-003', teamName: 'Team Gamma', totalScore: 185, percentageScore: '90%' },    { rank: 1, teamID: 'TC2-001', teamName: 'Team Alpha', totalScore: 205, percentageScore: '100%' },
    { rank: 2, teamID: 'TC2-002', teamName: 'Team Beta', totalScore: 195, percentageScore: '95%' },
    { rank: 3, teamID: 'TC2-003', teamName: 'Team Gamma', totalScore: 185, percentageScore: '90%' },
  ];

export default function Ranking({}: Props) {
  return (
    <section className="min-h-screen text-white pt-[15vh]">
        <div className="container mx-auto px-4">
            {/* Header */}
            <div className="mb-6">
                <nav className="text-base text-gray-400">
                <Link href="/" className="hover:underline ">Tech camp</Link> / <span className='text-sm text-gray-300'>Leaderboard</span>
                </nav>
                <h1 className="text-3xl font-bold mt-2">Leaderboard</h1>
            </div>

            {/* Leaderboard Table */}
            <div className="bg-secondaryBlue p-4 rounded-xl shadow-xl">
                <div className="overflow-x-auto">
                <table className="min-w-full text-center text-white rounded-xl">
                    <thead>
                        <tr className="bg-primaryBlue opacity-70 ">
                            <th className="px-4 py-2">Rank</th>
                            <th className="px-4 py-2">Team Name</th>
                            <th className="px-4 py-2">Total Score</th>
                            <th className="px-4 py-2">Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map((team, index) => (
                            <tr key={team.teamID} className={`${index % 2 === 0 ? 'bg-primaryBlue' : 'bg-primaryBlue bg-opacity-60'}`}>
                                <td className="border px-4 py-2">{team.rank}</td>
                                <td className="border px-4 py-2">{team.teamName}</td>
                                <td className="border px-4 py-2">{team.totalScore}</td>
                                <td className="border px-4 py-2">{team.percentageScore}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
  </section>
  )
}