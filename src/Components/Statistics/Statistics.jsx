import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
  const assignmentMark = [
    { id: 1, time_mnt: 1200, assignment: 1, mark: 50 },
    { id: 2, time_mnt: 3000, assignment: 2, mark: 58 },
    { id: 3, time_mnt: 2000, assignment: 3, mark: 57 },
    { id: 4, time_mnt: 1350, assignment: 4, mark: 59 },
    { id: 5, time_mnt: 1800, assignment: 5, mark: 57 },
    { id: 6, time_mnt: 2000, assignment: 6, mark: 42 },
    { id: 7, time_mnt: 3240, assignment: 7, mark: 60 },
    { id: 8, time_mnt: 5670, assignment: 8, mark: 58 }
  ]
  return (
    <div>
      <h2 style={{ color: '#7E90FE' }}>This is Statistics</h2>
      <div>
        <div className='mt-5'>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <ComposedChart
                width={500}
                height={400}
                data={assignmentMark}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="id" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="time_mnt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="assignment" barSize={50} fill="#413ea0" />
                <Line type="monotone" dataKey="mark" stroke="	#800080" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Statistics;