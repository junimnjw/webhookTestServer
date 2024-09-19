const axios = require('axios');

//rest api to get repostiory 
const username = 'junimnjw';
const repoUrl = `https://api.github.com/users/${username}/repos`;
const token = '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'

async function getReposWithLastCommit(){
	try{
		//get repository list
		const reposResponse = await axios.get(repoUrl, {
			headers:{
				'Authorization': `token ${token}`,
				'Accept': 'application/vnd.github.v3+json'
			}
		});

		const repos = reposResponse.data;

		for (const repo of repos)
		{
			
			const commitsUrl = `https://api.github.com/repos/${username}/${repo.name}/commits`;

			const commitsResponse = await axios.get(commitsUrl, {
				headers:{
					'Authorization':`token ${token}`,
					'Accept': 'application/vnd.github.v3+json'
				}
			});


			const lastCommit = commitsResponse.data[0];
			console.log(`Repository: ${repo.name}`);
			console.log(`Last Commit Message: ${lastCommit.commit.message}`);
			console.log('--------------------------------------------');
		}
	}
	catch(error)
	{
		console.error('Error fetching data:', error);
	}
}

getReposWithLastCommit();



