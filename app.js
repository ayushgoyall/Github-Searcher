const github = new Github();
const ui = new UI();
const searhUser = document.querySelector('#button');
const userName = document.querySelector('#username');
searhUser.addEventListener('click', (e) => {
  const userText = userName.value;
  if (userText !== '') {
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        ui.clearProfile();
      } else {
        ui.showProfile(data.profile, data.profileLink);
        ui.showRepos(data.repo);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }

  e.preventDefault();
});
