import { truncate } from 'lodash';
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MostForked = ({ repos }) => {
    const sortByFork = repos.slice(0).sort((a, b) => (a.forkCount > b.forkCount ? -1 : 1)).slice(0, 4)
    
    const tickFork = value => {
        let roundVal = value > 1000 ? (value/1000).toFixed(1) + 'k' : value

        return roundVal
    }

    const tickRepo = value => {
        let shaortVal = truncate(value, {length: 10})

        return shaortVal
    }

    console.log(sortByFork)

    return (
        <div className='p-3 shadow-bs1 rounded-md h-full min-h-[400px] max-w-[420px] w-full'>
            <p className='text-center mb-5 text-xl font-semibold'>Most Forked Repos</p>
            <ResponsiveContainer width="100%" height={420}>
                <BarChart
                    width={200}
                    height={250}
                    data={sortByFork}
                    margin={{
                        top: 5,
                        right: 10,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis 
                        dataKey="name" 
                        interval={0}
                        tickFormatter={tickRepo}
                    />
                    <YAxis 
                        dataKey="forkCount" 
                        width={24}
                        tickFormatter={tickFork}
                    />
                    <Tooltip />
                    <Bar dataKey="forkCount" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

            <div className="flex items-center justify-center mt-3 gap-2">
                <span className="h-3 w-3 bg-[#8884d8]"></span>
                <p className="text-base font-bold">Fork Count</p>
            </div>
        </div>
    )
}

export default MostForked
