import React, { useEffect, useState } from 'react';

const JobFeed = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json');
        if (!res.ok) throw new Error('Failed to fetch job IDs');

        const ids = await res.json();
        const jobPromises = ids.slice(0, 10).map(id =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => {
            if (!res.ok) throw new Error(`Failed to fetch job ${id}`);
            return res.json();
          })
        );

        const jobResults = await Promise.all(jobPromises);

        setJobs(jobResults);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Something went wrong');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">Find job for your Interest</h1>

      {loading && <p className="text-gray-400 animate-pulse">Loading jobs...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(job => (
            <div
              key={job.id}
              className="bg-gray-800 rounded-xl p-5 shadow-lg hover:shadow-xl hover:bg-gray-700 transition duration-300"
            >
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-300 hover:underline"
              >
                {job.title}
              </a>
              <p className="mt-2 text-sm text-gray-400">
                Posted by <span className="text-orange-300">{job.by}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobFeed;
