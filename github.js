class Github {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`
    );

    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();
    const profileLink = `https://www.github.com/${user}`;

    return {
      profile: profileData,
      repo: repoData,
      profileLink: profileLink,
    };
  }
}
