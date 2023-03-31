import './style.css';

const candidatesListContainer = document.querySelector('#candidates-list');

// Fetch candidates data from Random User API
const fetchCandidates = async () => {
  const response = await fetch('https://randomuser.me/api/?results=10');
  const data = await response.json();
  return data.results;
};

// Template of each candidate
const candidateTemplate = (picture, firstName, lastName, email) => `
<li class='flex flex-col md:flex-row md:items-center md:justify-between border-b py-6 space-y-3 md:space-y-0'>
  <div class='flex items-center justify-start space-x-4 md:w-1/3'>
    <img class='w-14 h-14 rounded-full object-cover'
      src=${picture} alt="candidate profile">
    <div>
      <p class='capitalize text-custom-purple font-medium'>${firstName} ${lastName}</p>
      <span class='text-custom-gray space-x-2 flex items-center'>
        <i class="fa-solid fa-envelope text-[#9a9eaa]"></i>
        <p>${email}</p>
      </span>
    </div>
  </div>
  <div class='space-y-1 flex flex-col items-start md:w-1/3'>
    <p class='text-custom-blue font-medium'>Applied on January 7,2020</p>
    <p class='text-custom-gray flex items-center space-x-2'>
      <i class="fa-solid fa-circle-check text-[#67d1a1]"></i>
      <span>Completed phone screening</span>
    </p>
  </div>
  <button type='button' title='view more' class='p-2 text-md flex items-center justify-center space-x-3 md:space-x-0'>
    <span class='text-custom-purple font-medium md:hidden'>View more</span>
    <i class="fa-solid fa-angle-right text-[#9a9eaa]"></i>
  </button>
</li>
`;

window.addEventListener('load', () => {
  const candidates = fetchCandidates();
  candidates.then((data) => {
    data.forEach((candidate) => {
      candidatesListContainer.innerHTML += candidateTemplate(
        candidate.picture.medium,
        candidate.name.first,
        candidate.name.last,
        candidate.email,
      );
    });
  });
});

// Pagination active state
const pagination = document.querySelector('#pagination');
const paginationItems = pagination.querySelectorAll('li');

paginationItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    paginationItems.forEach((item) => {
      item.classList.remove('active');
      item.classList.add('not-active');
    });
    e.target.closest('li').classList.add('active');
    e.target.closest('li').classList.remove('not-active');
  });
});

// Hamburger menu
const menu = document.querySelector('#menu');
const navLinks = document.querySelector('#nav-links');
const close = document.querySelector('#close-menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  navLinks.classList.toggle('navbar-mobile');
  close.classList.toggle('fixed');
  close.classList.toggle('hidden');
})

close.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  navLinks.classList.toggle('navbar-mobile');
  close.classList.toggle('hidden');
  close.classList.toggle('fixed');
})
