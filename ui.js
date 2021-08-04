class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
    this.repo = document.querySelector('#repo');
  }

  showProfile(user, profileLink) {
    this.profile.innerHTML = `
        <div class="row card">
        <div class="card-content">
            <div class="row">
                <div class="col xs7 s6 m4">
                    <img src=${user.avatar_url} alt="profile pic" class="responsive-img">
                    
                </div>
                <div class="col xs5 s6 m8">
                    <div class="row">
                        <div class="col s12">
                            <span class="btn-small tag1">
                            Public Repos : ${user.public_repos}
                            </span>
                            <span class="btn-small tag2">
                            Public Gits : ${user.public_gists}
                            </span>
                            <span class="btn-small tag3">
                            Followers : ${user.followers}
                            </span>
                            <span class="btn-small tag4">
                            Following : ${user.following}
                            </span>
                        </div>
                        <div class="col s12 ">
                            <ul class="collection">
                                <li class="collection-item">
                                Company : ${user.company}
                                </li>
                                <li class="collection-item">
                                Website : ${user.blog}
                                 </li>
                                <li class="collection-item">
                                Location : ${user.location}
                                </li>
                                <li class="collection-item">
                                Member Since: ${user.created_at}
                                </li>
                            </ul>
                            <a class="center-align btn" href="${profileLink}" target="_blank">Visit Profile</a>
                        </div>
                    </div>
                </div> 
            </div>
            
        </div>
    </div>
        `;
  }

  showRepos(repos) {
    var content = `
        <div class="row card">
        <div class="card-content">
            <h4>Latest Repositories</h4>
            <div class="row">
            <div class="col s12 ">
            <ul class="collection">
        `;

    repos?.forEach(function (repoData) {
      content += `
            <li class="collection-item" style = "height:50px;">
            <p class="left">${repoData.name}</p>
                <span class="secondary-content right">
                
                    <div class="btn-small tooltipped tag1" data-tooltip="Stars"> <i class="fas fa-star left"></i> ${repoData.stargazers_count} </div>
                    <div class="btn-small tooltipped tag2" data-tooltip="Watchers"><i class="fas fa-eye left"></i> ${repoData.watchers_count}</div>
                    <div class="btn-small tooltipped tag4" data-tooltip="Forks"><i class="fas fa-code-branch left"></i> ${repoData.forks_count}</div>
                </span>
            </li>
            `;
    });

    content += `
                    </li>
                    </ul>
                </div>
                </div>                
            </div>
            </div>
        `;

    this.repo.innerHTML = content;
  }

  clearProfile() {
    this.profile.innerHTML = ``;
    this.repo.innerHTML = ``;
  }
}
