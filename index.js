const titleInput = document.querySelector('#title');
const slugInput = document.querySelector('#slug');
const generateSlugBtn = document.querySelector('#generateSlugBtn');

const generateSlug = (title) => title.toLowerCase().replace(/ /g, '-');

generateSlugBtn.addEventListener('click', (evnt)=> slugInput.value = generateSlug(titleInput.value));

titleInput.addEventListener('keyup', (evnt) =>slugInput.value = generateSlug(titleInput.value));