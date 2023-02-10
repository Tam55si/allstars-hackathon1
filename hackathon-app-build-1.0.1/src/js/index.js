// The following code starts Mock Service Worker tool which allows you to simulate a backend (an API) for building your apps that talk to a remote service. You can visit https://mswjs.io for details on this utility and check src/api/routes.js for a sample API route that you can edit/create as needed to simulate a real world API. This simulated backend will not be part of the completed application (built edition) and you must use a real world backend built using Node.js + Express or Java + Spring Boot to provide such a service.

// If you do not require a simulated backend, you can remove the code shown below.
if (process.env.NODE_ENV === 'development') {
  const apiStatus = document.querySelector('#api-status');
  import('../api/browser')
    .then(({ worker }) => worker.start())
    .then(() => fetch('/'))
    .then((res) => res.json())
    .then((res) => (apiStatus.innerText = res.message));
}

const createHeading = function({heading, subheading}){
  const heading1 = document.createElement('h1');
  heading1.setAttribute('class', 'heading-1');
  const subHeading = document.createElement('h3');
  subHeading.setAttribute('class', 'subject');
  
  document.body.prepend(createHeading);
};
createHeading({
 heading: 'The News Portal',
 subheading: `This is where you will get the latest news`
});

// const createNavBar = function(){
//   const unorderedList = document.createElement('div');
//   unorderedList.setAttribute('class', 'un-list-div');

//   const li1 = document.createElement('');
//   li1.setAttribute('class', 'list');

//   document.body.prepend(createNavBar);
// }


const createPost = function ({title, content}){
  const socialCard = document.createElement('div');
  socialCard.setAttribute('class', 'social-card');

  const icon = document.createElement('div');
  icon.setAttribute('class', 'post-icon');

  const postTitle = document.createElement('div');
  postTitle.setAttribute('class', 'post-title');

  const postUser = document.createElement('div');
  postUser.setAttribute('class', 'post-user');

  const postContent = document.createElement('div');
  postContent.setAttribute('class', 'post-content');

  socialCard.append(icon, postTitle, postUser, postContent);

  //Adding content
  postTitle.innerText = title;
  postUser.innerText = 'Tanmoy';
  postContent.innerText = content;

  document.body.append(socialCard);
};
createPost({
  title: 'This is the news',
  content: `Rescuers pushed to find survivors on Friday as the death toll in the massive earthquake that struck regions in Turkey and Syria crossed 21,000. Turkey has seen 1,509 aftershocks so far and tens of thousands have been injured or displaced.`
});
createPost({
  title: 'Another post',
  content: `Have been doing well with the bat for the last one year. That confidence is coming in handy. `
});