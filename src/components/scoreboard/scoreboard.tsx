'use client'
import React, { useState ,  useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image';

import onGetScore from '@/api/teamScore/teams';

import { Team } from '@/interface/teamScoreDetail'

import './progress.css'
import { Progress , Skeleton} from 'antd';

import { FaGreaterThan } from "react-icons/fa6";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";




type Props = {}

// const mockTeams = [
//     { teamID: 'TC2-001', teamName: 'Team Alpha', solve1: 45, kahoot1: 10, solve2: 40, kahoot2: 10, solve3: 50, kahoot3: 15, project: 35, summary: 205, percentage: '100%' },
//     { teamID: 'TC2-002', teamName: 'Team Beta', solve1: 40, kahoot1: 10, solve2: 35, kahoot2: 10, solve3: 50, kahoot3: 15, project: 35, summary: 195, percentage: '95%' },
//     { teamID: 'TC2-003', teamName: 'Team Gamma', solve1: 35, kahoot1: 10, solve2: 30, kahoot2: 10, solve3: 50, kahoot3: 15, project: 35, summary: 185, percentage: '90%' },
//     { teamID: 'TC2-004', teamName: 'Team Delta', solve1: 30, kahoot1: 10, solve2: 25, kahoot2: 10, solve3: 50, kahoot3: 15, project: 35, summary: 175, percentage: '85%' },
//     { teamID: 'TC2-005', teamName: 'Team Epsilon', solve1: 25, kahoot1: 10, solve2: 20, kahoot2: 10, solve3: 50, kahoot3: 15, project: 35, summary: 165, percentage: '80%' },
//     { teamID: 'TC2-006', teamName: 'Team Zeta', solve1: 20, kahoot1: 10, solve2: 15, kahoot2: 10, solve3: 50, kahoot3: 15, project: 35, summary: 155, percentage: '75%' },
//     { teamID: 'TC2-007', teamName: 'Team Eta', solve1: 15, kahoot1: 10, solve2: 10, kahoot2: 10, solve3: 50, kahoot3: 15, project: 35, summary: 145, percentage: '70%' },
//     { teamID: 'TC2-008', teamName: 'Team Theta', solve1: 10, kahoot1: 10, solve2: 5, kahoot2: 10, solve3: 50, kahoot3: 15, project: 35, summary: 135, percentage: '65%' },
//     { teamID: 'TC2-009', teamName: 'Team Iota', solve1: 5, kahoot1: 10, solve2: null, kahoot2: null, solve3: null, kahoot3: null, project: null, summary: 15, percentage: '10%' },
//     { teamID: 'TC2-010', teamName: 'Team Kappa', solve1: 45, kahoot1: 9, solve2: 40, kahoot2: 9, solve3: 50, kahoot3: 13, project: null, summary: 166, percentage: '80%' },
//     { teamID: 'TC2-011', teamName: 'Team Lambda', solve1: 40, kahoot1: 8, solve2: 35, kahoot2: 8, solve3: null, kahoot3: null, project: null, summary: 91, percentage: '60%' },
//     { teamID: 'TC2-012', teamName: 'Team Mu', solve1: 35, kahoot1: 7, solve2: 30, kahoot2: 7, solve3: 50, kahoot3: null, project: null, summary: 129, percentage: '75%' },
//     { teamID: 'TC2-013', teamName: 'Team Nu', solve1: 30, kahoot1: 6, solve2: 25, kahoot2: 6, solve3: 50, kahoot3: 10, project: null, summary: 127, percentage: '75%' },
//     { teamID: 'TC2-014', teamName: 'Team Xi', solve1: 25, kahoot1: 5, solve2: 20, kahoot2: 5, solve3: 50, kahoot3: null, project: null, summary: 105, percentage: '60%' },
//     { teamID: 'TC2-015', teamName: 'Team Omicron', solve1: 20, kahoot1: 4, solve2: 15, kahoot2: 4, solve3: 50, kahoot3: 8, project: null, summary: 101, percentage: '60%' },
//     { teamID: 'TC2-016', teamName: 'Team Pi', solve1: 15, kahoot1: 3, solve2: 10, kahoot2: 3, solve3: null, kahoot3: null, project: null, summary: 31, percentage: '30%' },
//     { teamID: 'TC2-017', teamName: 'Team Rho', solve1: 10, kahoot1: 2, solve2: 5, kahoot2: 2, solve3: 50, kahoot3: null, project: null, summary: 69, percentage: '50%' },
//     { teamID: 'TC2-018', teamName: 'Team Sigma', solve1: 5, kahoot1: 1, solve2: null, kahoot2: null, solve3: null, kahoot3: null, project: null, summary: 6, percentage: '10%' },
//     { teamID: 'TC2-019', teamName: 'Team Tau', solve1: 45, kahoot1: null, solve2: 40, kahoot2: null, solve3: 50, kahoot3: null, project: 35, summary: 170, percentage: '80%' },
//     { teamID: 'TC2-020', teamName: 'Team Upsilon', solve1: 40, kahoot1: null, solve2: 35, kahoot2: null, solve3: 50, kahoot3: null, project: 35, summary: 160, percentage: '75%' }
// ];

export default function Scoreboard({}: Props) {
    const [teams, setTeams] = useState<Team[]>([])
    const [selectedTeam, setSelectedTeam] = useState(Array(20).fill(false))

    useEffect(()=>{
        //getting teams data from api
        onGetScore().then((data) => {
            // console.log(data)
            setTeams(data)
        }).catch((error) => {
            console.log(error)
            
        })
    },[])
    
    return (
        <section className="min-h-screen text-white pt-[15vh] pb-[10vh]">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-6">
                    <nav className="flex flex-row text-sm text-gray-200 items-center gap-x-[0.5vw]" >
                        <Link href="/" className="hover:underline ">Tech camp</Link>
                        <FaGreaterThan className='text-xs'/>
                        <span className='text-xs text-gray-300'>Scoreboard</span>
                    </nav>
                </div>
                {/* Leaderboard Table */}
                <h1 className="text-3xl font-bold my-[3vh]">Scoreboard</h1>

                <div className="bg-secondaryBlue p-4 rounded-xl shadow-xl">
                    <ul className='flex flex-col px-[0.5vw] rounded-xl gap-y-[1vh]'>
                        <li 
                            key='header'
                            className='flex flex-row justify-between pr-[33px] items-center my-[1vh]'>
                            <span className='text-left w-full pl-[2vw] text-xl font-semibold text-white'>
                                <h1>
                                    Positions
                                </h1>
                            </span>
                            <span className='text-right w-full text-base font-semibold text-gray-100'>
                                <h1>
                                    Score
                                </h1>
                            </span>
                        </li>
                        {teams.map((team, index) => (
                                <li
                                    key={team.teamID}
                                    className={`flex ${selectedTeam[index] ? 'flex-col' : 'flex-row'} items-center text-gray-200 justify-between py-[0.5vh]  ${index % 2 === 0 ? 'bg-primaryBlue' : 'bg-primaryBlue bg-opacity-60 hover:bg-opacity-90'} hover:bg-gray-700 hover:scale-[1.01] rounded-xl text-sm md:text-base lg:text-lg transition-transform duration-200 cursor-pointer`}
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        if (!selectedTeam[index]) {
                                            const newSelectedTeam = [...selectedTeam];
                                            newSelectedTeam[index] = !newSelectedTeam[index];
                                            setSelectedTeam(newSelectedTeam);
                                        }
                                    }}
                                >   
                                    <div className='flex flex-row w-full'>
                                        <span className='text-left '>
                                            <div className='pl-[0.5vw]'>
                                                {
                                                    index < 3 ? (
                                                        <span className=''>
                                                            <Image src={`/assets/medal/medal${index+1}.png`} className='min-w-[50px] max-w-[50px]' width={150} height={50} alt='KU Logo'/>
                                                        </span>
                                                    ) : 
                                                    <p className='text-center text-sm bg-secondaryBlue bg-opacity-60 text-white px-[0.75vw] py-[0.5vh] rounded-full w-[50px] cursor-default'>{index+1}</p>
                                                
                                                }
                                            </div>
                                        </span>
                                        <span className='flex w-full items-center'>
                                            <span className='flex items-center pl-[1.5vw] gap-x-[1vw]'>
                                                <h1 className=''>
                                                    {team.teamName}
                                                </h1>                               
                                            </span>
                                        </span>
                                        <span className='w-full flex items-center justify-end'>
                                                <p className='flex items-center justify-center text-center  text-white w-[50px] cursor-default'>
                                                    {team.summary ? team.summary : 0}
                                                </p>                                    
                                        </span>
                                        <span className='flex justify-center items-center text-center pr-[1vw]'>
                                            <button
                                                className='hover:bg-secondaryBlue rounded-full p-[0.3rem] hover:bg-opacity-50 text-xl text-center'
                                                onClick={(e)=>{
                                                    e.preventDefault()
                                                    const newSelectedTeam = [...selectedTeam];
                                                    newSelectedTeam[index] = !newSelectedTeam[index];
                                                    setSelectedTeam(newSelectedTeam);
                                                }}          
                                            >
                                                {selectedTeam[index] ? <MdExpandLess/> : <MdExpandMore/>}
                                            </button>
                                        </span>                            
                                    </div>
                                {
                                    selectedTeam[index] && (
                                        
                                            <li
                                                key={team.teamID}
                                                className='flex flex-col w-full text-gray-200 rounded-xl text-xs md:text-sm transition-transform duration-1000 py-[1vh] pr-[33px]'
                                            >
                                                <div className='flex flex-col w-full pl-[4vw] gap-y-[1vh]'>
                                                    <span className='flex flex-row justify-between w-full'>
                                                        <h1>
                                                            Problem Solving 1
                                                        </h1>
                                                        <p>
                                                            {team.solve1 ? team.solve1 : 0} 
                                                        </p>
                                                    </span>
                                                    <span className='flex flex-row justify-between w-full'>
                                                        <h1>
                                                            Kahoot 1
                                                        </h1>
                                                        <p>
                                                            {team.kahoot1 ? team.kahoot1 : 0} 
                                                        </p>
                                                    </span>
                                                    <span className='flex flex-row justify-between w-full'>
                                                        <h1>
                                                            Problem solving 2
                                                        </h1>
                                                        <p>
                                                            {team.solve2 ? team.solve2 : 0} 
                                                        </p>
                                                    </span>
                                                    <span className='flex flex-row justify-between w-full'>
                                                        <h1>
                                                            Kahoot 2
                                                        </h1>
                                                        <p>
                                                            {team.kahoot2 ? team.kahoot2 : 0} 
                                                        </p>
                                                    </span>
                                                    <span className='flex flex-row justify-between w-full'>
                                                        <h1>
                                                            Problem solving 3
                                                        </h1>
                                                        <p>
                                                            {team.solve3 ? team.solve3 : 0} 
                                                        </p>
                                                    </span>
                                                    <span className='flex flex-row justify-between w-full'>
                                                        <h1>
                                                            Kahoot 3
                                                        </h1>
                                                        <p>
                                                            {team.kahoot3 ? team.kahoot3 : 0} 
                                                        </p>
                                                    </span>
                                                    <span className='flex flex-row justify-between w-full'>
                                                        <h1>
                                                            Project
                                                        </h1>
                                                        <p>
                                                            {team.project ? team.project : 0} 
                                                        </p>
                                                    </span>
                                                    <span>
                                                        <Progress 
                                                            className={`${(Number(team.percentage)/7)*100 !== 100 ? 'custom-progress' : ''}`}
                                                            percent={team.percentage ? Number(((Number(team.percentage)/7)*100).toFixed(0)) : 0} 
                                                            type="line"
                                                            size="small"
                                                        />
                                                    </span>
                                                </div>
                                            </li>
                                        
                                    )
                                }                                 
                                </li>    
                        ))}
                        {teams.length === 0 &&  (
                            <>
                                {Array(20).fill(0).map((_, index) => (
                                   <li
                                        key={index}
                                        className='flex flex-col w-full text-gray-200 justify-between bg-primaryBlue bg-opacity-6021 hover:bg-opacity-90 hover:bg-gray-700 rounded-xl text-sm md:text-base lg:text-lg transition-transform duration-[2000] cursor-pointer'
                                    >
                                        <div className='w-full transition-all duration-1000 px-[2vw] py-[3vh]'> 
                                            <Skeleton
                                                active              
                                            />
                                        </div>
                               </li> 
                                ))}
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </section>
  )
}