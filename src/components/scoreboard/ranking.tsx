import React from 'react'


import Link from 'next/link'

import { FaGreaterThan } from "react-icons/fa6";
import { MdExpandMore } from "react-icons/md";

type Props = {}

const teams = [
    { rank: 1, teamID: 'TC2-001', teamName: 'Team Alpha', totalScore: 205, percentageScore: '100%' },
    { rank: 2, teamID: 'TC2-002', teamName: 'Team Beta', totalScore: 195, percentageScore: '95%' },
    { rank: 3, teamID: 'TC2-003', teamName: 'Team Gamma', totalScore: 185, percentageScore: '90%' },
    { rank: 4, teamID: 'TC2-004', teamName: 'Team Delta', totalScore: 175, percentageScore: '85%' },
    { rank: 5, teamID: 'TC2-005', teamName: 'Team Epsilon', totalScore: 165, percentageScore: '80%' },
    { rank: 6, teamID: 'TC2-006', teamName: 'Team Zeta', totalScore: 155, percentageScore: '75%' },
    { rank: 7, teamID: 'TC2-007', teamName: 'Team Eta', totalScore: 145, percentageScore: '70%' },
    { rank: 8, teamID: 'TC2-008', teamName: 'Team Theta', totalScore: 135, percentageScore: '65%' },
    { rank: 9, teamID: 'TC2-009', teamName: 'Team Iota', totalScore: 125, percentageScore: '60%' },
    { rank: 10, teamID: 'TC2-010', teamName: 'Team Kappa', totalScore: 115, percentageScore: '55%' },
    { rank: 11, teamID: 'TC2-011', teamName: 'Team Lambda', totalScore: 105, percentageScore: '50%' },
    { rank: 12, teamID: 'TC2-012', teamName: 'Team Mu', totalScore: 95, percentageScore: '45%' },
    { rank: 13, teamID: 'TC2-013', teamName: 'Team Nu', totalScore: 85, percentageScore: '40%' },
    { rank: 14, teamID: 'TC2-014', teamName: 'Team Xi', totalScore: 75, percentageScore: '35%' },
    { rank: 15, teamID: 'TC2-015', teamName: 'Team Omicron', totalScore: 65, percentageScore: '30%' },
    { rank: 16, teamID: 'TC2-016', teamName: 'Team Pi', totalScore: 55, percentageScore: '25%' },
    { rank: 17, teamID: 'TC2-017', teamName: 'Team Rho', totalScore: 45, percentageScore: '20%' },
    { rank: 18, teamID: 'TC2-018', teamName: 'Team Sigma', totalScore: 35, percentageScore: '15%' },
    { rank: 19, teamID: 'TC2-019', teamName: 'Team Tau', totalScore: 25, percentageScore: '10%' },
    { rank: 20, teamID: 'TC2-020', teamName: 'Team Upsilon', totalScore: 15, percentageScore: '5%' }
  ];
  

export default function Ranking({}: Props) {
  return (
    <section className="min-h-screen text-white pt-[15vh] pb-[10vh]">
        <div className="container mx-auto px-4">
            {/* Header */}
            <div className="mb-6">
                <nav className="flex flex-row text-sm text-gray-200 items-center gap-x-[0.5vw]" >
                    <Link href="/" className="hover:underline ">Tech camp</Link>
                    <FaGreaterThan className='text-xs'/>
                    <span className='text-xs text-gray-300'>Leaderboard</span>
                </nav>
            </div>
            {/* Leaderboard Table */}
            <h1 className="text-3xl font-bold my-[3vh]">Leaderboard</h1>

            <div className="bg-secondaryBlue p-4 rounded-xl shadow-xl">
                <div className="">
                {/* <table className="min-w-full text-center text-white rounded-xl">
                    <thead>
                        <tr className="bg-primaryBlue opacity-70 ">
                            <th className="px-4 py-2">Rank</th>
                            <th className="px-4 py-2">Team Name</th>
                            <th className="px-4 py-2">Total Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map((team, index) => (
                            <tr key={team.teamID} className={`${index % 2 === 0 ? 'bg-primaryBlue' : 'bg-primaryBlue bg-opacity-60'}`}>
                                <td className="border px-4 py-2">{team.rank}</td>
                                <td className="border px-4 py-2">{team.teamName}</td>
                                <td className="border px-4 py-2">{team.totalScore}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
                <ul className='flex flex-col px-[1vw] rounded-xl gap-y-[1vh]'>
                    <li className='flex flex-row justify-between'>
                        <span className='text-left w-full'>
                            <h1>
                                Rank
                            </h1>
                        </span>
                        <span className='text-left w-full'>
                            <h1>
                                Name
                            </h1>
                        </span>
                        <span className='text-left w-full'>
                            <h1>
                                Score
                            </h1>
                        </span>
                    </li>
                    {teams.map((team, index) => (
                        <li key={team.teamID} className={`flex flex-row items-center text-gray-200 justify-between py-[0.5vh]  ${index % 2 === 0 ? 'bg-primaryBlue' : 'bg-primaryBlue bg-opacity-60 hover:bg-opacity-90'} hover:bg-gray-700 rounded-xl`}>
                            <span className='text-left w-full '>
                                <div className='pl-[2vw] '>
                                    <p className='text-sm  bg-secondaryBlue bg-opacity-60 text-white w-fit px-[0.5vw] py-[0.5vh] rounded-full '>{index+1}</p>
                                </div>
                            </span>
                            <span className='text-left w-full'>
                                <h1 className='pl-[1.5vw]'>
                                    {team.teamName}
                                </h1>
                            </span>
                            <span className='text-left w-full'>
                                <h1 className='pl-[3vw]'>
                                    {team.totalScore}
                                </h1>
                            </span>
                            <span className=''>
                                <span className='pr-[2vw]'>
                                    <button className='hover:bg-secondaryBlue rounded-full px-[0.5vw] py-[0.5vh] hover:bg-opacity-50 text-xl'>
                                        <MdExpandMore/>
                                    </button>
                                </span>
                            </span>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
  </section>
  )
}